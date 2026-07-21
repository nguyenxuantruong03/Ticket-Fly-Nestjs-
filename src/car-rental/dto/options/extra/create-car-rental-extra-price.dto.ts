import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
} from 'class-validator';

import { CarRentalExtraPricingType } from '@prisma/client';

export class CreateCarRentalExtraPriceDto {
  @IsEnum(CarRentalExtraPricingType)
  pricingType: CarRentalExtraPricingType;

  @IsNumber()
  amount: number;


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
