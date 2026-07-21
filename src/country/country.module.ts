import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

@Module({
  controllers: [CountryController],
  providers: [CountryService, PrismaService],
})
export class CountryModule {}
