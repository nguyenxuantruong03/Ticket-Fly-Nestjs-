import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ValidateTurnstileModule } from './validate-turnstile/validate-turnstile.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles/roles.guard';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ValidateTurnstileModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    // Dùng ở đây cho toàn bộ nhưng nếu là isPublic thì bỏ qua ko check JwtAuthGuard
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard, //@UseGuard(JwtAuthGuard),
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard, //@UseGuard(RolesGuard),
    },
  ],
})
export class AppModule {}
