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
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { RefreshAuthGuard } from './guards/refresh-auth/refresh-auth.guard';
import { GoogleAuthGuard } from './guards/google-auth/google-auth.guard';
import { Response } from 'express';
import { Public } from './decorators/public..decorator';
import { Roles } from './decorators/role.decorator';
import { GetTokenDto } from './dto/get-token.dto.';
import { GetEmailDto } from './dto/get-email.dto';
import { CreateNewPasswordDto } from './dto/create-new-password.dto';
import { CreateTwoFactorDto } from './dto/create-TwoFactorDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    return this.authService.login(
      req.user.id,
      req.user.name,
      req.user.role,
      req.user.isTwoFactorEnabled,
    );
  }

  @Roles('ADMIN', 'EDITOR')
  @Get('protected')
  getAll(@Request() req) {
    return {
      message: `Now you can access this protected API. This is your userID: ${req.user.id}`,
    };
  }

  @Public()
  @UseGuards(RefreshAuthGuard)
  @Post('refresh')
  refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user.id, req.user.name);
  }

  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  googleLogin() {}

  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  async googleCallback(@Request() req, @Res() res: Response) {
    // Check nếu người dùng không đăng nhập đúng oauth và redirect về trang login + thông báo lỗi
    if (req.user && req.user.redirectUrl) {
      return res.redirect(req.user.redirectUrl);
    }
    const response = await this.authService.login(
      req.user.id,
      req.user.name,
      req.user.role,
    );
    // Redirect về trang front-end với thông tin user
    res.redirect(
      `${process.env.NEST_PUBLIC_FRONT_END}/api/auth/google/callback?userId=${response.id}&name=${response.name}&accessToken=${response.accessToken}&refreshToken=${response.refreshToken}&role=${response.role}`,
    );
  }

  @Post('logout')
  logOut(@Req() req) {
    return this.authService.logOut(req.user.id);
  }

  @Public()
  @Post('verificationAccount')
  verificationAccount(@Body() tokenDto: GetTokenDto) {
    return this.authService.verificationAccount(tokenDto);
  }

  @Public()
  @Post('reSendVerificationAccount')
  reSendVerificationAccount(@Body() email: GetEmailDto) {
    return this.authService.reSendVerificationAccount(email);
  }

  @Public()
  @Post('forgotPassword')
  forgotPassword(@Body() email: GetEmailDto) {
    return this.authService.forgotPassword(email);
  }

  @Public()
  @Post('newPassword')
  newPassword(@Body() createNewPasswordDto: CreateNewPasswordDto) {
    return this.authService.newPassword(createNewPasswordDto);
  }

  @Public()
  @Post('twoFactor')
  twoFactor(@Body() { email, code }: CreateTwoFactorDto) {
    return this.authService.TwoFacTorAuthentication(email, code);
  }
}
