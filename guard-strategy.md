from pathlib import Path

# Nội dung markdown cho GoogleAuthGuard vs GoogleStrategy
markdown_content = """
# 🔐 Google OAuth2 – NestJS: Guard vs Strategy

Trong quá trình tích hợp Google OAuth2 vào NestJS qua Passport, hai thành phần quan trọng là **Guard** và **Strategy**. Dưới đây là sự khác biệt rõ ràng giữa hai thành phần này.

---

## 🛡️ 1. Guard – `GoogleAuthGuard`

### ✅ Vai trò:
- Là **lớp bảo vệ (middleware-like)** ở tầng cao của hệ thống request pipeline NestJS.
- **Chuẩn bị dữ liệu**, chẳng hạn như `redirect`, và điều hướng luồng xác thực.
- Kích hoạt **Passport Strategy** tương ứng (`'google'` trong trường hợp này).

### ✅ Thời điểm thực thi:
- Trước khi controller được gọi.

### ✅ Ví dụ:
\`\`\`ts
@UseGuards(GoogleAuthGuard)
@Get('google/login')
async googleLogin() { ... }
\`\`\`

### ✅ Bên trong Guard:
\`\`\`ts
@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  override async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Lấy redirect từ query
    const redirect = request.query.redirect || '/';

    // Gắn redirect vào session (lưu làm state)
    request.session = request.session || {};
    request.session.oauthRedirect = redirect;

    // Kích hoạt Strategy
    const result = (await super.canActivate(context)) as boolean;
    return result;
  }

  override getAuthenticateOptions(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const state = request.session?.oauthRedirect || '/';

    return {
      scope: ['profile', 'email'],
      state, // Truyền state cho Google OAuth
    };
  }
}
\`\`\`

---

from pathlib import Path

# Nội dung markdown cho khả năng của Guard trong NestJS
guard_md_content = """
# 🛡️ NestJS Guard – Những khả năng ngoài việc xử lý `query`

Trong NestJS, **Guard** không chỉ xử lý `query`, mà còn đóng vai trò linh hoạt trong việc bảo vệ route, xác thực, kiểm soát truy cập và thao tác dữ liệu đầu vào. Dưới đây là các tác vụ phổ biến mà Guard có thể thực hiện.

---

## 1. ✅ Kiểm tra quyền truy cập (Authorization)

- Kiểm tra role người dùng (admin, user, editor, ...)
- Kiểm tra permissions cụ thể
- Kiểm tra thuộc nhóm, tổ chức hoặc quyền theo đối tượng

