import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import gooogleOauthConfig from '../config/gooogle-oauth.config';
import { ConfigType } from '@nestjs/config';
import { AuthService } from '../auth.service';

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
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
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
      if (
        !('Account' in user) ||
        !user.Account ||
        user.Account.type !== 'oauth'
      ) {
        return {
          redirectUrl: `${process.env.NEST_PUBLIC_FRONT_END}/auth/login?errorGoogle=${encodeURIComponent('Đăng nhập tài khoản không đúng. Tài khoản của bạn không dùng oauth!')}`,
        };
      }

      // Kiểm tra nếu user bị khóa
      const now = new Date();
      if (now < user.banUntil) {
        return {
          redirectUrl: `${process.env.NEST_PUBLIC_FRONT_END}/auth/login?errorGooglebanUntil=${encodeURIComponent(`${user.banUntil}`)}`,
        };
      }

      // Thành công
      return done(null, user);
    } catch (error) {
      console.error(error);
      return {
        redirectUrl: `${process.env.NEST_PUBLIC_FRONT_END}/auth/login?errorGoogle=${encodeURIComponent('Có lỗi xảy ra khi đăng nhập Google. Vui lòng thử lại!')}`,
      };
    }
  }
}
