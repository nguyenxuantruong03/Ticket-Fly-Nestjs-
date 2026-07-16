import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { Currency, RentalDurationType } from '@prisma/client';

import { CreateCarRentalPriceBreakdownDto } from './create-car-rental-price-breakdown.dto';
import { CreateCarRentalPriceRuleDto } from './create-car-rental-price-rule.dto';

export class CreateCarRentalPriceDto {
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsEnum(RentalDurationType)
  pricingType: RentalDurationType;

  @IsEnum(Currency)
  currency: Currency;

  @IsOptional()
  @IsNumber()
  pricePerHour?: number;

  @IsOptional()
  @IsNumber()
  pricePerDay?: number;

  @IsOptional()
  @IsNumber()
  pricePerWeek?: number;

  @IsOptional()
  @IsNumber()
  pricePerMonth?: number;

  @IsOptional()
  @IsNumber()
  originalPrice?: number;

  @IsOptional()
  @IsInt()
  minimumDays?: number;

  @IsOptional()
  @IsInt()
  maximumDays?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalPriceBreakdownDto)
  breakdown?: CreateCarRentalPriceBreakdownDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalPriceRuleDto)
  priceRules?: CreateCarRentalPriceRuleDto[];
}