\`\`\`ts
const user = request.user;
if (!user || user.role !== 'admin') {
  throw new ForbiddenException('Access denied');
}
\`\`\`

---

## 2. 🔐 Xác thực người dùng (Authentication)

- Kiểm tra JWT Token
- Kiểm tra phiên đăng nhập (session)
- Xác minh thông tin từ cookies hoặc headers

\`\`\`ts
const token = request.headers.authorization?.split(' ')[1];
if (!token || !isValidToken(token)) {
  throw new UnauthorizedException();
}
\`\`\`

---

## 3. 🌐 Truy cập `params`, `body`, `headers`, `cookies`

Guard có thể thao tác với mọi phần của HTTP request, không chỉ `query`:

\`\`\`ts
const id = request.params.id;
const lang = request.headers['accept-language'];
const csrf = request.cookies['csrf_token'];
\`\`\`

---

## 4. 🔄 Logic bảo vệ nâng cao (Custom Logic)

Ví dụ: chỉ người đã mua khóa học mới được xem nội dung:

\`\`\`ts
if (!user.purchases.includes(request.params.courseId)) {
  throw new ForbiddenException('You must buy this course');
}
\`\`\`

---

## 5. 💬 Tùy biến flow xác thực

Guard có thể lưu dữ liệu tạm thời vào `request`, để strategy hoặc controller xử lý sau:

\`\`\`ts
request.customContext = { flow: 'REGISTER_FLOW' };
\`\`\`

---

## 6. 🔧 Kết hợp với Decorator (Reflector)

Sử dụng `Reflector` để đọc metadata từ decorator tùy chỉnh như `@Roles()`:

\`\`\`ts
const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
\`\`\`

---

## 7. 🛠 Kết hợp với Policy/CASL/Ability

Kết hợp với thư viện quản lý truy cập như `casl` để kiểm tra khả năng truy cập đối tượng:

\`\`\`ts
if (!ability.can('read', 'Document')) {
  throw new ForbiddenException();
}
\`\`\`

---

## ✅ Ví dụ thực tế: Guard kiểm tra `@Roles()`

\`\`\`ts
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) return true;

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.includes(user.role);
  }
}
\`\`\`

---

## 📦 Tổng kết: Guard có thể dùng để

| Tác vụ                           | Mô tả                                                       |
|----------------------------------|--------------------------------------------------------------|
| ✅ Trích xuất `query`, `params`, `body` | Để chuẩn bị dữ liệu hoặc định hướng logic                    |
| 🔐 Xác thực / Kiểm tra token      | Kiểm tra JWT, session, cookie                                |
| 🔑 Kiểm tra quyền truy cập       | Theo role, permission, policy                                |
| 🧩 Tùy biến flow                 | Gắn dữ liệu tạm, xác định loại luồng (login, register, etc.) |
| 🛠 Dùng cùng decorator + metadata| Cho phép xây guard linh hoạt (e.g., `@Roles('admin')`)       |
"""

# Lưu thành file .md
guard_md_path = Path("/mnt/data/nestjs-guard-advanced.md")
guard_md_path.write_text(guard_md_content.strip(), encoding="utf-8")
guard_md_path.name



## 🧠 2. Strategy – `GoogleStrategy`

### ✅ Vai trò:
- Xử lý chi tiết quá trình **xác thực OAuth2 với Google**.
- Thực hiện:
  - Redirect người dùng đến Google
  - Nhận callback từ Google
  - Lấy access token và profile
  - Gọi hàm \`validate()\` để xác định user

### ✅ Thời điểm thực thi:
- Sau khi guard gọi \`super.canActivate()\`.

### ✅ Ví dụ Strategy:
\`\`\`ts
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(...) {
    super({
      clientID: ...,
      clientSecret: ...,
      callbackURL: ...,
      scope: ['profile', 'email'],
      passReqToCallback: true,
    });
  }

  async validate(req: Request, accessToken: string, refreshToken: string, profile: any) {
    // Xử lý hoặc tạo người dùng trong hệ thống
    return {
      id: profile.id,
      email: profile.emails[0].value,
      name: profile.displayName,
    };
  }
}
\`\`\`

---

## 🔁 Tóm tắt sự khác biệt

| Thành phần           | Guard (\`GoogleAuthGuard\`)                            | Strategy (\`GoogleStrategy\`)                        |
|----------------------|------------------------------------------------------|---------------------------------------------------|
| 🧱 Tầng xử lý        | NestJS Middleware                                    | Passport Strategy (OAuth2)                        |
| 🎯 Vai trò chính     | Điều hướng luồng xác thực, xử lý redirect, state     | Xác thực người dùng qua Google                    |
| 🕒 Thời điểm thực thi| Trước khi controller được gọi                        | Khi guard gọi \`super.canActivate()\`               |
| 🔧 Trách nhiệm       | Chuẩn bị dữ liệu (state, redirect), bật Strategy     | Liên lạc Google, nhận profile, validate người dùng|

---

## 🔄 Luồng xử lý tổng thể

1. Người dùng truy cập \`/google/login?redirect=/dashboard\`.
2. Guard:
   - Lấy \`redirect\`, lưu vào \`session.oauthRedirect\`.
   - Truyền \`state\` khi gọi Strategy.
3. Strategy:
   - Gửi người dùng đến Google với scope và state.
   - Google callback về \`/google/callback\`.
   - Strategy nhận access token, profile, gọi \`validate()\`.
4. NestJS controller xử lý với user đã xác thực.

---

## 📌 Ghi chú
- \`state\` rất hữu ích để giữ trạng thái (ví dụ: \`redirect=/something\`) giữa lúc rời khỏi trang và callback trở lại.
- Nên dùng \`passReqToCallback: true\` nếu bạn cần thông tin từ request trong \`validate()\`.
"""

# Lưu thành file .md
md_path = Path("/mnt/data/google-auth-flow.md")
md_path.write_text(markdown_content.strip(), encoding="utf-8")
md_path.name

