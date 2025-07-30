// google-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext } from '@nestjs/common';

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  override async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Lấy redirect từ query
    const redirect = request.query.redirect || '/';

    // Gắn redirect thành state (OAuth2)
    request.session = request.session || {};
    request.session.oauthRedirect = redirect; // Tạm giữ để callback dùng

    // gọi super (truyền state vào strategy)
    const result = (await super.canActivate(context)) as boolean;
    return result;
  }

  override getAuthenticateOptions(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const state = request.session?.oauthRedirect || '/';
    return {
      scope: ['profile', 'email'],
      state, // ✅ Truyền state rõ ràng tại đây
    };
  }
}
