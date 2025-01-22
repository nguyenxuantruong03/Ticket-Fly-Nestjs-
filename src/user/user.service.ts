import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash, verify } from 'argon2';
import { sendVerificationEmail } from 'mail/verificationEmail';
import { GetTokenDto } from './dto/get-token.dto';
import { randomBytes } from 'crypto';
import { GetEmailDto } from 'src/auth/dto/get-email.dto';
import { sendPasswordResetEmail } from 'mail/forgot-password';
import { CreateNewPasswordDto } from 'src/auth/dto/create-new-password.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    const { password, account, ...user } = createUserDto;
    const hashedPassword = await hash(password);

    //Logic này nếu có account thì create account, không thì gửi email xác thực
    if (account) {
      // nếu tạo người dùng bằng google thì không cần xác thực email
      const createUser = await this.prisma.user.create({
        data: {
          password: hashedPassword,
          emailVerified: new Date(),
          ...user,
        },
      });

      await this.prisma.account.create({
        data: {
          userId: createUser.id,
          ...account,
        },
      });
    } else {
      const createUser = await this.prisma.user.create({
        data: {
          password: hashedPassword,
          ...user,
        },
      });
      // Tạo token xác thực
      const verificationToken = await this.generateVerificationToken(
        createUser.email,
      );
      // Gửi email xác thực
      await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token,
      );
    }

    return {
      success:
        'Tạo tài khoản thành công. Bạn hãy kiểm tra mail để xác thực tài khoản!',
    };
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        Account: true,
      },
    });
  }

  async findOne(userId: string) {
    return await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  async updateRefreshToken(userId: string, hashedRefreshToken: string | null) {
    return await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRefreshToken,
      },
    });
  }

  async removeResendEmail(email: string) {
    const existingUser = await this.findByEmail(email);

    if (!existingUser) {
      throw new UnauthorizedException({ message: 'Người dùng không tồn tại!' });
    }

    const now = new Date();
    if (existingUser.banUntil && now > existingUser.banUntil) {
      await this.prisma.user.update({
        where: { id: existingUser.id },
        data: {
          reSendemail: 0,
        },
      });
    }
  }

  async updateReSendEmail(email: string) {
    const existingUser = await this.findByEmail(email);
    await this.prisma.user.update({
      where: {
        email: existingUser.email,
      },
      data: {
        reSendemail: existingUser.reSendemail + 1,
      },
    });
  }

  async banUser(email: string) {
    const existingUser = await this.findByEmail(email);
    const sevenDaysLater = new Date();
    sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);

    await this.prisma.user.update({
      where: {
        email: existingUser.email,
      },
      data: {
        banUntil: sevenDaysLater,
      },
    });
  }

  async forgotPassword({ email }: GetEmailDto) {
    const now = new Date();
    const existingUser = await this.findByEmail(email);

    if (!existingUser) {
      throw new UnauthorizedException({ message: 'Người dùng không tồn tại!' });
    }

    if (existingUser.banUntil && now < existingUser.banUntil) {
      throw new UnauthorizedException({
        timeUnBan: existingUser.banUntil, // Thời gian hết khóa
      });
    }

    // Kiểm tra người dùng đã hết bị ban thì set lại thành ban thành null và reSendemail = 0
    await this.removeResendEmail(email);

    // Kiếm tra nếu <5 lần gửi email xác thực
    if (existingUser.reSendemail < 5) {
      // Tăng số lần gửi email xác thực lên 1
      await this.updateReSendEmail(email);

      // Generate token & send email
      const passwordResetToken = await this.generatePasswordForgetToken(email);
      await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token,
      );
    } else {
      // Ban người dùng 7 ngày
      await this.banUser(email);

      throw new BadRequestException({
        message: 'Bạn đã gửi quá số lần cho phép!',
      });
    }

    return {
      countResendEmailVerify: existingUser.reSendemail,
      success: 'Chúng tôi đã gửi yêu cầu đặt lại mật khẩu đến email của bạn!',
    };
  }

  generatePasswordForgetToken = async (email: string) => {
    const token = randomBytes(32).toString('hex');
    const expires = new Date(new Date().getTime() + 2 * 60 * 1000);

    const passwordResettoken = await this.prisma.passwordResetToken.findFirst({
      where: { email },
    });

    if (passwordResettoken) {
      await this.prisma.passwordResetToken.delete({
        where: {
          id: passwordResettoken.id,
        },
      });
    }

    const passwordResetToken = await this.prisma.passwordResetToken.create({
      data: {
        email,
        token,
        expires,
      },
    });

    return passwordResetToken;
  };

  newPassword = async ({ password, token }: CreateNewPasswordDto) => {
    const existingToken = await this.prisma.passwordResetToken.findUnique({
      where: { token },
    });

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

    const existingUser = await this.findByEmail(existingToken.email);

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

    await this.prisma.user.update({
      where: { id: existingUser.id },
      data: { password: hashPassword },
    });

    await this.prisma.passwordResetToken.delete({
      where: { id: existingToken.id },
    });

    // Cập nhật lại resent 0
    await this.prisma.user.update({
      where: { id: existingUser.id },
      data: {
        reSendemail: 0,
      },
    });

    return { success: 'Mật khẩu mới đã cập nhật lại!' };
  };

  async generateVerificationToken(email: string) {
    const token = randomBytes(32).toString('hex'); // Tạo chuỗi token dài 32 byte
    const expires = new Date(new Date().getTime() + 2 * 60 * 1000);

    //Dùng để kiếm tra số lần gửi email xác thực
    const existingUser = await this.findByEmail(email);

    if (!existingUser) {
      throw new UnauthorizedException({ message: 'Người dùng không tồn tại!' });
    }

    const exitstingToken = await this.prisma.verificationToken.findFirst({
      where: {
        email,
      },
    });

    // Kiểm tra người dùng đã hết bị ban thì set lại thành ban thành null và reSendemail = 0
    await this.removeResendEmail(email);

    // Kiếm tra nếu <5 lần gửi email xác thực
    if (existingUser.reSendemail < 5) {
      // Tăng số lần gửi email xác thực lên 1
      await this.updateReSendEmail(email);

      if (exitstingToken) {
        await this.prisma.verificationToken.delete({
          where: {
            id: exitstingToken.id,
          },
        });
      }

      const verificationToken = await this.prisma.verificationToken.create({
        data: {
          email,
          token,
          expires,
        },
      });

      return verificationToken;
    } else {
      // Ban người dùng 7 ngày
      await this.banUser(email);

      throw new BadRequestException({
        message: 'Bạn đã gửi quá số lần cho phép!',
      });
    }
  }

  async verificationAccount({ token }: GetTokenDto) {
    const existingToken = await this.prisma.verificationToken.findUnique({
      where: {
        token,
      },
    });

    if (!existingToken) {
      return { error: 'Token không tồn tại!' };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
      return { error: 'Token đã hết hạn!' };
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email: existingToken.email },
    });

    if (!existingUser) {
      return { error: 'Email hiện tại không có!' };
    }

    await this.prisma.user.update({
      where: { id: existingUser.id },
      data: {
        emailVerified: new Date(),
        email: existingUser.email,
        reSendemail: 0,
      },
    });

    await this.prisma.verificationToken.delete({
      where: { id: existingToken.id },
    });

    return { success: 'Email đã xác thực!' };
  }
}
