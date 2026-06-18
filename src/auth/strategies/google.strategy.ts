import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import gooogleOauthConfig from '../config/gooogle-oauth.config';
import { ConfigType } from '@nestjs/config';
import { AuthService } from '../auth.service';
import { Request } from 'express';
import { GoogleUser } from '../interface/google-user.interface';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(gooogleOauthConfig.KEY)
    private googleOauthConfig: ConfigType<typeof gooogleOauthConfig>,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: googleOauthConfig.clientId,
      clientSecret: googleOauthConfig.clientSecret,
      callbackURL: googleOauthConfig.callbackURL,
      scope: ['email', 'profile'], // Yêu cầu quyền truy cập email và hồ sơ
      passReqToCallback: true,
    });
  }

  async validate(
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    const redirect = req.query.state as string | undefined;

    try {
      const user = await this.authService.validateGoogleUser({
        email: profile.emails[0].value,
        name: profile.displayName,
        password: '',
        image: profile.photos[0].value,
        account: {
          type: 'oauth',
          provider: profile.provider,
          providerAccountId: profile.id,
        },
      });

      // Kiểm tra nếu user không tồn tại
      if (!user) {
        return {
          redirectUrl: `${process.env.NEST_PUBLIC_FRONT_END}/auth/login?errorGoogle=${encodeURIComponent('Không tìm thấy tài khoản. Vui lòng thử lại!')}`,
        };
      }

      // Kiểm tra nếu user không chứa Account hoặc Account không hợp lệ
      if (!user || !user.account || user.account.type !== 'oauth') {
        return {
          redirectUrl: `${process.env.NEST_PUBLIC_FRONT_END}/auth/login?errorGoogle=${encodeURIComponent('Đăng nhập tài khoản không đúng. Tài khoản của bạn không dùng oauth!')}`,
        };
      }

      // Kiểm tra nếu user bị khóa
      if (user && user.banUntil && new Date() < user.banUntil) {
        return {
          redirectUrl: `${process.env.NEST_PUBLIC_FRONT_END}/auth/login?errorGooglebanUntil=${encodeURIComponent(`${user.banUntil}`)}`,
        };
      }

      // Gắn redirectUrl nếu có
      const finalUser: GoogleUser = {
        id: user.id,
        name: user.name,
        role: user.role,
        redirect,
      };

      return done(null, finalUser);
    } catch (error) {
      console.error(error);
      return {
        redirectUrl: `${process.env.NEST_PUBLIC_FRONT_END}/auth/login?errorGoogle=${encodeURIComponent('Có lỗi xảy ra khi đăng nhập Google. Vui lòng thử lại!')}`,
      };
    }
  }
}
