import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
} from 'class-validator';

import { CarRentalExtraPricingType, Currency } from '@prisma/client';

export class CreateCarRentalExtraPriceDto {
  @IsEnum(CarRentalExtraPricingType)
  pricingType: CarRentalExtraPricingType;

  @IsNumber()
  amount: number;

  @IsEnum(Currency)
  currency: Currency;

  @IsOptional()
  @IsInt()
  minimumQuantity?: number;

  @IsOptional()
  @IsInt()
  maximumQuantity?: number;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
}
