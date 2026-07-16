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
import { HotelModule } from './hotel/hotel.module';
import { ProviderBookingModule } from './provider-booking/provider-booking.module';
import { CarRentalModule } from './car-rental/car-rental.module';
import { CityModule } from './city/city.module';
import { CountriesModule } from './countries/countries.module';
import { BusModule } from './bus/bus.module';
import { AirportTransferModule } from './airport-transfer/airport-transfer.module';
import { FlyModule } from './fly/fly.module';
import { YachtModule } from './yacht/yacht.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ValidateTurnstileModule,
    ConfigModule.forRoot({ isGlobal: true }),
    HotelModule,
    ProviderBookingModule,
    CarRentalModule,
    CityModule,
    CountriesModule,
    BusModule,
    AirportTransferModule,
    FlyModule,
    YachtModule,
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
