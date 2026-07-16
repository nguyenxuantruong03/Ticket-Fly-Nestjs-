import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';

import { BoardingPassStatus } from '@prisma/client';

export class CreateBusBoardingPassDto {
  @IsOptional()
  @IsEnum(BoardingPassStatus)
  status?: BoardingPassStatus;

  @IsOptional()
  @IsDateString()
  boardingTime?: string;

  @IsOptional()
  @IsDateString()
  scannedAt?: string;

  @IsOptional()
  @IsString()
  gate?: string;

  @IsOptional()
  @IsString()
  platform?: string;
}
