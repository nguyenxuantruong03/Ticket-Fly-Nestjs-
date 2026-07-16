// create-hotel-room-price.dto.ts

import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import {
  Currency,
  HotelPriceRuleType,
  HotelPriceAdjustmentType,
  Weekday,
} from '@prisma/client';

// ======================================================
// PRICE BREAKDOWN
// ======================================================

export class CreateHotelRoomPriceBreakdownDto {
  @IsOptional()
  @IsNumber()
  roomRate?: number;

  @IsOptional()
  @IsInt()
  nights?: number;

  @IsOptional()
  @IsNumber()
  taxes?: number;

  @IsOptional()
  @IsNumber()
  serviceFee?: number;

  @IsOptional()
  @IsNumber()
  resortFee?: number;

  @IsOptional()
  @IsNumber()
  cleaningFee?: number;

  @IsOptional()
  @IsNumber()
  extraFee?: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  includedItems?: string[];
}

// ======================================================
// PRICE RULE
// ======================================================

export class CreateHotelRoomPriceRuleDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsEnum(HotelPriceRuleType)
  type: HotelPriceRuleType;

  @IsEnum(HotelPriceAdjustmentType)
  adjustmentType: HotelPriceAdjustmentType;

  @IsNumber()
  value: number;

  @IsOptional()
  @IsEnum(Currency)
  currency?: Currency;

  @IsOptional()
  @IsInt()
  minimumNights?: number;

  @IsOptional()
  @IsInt()
  maximumNights?: number;

  @IsOptional()
  @Type(() => Date)
  validFrom?: Date;

  @IsOptional()
  @Type(() => Date)
  validTo?: Date;

  @IsOptional()
  @IsArray()
  @IsEnum(Weekday, { each: true })
  daysOfWeek?: Weekday[];

  @IsOptional()
  @IsInt()
  priority?: number;

  @IsOptional()
  @IsBoolean()
  combinable?: boolean;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

// ======================================================
// MAIN DTO
// ======================================================

export class CreateHotelRoomPriceDto {
  // Relation
  @IsString()
  ratePlanId: string;

  // Currency

  @IsEnum(Currency)
  currency: Currency;

  // Price

  @IsOptional()
  @IsNumber()
  originalPrice?: number;

  @IsOptional()
  @IsNumber()
  averageNightlyPrice?: number;

  @IsOptional()
  @IsBoolean()
  taxesIncluded?: boolean;

  @IsOptional()
  @IsBoolean()
  payAtHotel?: boolean;

  // Breakdown

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelRoomPriceBreakdownDto)
  breakdown?: CreateHotelRoomPriceBreakdownDto;

  // Rules

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelRoomPriceRuleDto)
  rules?: CreateHotelRoomPriceRuleDto[];
}
