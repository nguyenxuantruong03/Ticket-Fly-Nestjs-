import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import {
  FlyCabinClass,
  FlyFareRuleType,
  FlyPriceRuleType,
} from '@prisma/client';

// ======================================================
// FARE BAGGAGE
// ======================================================

export class CreateFlyFareBaggageDto {
  @IsOptional()
  @IsNumber()
  cabinWeightKg?: number;

  @IsOptional()
  @IsNumber()
  checkedWeightKg?: number;

  @IsOptional()
  @IsBoolean()
  extraBaggageAllowed?: boolean;

  @IsOptional()
  @IsNumber()
  extraBaggagePrice?: number;
}

// ======================================================
// FARE TAX
// ======================================================

export class CreateFlyFareTaxDto {
  @IsString()
  name: string;

  @IsNumber()
  amount: number;
}

// ======================================================
// FARE PRICE BREAKDOWN
// ======================================================

export class CreateFlyFarePriceBreakdownDto {
  @IsNumber()
  baseFare: number;

  @IsOptional()
  @IsNumber()
  taxes?: number;

  @IsOptional()
  @IsNumber()
  airportFee?: number;

  @IsOptional()
  @IsNumber()
  fuelSurcharge?: number;

  @IsOptional()
  @IsNumber()
  serviceFee?: number;

  @IsOptional()
  @IsNumber()
  bookingFee?: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsNumber()
  finalPrice: number;
}

// ======================================================
// FARE RULE
// ======================================================

export class CreateFlyFareRuleDto {
  @IsEnum(FlyFareRuleType)
  type: FlyFareRuleType;

  @IsString()
  value: string;
}

// ======================================================
// FARE
// ======================================================

export class CreateFlyFareDto {
  @IsString()
  name: string;

  @IsEnum(FlyCabinClass)
  cabinClass: FlyCabinClass;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsBoolean()
  refundable?: boolean;

  @IsOptional()
  @IsBoolean()
  changeable?: boolean;

  @IsOptional()
  @IsBoolean()
  priorityBoarding?: boolean;

  @IsOptional()
  @IsBoolean()
  loungeAccess?: boolean;

  @IsOptional()
  @IsBoolean()
  seatSelectionIncluded?: boolean;

  @IsOptional()
  @IsBoolean()
  mealsIncluded?: boolean;

  @IsOptional()
  @IsBoolean()
  wifiIncluded?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyFareBaggageDto)
  baggage?: CreateFlyFareBaggageDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyFareTaxDto)
  taxes?: CreateFlyFareTaxDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyFarePriceBreakdownDto)
  breakdown?: CreateFlyFarePriceBreakdownDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyFareRuleDto)
  rules?: CreateFlyFareRuleDto[];

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

// ======================================================
// PRICE RULE
// ======================================================

export class CreateFlyPriceRuleDto {
  @IsString()
  name: string;

  @IsEnum(FlyPriceRuleType)
  type: FlyPriceRuleType;

  @IsOptional()
  @IsNumber()
  percentage?: number;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  couponCode?: string;

  @IsOptional()
  @IsNumber()
  minimumSpend?: number;

  @IsOptional()
  @IsNumber()
  maximumDiscount?: number;

  @IsOptional()
  @IsDateString()
  validFrom?: string;

  @IsOptional()
  @IsDateString()
  validTo?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

// ======================================================
// ROOT DTO
// ======================================================

export class CreateFlyPriceDto {
  @IsNumber()
  fromPrice: number;

  @IsOptional()
  @IsNumber()
  toPrice?: number;

  @IsOptional()
  @IsNumber()
  originalFromPrice?: number;

  @IsOptional()
  @IsNumber()
  originalToPrice?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyFareDto)
  fares?: CreateFlyFareDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyPriceRuleDto)
  priceRules?: CreateFlyPriceRuleDto[];
}
