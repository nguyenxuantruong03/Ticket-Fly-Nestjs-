import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsInt,
} from 'class-validator';

import {
  AirportTransferAdjustmentType,
  AirportTransferPriceRuleType,
} from '@prisma/client';

export class CreateAirportTransferPriceRuleDto {
  @IsString()
  name: string;

  @IsEnum(AirportTransferPriceRuleType)
  type: AirportTransferPriceRuleType;

  @IsEnum(AirportTransferAdjustmentType)
  adjustmentType: AirportTransferAdjustmentType;

  @IsNumber()
  value: number;

  @IsOptional()
  @IsNumber()
  minimumSpend?: number;

  @IsOptional()
  @IsNumber()
  maximumDiscount?: number;

  @IsOptional()
  @IsString()
  couponCode?: string;

  @IsOptional()
  @IsDateString()
  validFrom?: string;

  @IsOptional()
  @IsDateString()
  validTo?: string;

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
