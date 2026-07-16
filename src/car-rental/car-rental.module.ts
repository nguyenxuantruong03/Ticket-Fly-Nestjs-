import { Module } from '@nestjs/common';
import { CarRentalService } from './car-rental.service';
import { CarRentalController } from './car-rental.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CarRentalController],
  providers: [CarRentalService, PrismaService],
})
export class CarRentalModule {}
