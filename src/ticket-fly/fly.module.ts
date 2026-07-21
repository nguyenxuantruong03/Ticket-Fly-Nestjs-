import { Module } from '@nestjs/common';
import { FlyService } from './fly.service';
import { FlyController } from './fly.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FlyController],
  providers: [FlyService, PrismaService],
})
export class FlyModule {}
