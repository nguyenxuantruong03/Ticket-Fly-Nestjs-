import {
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

import { Currency, YachtPricingType } from '@prisma/client';

import { CreateYachtPriceOptionDto } from './create-yacht-price-option.dto';
import { CreateYachtPriceFeeDto } from './create-yacht-price-fee.dto';
import { CreateYachtPriceRuleDto } from './create-yacht-price-rule.dto';

export class CreateYachtPriceDto {
  @IsEnum(YachtPricingType)
  pricingType: YachtPricingType;

  @IsString()
  @IsEnum(() => Currency)
  currency: Currency;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtPriceOptionDto)
  basePrices: CreateYachtPriceOptionDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtPriceFeeDto)
  fees?: CreateYachtPriceFeeDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtPriceRuleDto)
  discounts?: CreateYachtPriceRuleDto[];
}
