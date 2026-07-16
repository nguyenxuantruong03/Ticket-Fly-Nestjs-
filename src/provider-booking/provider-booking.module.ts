import { Module } from '@nestjs/common';
import { ProviderBookingService } from './provider-booking.service';
import { ProviderBookingController } from './provider-booking.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProviderBookingController],
  providers: [ProviderBookingService, PrismaService],
})
export class ProviderBookingModule {}
