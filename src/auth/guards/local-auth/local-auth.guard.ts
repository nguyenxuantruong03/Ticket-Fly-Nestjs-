import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
// Strategy: Khi bạn khai báo AuthGuard('local'), chuỗi 'local' chính là tên chiến lược mà Passport sẽ tìm
// kiếm trong ứng dụng của bạn. NestJS sử dụng tên này để liên kết với chiến lược bạn đã khai báo (trong trường hợp này là LocalStrategy).
// Cụ thể, trong PassportStrategy(Strategy), Strategy là passport-local mà bạn đã cài đặt.
export class LocalAuthGuard extends AuthGuard('local') {}
