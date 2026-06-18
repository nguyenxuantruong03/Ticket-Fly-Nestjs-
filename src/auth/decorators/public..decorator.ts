import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = process.env.IS_PUBLIC_KEY;
// SetMetadata được sử dụng để gán metadata (siêu dữ liệu) cho một route handler (hoặc controller).
// Siêu dữ liệu này có thể được sử dụng bởi Guards, Interceptors, hoặc Middleware để thực hiện các hành động cụ thể, chẳng hạn như kiểm tra quyền truy cập.
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
