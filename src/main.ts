import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Chuyển đổi payload sang dạng DTO
      whitelist: true, // Loại bỏ các trường không được định nghĩa trong DTO
      forbidNonWhitelisted: true, // Ném lỗi nếu xuất hiện các trường không mong muốn
    }),
  );

  app.enableCors({
    origin: [
      process.env.NEST_PUBLIC_FRONT_END,
      process.env.NEST_PUBLIC_BACK_END,
    ], // ✅ dùng mảng
    credentials: true,
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
