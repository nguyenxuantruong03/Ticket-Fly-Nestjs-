import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

import {
  YachtExtraCategory,
  YachtExtraPricingType,
  Currency,
} from '@prisma/client';

import { CreateYachtExtraImageDto } from './create-yacht-extra-image.dto';

export class CreateYachtExtraDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(YachtExtraCategory)
  category: YachtExtraCategory;

  @IsEnum(YachtExtraPricingType)
  pricingType: YachtExtraPricingType;

  @IsNumber()
  price: number;

  @IsEnum(Currency)
  currency: Currency;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtExtraImageDto)
  images?: CreateYachtExtraImageDto[];
}
