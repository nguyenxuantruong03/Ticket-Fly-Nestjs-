import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';

import { WeekDay } from '@prisma/client';

export class CreateCarRentalBusinessHourDto {
  @IsEnum(WeekDay)
  day: WeekDay;

  @IsString()
  openTime: string;

  @IsString()
  closeTime: string;

  @IsOptional()
  @IsBoolean()
  closed?: boolean;
}
