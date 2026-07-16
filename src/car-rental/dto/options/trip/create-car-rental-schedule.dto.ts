import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

import { RentalDurationType } from '@prisma/client';

export class CreateCarRentalScheduleDto {
  @IsEnum(RentalDurationType)
  durationType: RentalDurationType;

  @IsOptional()
  @IsInt()
  minimumHours?: number;

  @IsOptional()
  @IsInt()
  minimumDays?: number;

  @IsOptional()
  @IsInt()
  maximumDays?: number;

  @IsOptional()
  @IsString()
  pickupTime?: string;

  @IsOptional()
  @IsString()
  returnTime?: string;
}
