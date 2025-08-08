import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'argon2';
import { sendVerificationEmail } from 'mail/verificationEmail';
import { randomBytes } from 'crypto';
import { CreateUserGoogleDto } from 'src/auth/dto/create-user-google.dto';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    // turnstileToken import vào để tránh rest vào data vì createUserDto có chứa turnstileToken nếu không gọi râ riêng nó sẽ tạo database
    const { turnstileToken, password, ...user } = createUserDto;

    const hashedPassword = await hash(password);
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

    return {
      success:
        'Tạo tài khoản thành công. Bạn hãy kiểm tra mail để xác thực tài khoản!',
    };
  }

  async createUserGoogle(createUserDto: CreateUserGoogleDto) {
    // turnstileToken import vào để tránh rest vào data vì createUserDto có chứa turnstileToken nếu không gọi râ riêng nó sẽ tạo database
    const { password, account, ...user } = createUserDto;

    const hashedPassword = await hash(password);

    // nếu tạo người dùng bằng google thì không cần xác thực email
    const createUser = await this.prisma.user.create({
      data: {
        password: hashedPassword,
        emailVerified: new Date(),
        ...user,
      },
      include: {
        account: true,
      },
    });

    const createAccount = await this.prisma.account.create({
      data: {
        userId: createUser.id,
        ...account,
      },
    });

    return {
      user: {
        id: createUser.id,
        email: createUser.email,
        name: createUser.name,
        image: createUser.image,
        account: {
          type: createAccount.type,
          provider: createAccount.provider,
          providerAccountId: createAccount.providerAccountId,
        },
        banUntil: createUser.banUntil,
        role: createUser.role,
      },
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
        account: true,
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

  async findTwoFactorToken(email: string) {
    const twoFactorToken = await this.prisma.twoFactorToken.findFirst({
      where: { email },
    });

    return twoFactorToken;
  }

  async findPasswordResetToken(token: string) {
    const existingToken = await this.prisma.passwordResetToken.findUnique({
      where: { token },
    });

    return existingToken;
  }

  async findVerificationToken(token: string) {
    const verificationExistingToken =
      await this.prisma.verificationToken.findUnique({
        where: {
          token,
        },
      });
    return verificationExistingToken;
  }

  async updateandDeleteVerificationToken(token:string, email: string) {
    const existingUser = await this.findByEmail(email);
    const existingToken = await this.findVerificationToken(token);
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

  async updateAndDeletePasswordResetToken(
    token: string,
    email: string,
    hashPassword: string,
  ) {
    const existingUser = await this.findByEmail(email);
    const existingToken = await this.findPasswordResetToken(token);

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
  }

  async createAndDeleteTwoFactorTokenConfirmation(email: string) {
    const twoFactorToken = await this.findTwoFactorToken(email);
    const existingUser = await this.findByEmail(email);

    await this.prisma.twoFactorToken.delete({
      where: { id: twoFactorToken.id },
    });

    const existingConfirmation =
      await this.prisma.twoFactorConfirmation.findUnique({
        where: { userId: existingUser.id },
      });

    if (existingConfirmation) {
      await this.prisma.twoFactorConfirmation.delete({
        where: { id: existingConfirmation.id },
      });
    }

    await this.prisma.twoFactorConfirmation.create({
      data: {
        userId: existingUser.id,
      },
    });
  }

  async genearteTwoFactorToken(email: string) {
    // Fallback random token generator
    const token = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 10),
    ).join('');
    const expires = new Date(new Date().getTime() + 15 * 60 * 1000);

    const existingToken = await this.prisma.twoFactorToken.findFirst({
      where: { email },
    });

    if (existingToken) {
      await this.prisma.twoFactorToken.delete({
        where: {
          id: existingToken.id,
        },
      });
    }

    const twoFactorToken = await this.prisma.twoFactorToken.create({
      data: {
        email,
        token,
        expires,
      },
    });

    return twoFactorToken;
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

  async generatePasswordForgetToken(email: string) {
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
  }

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
}
