import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { hash, verify } from 'argon2';
import { AuthJwtPayload } from './types/auth-jwtPayload';
import { JwtService } from '@nestjs/jwt';
import refreshConfig from './config/refresh.config';
import { ConfigType } from '@nestjs/config';
import { Role } from '@prisma/client';
import { GetTokenDto } from './dto/get-token.dto.';
import { sendVerificationEmail } from 'mail/verificationEmail';
import { GetEmailDto } from './dto/get-email.dto';
import { CreateNewPasswordDto } from './dto/create-new-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @Inject(refreshConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshConfig>,
  ) {}

  async registerUser(createUserDto: CreateUserDto) {
    const user = await this.userService.findByEmail(createUserDto.email);
    if (user)
      throw new ConflictException({ message: 'Người dùng đã tồn tại!' });
    return this.userService.createUser(createUserDto);
  }

  async validateLocalUser(email: string, password: string) {
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
    return {
      id: user.id,
      name: user.name,
      role: user.role,
    };
  }

  async reSendVerificationAccount({ email }: GetEmailDto) {
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

  async login(userId: string, name: string, role: Role) {
    const { accessToken, refreshToken } = await this.generateTokens(userId);
    const hashedRefreshToken = await hash(refreshToken);
    await this.userService.updateRefreshToken(userId, hashedRefreshToken);
    return {
      id: userId,
      name: name,
      role,
      accessToken,
      refreshToken,
    };
  }

  async validateJwtUser(userId: string) {
    const user = await this.userService.findOne(userId);
    if (!user)
      throw new UnauthorizedException({ message: 'Người dùng không tồn tại!' });
    const currenUser = { id: user.id, role: user.role };
    return currenUser;
  }

  async validateRefreshToken(userId: string, refreshToken: string) {
    const user = await this.userService.findOne(userId);
    if (!user)
      throw new UnauthorizedException({ message: 'Người dùng không tồn tại!' });
    const refreshTokenMatched = await verify(
      user.hashedRefreshToken,
      refreshToken,
    );

    if (!refreshTokenMatched)
      throw new UnauthorizedException({ message: 'Invalid Refresh Token!' });

    const currenUser = { id: user.id };
    return currenUser;
  }

  async refreshToken(userId: string, name: string) {
    const { accessToken, refreshToken } = await this.generateTokens(userId);
    const hashedRefreshToken = await hash(refreshToken);
    await this.userService.updateRefreshToken(userId, hashedRefreshToken);
    return {
      id: userId,
      name: name,
      accessToken,
      refreshToken,
    };
  }

  async validateGoogleUser(googleUser: CreateUserDto) {
    const user = await this.userService.findByEmail(googleUser.email);

    if (user) return user;
    return await this.userService.createUser(googleUser);
  }

  async logOut(userId: string) {
    return await this.userService.updateRefreshToken(userId, null);
  }

  async verificationAccount(getTokenDto: GetTokenDto) {
    return await this.userService.verificationAccount(getTokenDto);
  }

  async forgotPassword(getEmailDto: GetEmailDto) {
    return await this.userService.forgotPassword(getEmailDto);
  }

  async newPassword(createNewPasswordDto: CreateNewPasswordDto) {
    return await this.userService.newPassword(createNewPasswordDto);
  }
}
