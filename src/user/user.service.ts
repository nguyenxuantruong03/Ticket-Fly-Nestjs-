import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'argon2';
import { sendVerificationEmail } from 'mail/verificationEmail';
import { GetTokenDto } from './dto/get-token.dto';
import { randomBytes } from 'crypto';

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

  async generateVerificationToken(email: string) {
    const token = randomBytes(32).toString('hex'); // Tạo chuỗi token dài 32 byte
    const expires = new Date(new Date().getTime() + 2 * 60 * 1000);

    if (!email)
      throw new UnauthorizedException({ message: 'Người dùng không tồn tại!' });

    const exitstingToken = await this.prisma.verificationToken.findFirst({
      where: {
        email,
      },
    });

    //Dùng để kiếm tra số lần gửi email xác thực
    const existingUser = await this.findByEmail(email);

    if (!existingUser) {
      throw new UnauthorizedException({ message: 'Người dùng không tồn tại!' });
    }

    // Kiểm tra người dùng đã hết bị ban thì set lại thành ban thành null và reSendemailVerified = 0
    const now = new Date();
    if (now > existingUser.banUntil) {
      await this.prisma.user.update({
        where: { id: existingUser.id },
        data: {
          reSendemailVerified: 0,
        },
      });
    }

    // Kiếm tra nếu <6 lần gửi email xác thực
    if (existingUser.reSendemailVerified < 5) {
      // Tăng số lần gửi email xác thực lên 1
      await this.prisma.user.update({
        where: {
          email: existingUser.email,
        },
        data: {
          reSendemailVerified: existingUser.reSendemailVerified + 1,
        },
      });

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
      // Bên cạnh đó sẽ bị ban 7 ngày
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
        reSendemailVerified: 0,
      },
    });

    await this.prisma.verificationToken.delete({
      where: { id: existingToken.id },
    });

    return { success: 'Email đã xác thực!' };
  }
}
