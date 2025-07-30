import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

// const test = new Strategy({
//   usernameField: 'email',
// })

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  //Logic kiểm tra người dùng
  // Trong LocalStrategy, hoặc bất kỳ trường nào ngoài usernameField (email) và password
  // từ body là do cơ chế của Passport-local strategy.
  validate(email: string, password: string) {
    if (password === '')
      throw new UnauthorizedException('Please provide your password!');

    // Check validate email và password xong thì trả về dữ liệu id,name,role,isTwoFactorEnabled
    return this.authService.validateLocalUser(email, password);
  }
}
