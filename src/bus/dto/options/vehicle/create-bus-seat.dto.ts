import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

import { BusSeatType } from '@prisma/client';

export class CreateBusSeatDto {
  @IsString()
  seatNumber: string;

  @IsEnum(BusSeatType)
  type: BusSeatType;

  @IsOptional()
  @IsInt()
  floor?: number;

  @IsOptional()
  @IsInt()
  row?: number;

  @IsOptional()
  @IsInt()
  column?: number;
}
