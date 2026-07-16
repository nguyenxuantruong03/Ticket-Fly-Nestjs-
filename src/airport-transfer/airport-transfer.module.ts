import { Module } from '@nestjs/common';
import { AirportTransferService } from './airport-transfer.service';
import { AirportTransferController } from './airport-transfer.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AirportTransferController],
  providers: [AirportTransferService, PrismaService],
})
export class AirportTransferModule {}
