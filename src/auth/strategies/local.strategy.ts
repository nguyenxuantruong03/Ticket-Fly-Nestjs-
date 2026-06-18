import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

// const test = new Strategy({
//   usernameField: 'email',
// })

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passReqToCallback: true,
    });
  }

  //Logic kiểm tra người dùng
  // Trong LocalStrategy, hoặc bất kỳ trường nào ngoài usernameField (email) và password
  // từ body là do cơ chế của Passport-local strategy.
  validate(req: Request,email: string, password: string) {
    const turnstileToken = req.body.turnstileToken;
    if (password === '')
      throw new UnauthorizedException('Please provide your password!');

    // Check validate email và password xong thì trả về dữ liệu id,name,role,isTwoFactorEnabled
    return this.authService.validateLocalUser(email, password, turnstileToken);
  }
}
