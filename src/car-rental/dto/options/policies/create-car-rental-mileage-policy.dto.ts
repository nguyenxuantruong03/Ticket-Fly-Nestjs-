import { IsBoolean, IsEnum, IsNumber, IsOptional } from 'class-validator';

import { UnitOption } from '@prisma/client';

export class CreateCarRentalMileagePolicyDto {
  @IsBoolean()
  unlimited: boolean;

  @IsEnum(UnitOption)
  unit: UnitOption;

  @IsOptional()
  @IsNumber()
  dailyLimitKm?: number;

  @IsOptional()
  @IsNumber()
  extraKmFee?: number;
}
