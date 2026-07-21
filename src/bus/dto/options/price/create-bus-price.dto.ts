import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CreateBusPriceBreakdownDto } from './create-bus-price-breakdown.dto';
import { CreateBusPriceRuleDto } from './create-bus-price-rule.dto';

export class CreateBusPriceDto {

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
  @IsDateString()
  effectiveFrom?: string;

  @IsOptional()
  @IsDateString()
  effectiveTo?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusPriceBreakdownDto)
  breakdowns?: CreateBusPriceBreakdownDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusPriceRuleDto)
  rules?: CreateBusPriceRuleDto[];
}
