import { IsDateString, IsEnum, IsNumber, IsOptional } from 'class-validator';

import { CarRentalPriceRuleType } from '@prisma/client';

export class CreateCarRentalPriceRuleDto {
  @IsEnum(CarRentalPriceRuleType)
  type: CarRentalPriceRuleType;

  @IsOptional()
  @IsNumber()
  percentage?: number;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
}
