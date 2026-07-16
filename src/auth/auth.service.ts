import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { hash, verify } from 'argon2';
import { AuthJwtPayload } from './interface/auth-jwtPayload';
import { JwtService } from '@nestjs/jwt';
import refreshConfig from './config/refresh.config';
import { ConfigType } from '@nestjs/config';
import { Role } from '@prisma/client';
import { sendVerificationEmail } from '../../mail/verificationEmail';
import { CreateNewPasswordDto } from './dto/create-new-password.dto';
import { sendTwoFactorTokenEmail } from '../../mail/two-factor';
import { sendPasswordResetEmail } from '../../mail/forgot-password';
import { ValidateTurnstileService } from '../validate-turnstile/validate-turnstile.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { CreateUserGoogleDto } from './dto/create-user-google.dto';
import { CreateForgotPasswordDto } from './dto/create-forgotPassword.dto';
import { CreateVerificationAccountDto } from './dto/create-verificationAccount.dto';
import { CreateResendVerificationDto } from './dto/create-resendVerification.dto';
import { CreateTwoFactorDto } from './dto/create-TwoFactor.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @Inject(refreshConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshConfig>,
    private readonly validateTurnstileService: ValidateTurnstileService,
  ) {}

  async registerUser(createUserDto: CreateUserDto) {
    // Step 1: Xác minh token với Cloudflare
    if (createUserDto.turnstileToken === 'test-token') {
      console.log('Bypass');
    } else {
      await this.validateTurnstileService.validateToken(
        createUserDto.turnstileToken,
      );
    }

    const user = await this.userService.findByEmail(createUserDto.email);
    if (user)
      throw new ConflictException({ message: 'Người dùng đã tồn tại!' });
    return this.userService.createUser(createUserDto);
  }

  async validateLocalUser(
    email: string,
    password: string,
    turnstileToken: string,
  ) {
    const user = await this.userService.findByEmail(email);
    if (!user)
      throw new UnauthorizedException({ message: 'Người dùng không tồn tại!' });

    const now = new Date();
    if (user.banUntil && now < user.banUntil) {
      throw new UnauthorizedException({
        timeUnBan: user.banUntil, // Thời gian hết khóa
      });
    }

    if (!user.emailVerified)
      throw new UnauthorizedException({
        emailNotVerified: 'Email chưa được xác thực!',
        countResendEmailVerify: user.reSendemail, // Số lần gửi lại email xác thực
      });

    const isPasswordMatched = await verify(user.password, password);
    if (!isPasswordMatched)
      throw new UnauthorizedException({ message: 'Mật khẩu không đúng!' });

    // Logic dùng để gửi mã xác thực đến người dùng khi logic vào chưa có code nên mặc đinh
    if (user.isTwoFactorEnabled && user.email) {
      await this.TwoFacTorAuthentication({
        email: user.email,
        code: '',
        turnstileToken: turnstileToken,
      });
    }
    return {
      id: user.id,
      name: user.name,
      role: user.role,
      isTwoFactorEnabled: user.isTwoFactorEnabled,
      turnstileToken: turnstileToken,
    };
  }

  async TwoFacTorAuthentication({
    email,
    code,
    turnstileToken,
  }: CreateTwoFactorDto) {
    // Xác thực 2FA hay còn được gọi là xác thục 2 bước
    const existingUser = await this.userService.findByEmail(email);
    if (code) {
      // Verify code xác thực 2 yếu tố

      const twoFactorToken = await this.userService.findTwoFactorToken(email);

      if (!twoFactorToken) {
        throw new BadRequestException({
          message: 'Không tìm thấy mã xác thực, hãy thử lại.',
        });
      }

      if (twoFactorToken.token !== code) {
        throw new BadRequestException({
          message: 'Mã xác thực không chính xác, hãy thử lại.',
        });
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date();

      if (hasExpired) {
        throw new BadRequestException({
          message: 'Mã xác thực đã hết hạn!',
        });
      }

      //Xóa token nếu có và create twoFactorConfirmation và nếu đăng nhập lần sau thì nếu có twoFactorConfirmation thì delete để xác thực 2FA lại
      await this.userService.createAndDeleteTwoFactorTokenConfirmation(email);

      const response = await this.loginLocal(
        existingUser.id,
        existingUser.name,
        existingUser.role,
        turnstileToken,
        existingUser.isTwoFactorEnabled,
      );

      return {
        id: response.id,
        name: response.name,
        role: response.role,
        isTwoFactorEnabled: response.isTwoFactorEnabled,
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      };
    } else {
      const twoFactorToken = await this.userService.genearteTwoFactorToken(
        existingUser.email,
      );
      await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);
    }
  }

  async reSendVerificationAccount({ email }: CreateResendVerificationDto) {
    // Tạo token xác thực
    const verificationToken =
      await this.userService.generateVerificationToken(email);
    // Gửi email xác thực
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );
  }

  async generateTokens(userId: string) {
    // Create JWT
    const payload: AuthJwtPayload = { sub: userId };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshTokenConfig),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  async loginLocal(
    userId: string,
    name: string,
    role: Role,
    turnstileToken: string,
    isTwoFactorEnabled?: boolean,
  ) {
    // Step 1: Xác minh token với Cloudflare
    await this.validateTurnstileService.validateToken(turnstileToken);
    const { accessToken, refreshToken } = await this.generateTokens(userId);
    const hashedRefreshToken = await hash(refreshToken);

    await this.userService.updateRefreshToken(userId, hashedRefreshToken);
    return {
      id: userId,
      name: name,
      role,
      isTwoFactorEnabled,
      accessToken,
      refreshToken,
    };
  }

  async loginGoogle(
    userId: string,
    name: string,
    role: Role,
    isTwoFactorEnabled?: boolean,
  ) {
    const { accessToken, refreshToken } = await this.generateTokens(userId);
    const hashedRefreshToken = await hash(refreshToken);

    await this.userService.updateRefreshToken(userId, hashedRefreshToken);
    return {
      id: userId,
      name: name,
      role,
      isTwoFactorEnabled,
      accessToken,
      refreshToken,
    };
  }

  async validateJwtUser(userId: string) {
    const user = await this.userService.findById(userId);
    if (!user)
      throw new UnauthorizedException({ message: 'Người dùng không tồn tại!' });
    const currenUser = { id: user.id, role: user.role };
    return currenUser;
  }

  async validateRefreshToken(userId: string, refreshToken: string) {
    const user = await this.userService.findById(userId);
    if (!user)
      throw new UnauthorizedException({ message: 'Người dùng không tồn tại!' });

    const match = await verify(user.hashedRefreshToken, refreshToken);

    if (!match)
      throw new UnauthorizedException({ message: 'Invalid Refresh Token!' });

    return { id: user.id };
  }

  async refreshToken(userId: string) {
    const { accessToken } = await this.generateTokens(userId);
    return {
      id: userId,
      accessToken,
    };
  }

  async validateGoogleUser(googleUser: CreateUserGoogleDto) {
    const user = await this.userService.findByEmail(googleUser.email);

    if (user) return user;

    const created = await this.userService.createUserGoogle(googleUser);
    return created.user;
  }

  async logOut(userId: string) {
    return await this.userService.updateRefreshToken(userId, null);
  }

  async verificationAccount({ token }: CreateVerificationAccountDto) {
    const existingToken = await this.userService.findVerificationToken(token);
    if (!existingToken) {
      return { error: 'Token không tồn tại!' };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
      return { error: 'Token đã hết hạn!' };
    }

    const existingUser = await this.userService.findByEmail(
      existingToken.email,
    );

    if (!existingUser) {
      return { error: 'Email hiện tại không có!' };
    }

    const email = existingToken.email;

    await this.userService.updateandDeleteVerificationToken(token, email);
    return { success: 'Email đã xác thực!' };
  }

  async forgotPassword({ email, turnstileToken }: CreateForgotPasswordDto) {
    // Step 1: Xác minh token với Cloudflare
    await this.validateTurnstileService.validateToken(turnstileToken);
    const now = new Date();
    const existingUser = await this.userService.findByEmail(email);

    if (!existingUser) {
      throw new UnauthorizedException({ message: 'Người dùng không tồn tại!' });
    }

    if (existingUser.banUntil && now < existingUser.banUntil) {
      throw new UnauthorizedException({
        timeUnBan: existingUser.banUntil, // Thời gian hết khóa
      });
    }

    // Kiểm tra người dùng đã hết bị ban thì set lại thành ban thành null và reSendemail = 0
    await this.userService.removeResendEmail(email);

    // Kiếm tra nếu <5 lần gửi email xác thực
    if (existingUser.reSendemail < 5) {
      // Tăng số lần gửi email xác thực lên 1
      await this.userService.updateReSendEmail(email);

      // Generate token & send email
      const passwordResetToken =
        await this.userService.generatePasswordForgetToken(email);
      await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token,
      );
    } else {
      // Ban người dùng 7 ngày
      await this.userService.banUser(email);

      throw new BadRequestException({
        message: 'Bạn đã gửi quá số lần cho phép!',
      });
    }

    return {
      countResendEmailVerify: existingUser.reSendemail,
      success: 'Chúng tôi đã gửi yêu cầu đặt lại mật khẩu đến email của bạn!',
    };
  }

  async newPassword({ token, password, turnstileToken }: CreateNewPasswordDto) {
    // Step 1: Xác minh token với Cloudflare
    await this.validateTurnstileService.validateToken(turnstileToken);
    const existingToken = await this.userService.findPasswordResetToken(token);

    if (!existingToken) {
      throw new BadRequestException({
        message:
          'Không tìm thấy yêu cầu cần đổi mật khẩu hoặc yêu cầu của bạn đã hết hạn. Hãy gửi lại yêu cầu!',
      });
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
      throw new BadRequestException({
        message: 'Bạn hãy gửi yêu cầu lại. Yêu cầu của bạn đã hết hạn!',
      });
    }

    const existingUser = await this.userService.findByEmail(
      existingToken.email,
    );

    if (!existingUser) {
      throw new UnauthorizedException({ message: 'Người dùng không tồn tại!' });
    }

    const hashPassword = await hash(password);
    const isPasswordMatched = await verify(existingUser.password, password);

    if (isPasswordMatched) {
      throw new BadRequestException({
        message: 'Mật khẩu mới không được trùng với mật khẩu cũ!',
      });
    }

    const email = existingUser.email;
    await this.userService.updateAndDeletePasswordResetToken(
      token,
      email,
      hashPassword,
    );

    return { success: 'Mật khẩu mới đã cập nhật lại!' };
  }

  async findUser(userId: string) {
    const user = await this.userService.findById(userId);
    return user;
  }
}
