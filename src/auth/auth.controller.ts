import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { RefreshAuthGuard } from './guards/refresh-auth/refresh-auth.guard';
import { GoogleAuthGuard } from './guards/google-auth/google-auth.guard';
import { Response } from 'express';
import { Public } from './decorators/public..decorator';
import { Roles } from './decorators/role.decorator';
import { CreateNewPasswordDto } from './dto/create-new-password.dto';
import { CreateTwoFactorDto } from './dto/create-TwoFactor.dto';
import { GoogleUser } from './interface/google-user.interface';
import { Role } from '@prisma/client';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateForgotPasswordDto } from './dto/create-forgotPassword.dto';
import { CreateResendVerificationDto } from './dto/create-resendVerification.dto';
import { CreateVerificationAccountDto } from './dto/create-verificationAccount.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }

  // Passport-local chỉ hỗ trợ hai trường: username (hoặc usernameField nếu bạn cấu hình lại)
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    // req.user trong controller nhận được giá trị
    // là kết quả trả về từ phương thức validate của LocalStrategy
    return this.authService.loginLocal(
      req.user.id,
      req.user.name,
      req.user.role,
      req.user.turnstileToken,
      req.user.isTwoFactorEnabled,
    );
  }

  @Roles(Role.USER)
  @Get('protected')
  async getAll(@Request() req) {
    return {
      message: `Now you can access this protected API. This is your userID: ${req.user.id}`,
    };
  }

  @Public()
  @UseGuards(RefreshAuthGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user.id);
  }

  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  googleLogin() {
    // Passport tự xử lý nên bạn không cần làm gì ở đây,
    // nhưng nó sẽ giữ `redirect` nếu bạn truyền vào query
  }

  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  async googleCallback(@Request() req, @Res() res: Response) {
    if (req.user && req.user.redirectUrl) {
      return res.redirect(req.user.redirectUrl);
    }

    const response = await this.authService.loginGoogle(
      req.user.id,
      req.user.name,
      req.user.role,
      false,
    );

    const redirectTo = (req.user as GoogleUser).redirect || '/';

    const finalRedirect =
      `${process.env.NEST_PUBLIC_FRONT_END}/api/auth/google/callback` +
      `?userId=${response.id}` +
      `&name=${response.name}` +
      `&accessToken=${response.accessToken}` +
      `&refreshToken=${response.refreshToken}` +
      `&role=${response.role}` +
      `&redirect=${encodeURIComponent(redirectTo)}`;

    return res.redirect(finalRedirect);
  }

  // req.user.id trong backend ở đoạn code này phụ thuộc vào cơ chế xác thực mà bạn đã thiết lập,
  // cụ thể là dựa vào Authorization header (Bearer ${session?.accessToken}).
  // JwtAuthGuard sẽ kiểm tra xem token có hợp lệ không, nếu không hợp lệ sẽ trả về lỗi 401 Unauthorized.
  @Post('logout')
  logOut(@Req() req) {
    return this.authService.logOut(req.user.id);
  }

  @Public()
  @Post('verificationAccount')
  verificationAccount(
    @Body() verificationAccountDto: CreateVerificationAccountDto,
  ) {
    return this.authService.verificationAccount(verificationAccountDto);
  }

  @Public()
  @Post('reSendVerificationAccount')
  reSendVerificationAccount(
    @Body() resendVerificationDto: CreateResendVerificationDto,
  ) {
    return this.authService.reSendVerificationAccount(resendVerificationDto);
  }

  @Public()
  @Post('forgotPassword')
  forgotPassword(@Body() forgotPasswordDto: CreateForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto);
  }

  @Public()
  @Post('newPassword')
  newPassword(@Body() newPasswordDto: CreateNewPasswordDto) {
    return this.authService.newPassword(newPasswordDto);
  }

  @Public()
  @Post('twoFactor')
  twoFactor(@Body() twoFactorDto: CreateTwoFactorDto) {
    return this.authService.TwoFacTorAuthentication(twoFactorDto);
  }
}
