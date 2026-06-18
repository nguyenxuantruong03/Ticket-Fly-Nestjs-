import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client'; // Import kiểu Role từ Prisma schema
import { Observable } from 'rxjs';
import { ROLES_KEY } from '../../../auth/decorators/role.decorator';

@Injectable()
// @Injectable(): Đánh dấu lớp này là một provider để NestJS có thể quản lý vòng đời của nó và inject vào các thành phần khác.
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {
    // Reflector được sử dụng để đọc metadata gắn vào route handler hoặc class
  }

  // Phương thức canActivate: Được gọi để xác định liệu request có được phép truy cập route hay không.
  canActivate(
    context: ExecutionContext, // ExecutionContext cung cấp thông tin về ngữ cảnh của request hiện tại
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Lấy danh sách vai trò yêu cầu từ metadata của route hoặc class
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(), // Metadata từ handler (hàm xử lý của route)
      context.getClass(), // Metadata từ class của controller
    ]);

    // Nếu không yêu cầu vai trò nào, cho phép truy cập mặc định
    if (!requiredRoles) return true;

    // Lấy thông tin user từ request object (giả định user đã được gắn vào request trong middleware hoặc guard trước đó)
    const user = context.switchToHttp().getRequest().user;

    // Kiểm tra xem user có ít nhất một vai trò phù hợp với các vai trò được yêu cầu
    const hasRequiredRole = requiredRoles.some((role) => user.role === role);

    // Trả về true nếu user có vai trò phù hợp, ngược lại trả về false
    return hasRequiredRole;
  }
}
