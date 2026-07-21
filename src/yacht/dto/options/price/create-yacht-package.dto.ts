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

import { YachtDurationType } from '@prisma/client';

import { CreateYachtPackageImageDto } from './create-yacht-package-image.dto';
import { CreateYachtPackageExtraDto } from './create-yacht-package-extra.dto';

export class CreateYachtPackageDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  duration?: number;

  @IsEnum(YachtDurationType)
  durationType: YachtDurationType;

  @IsOptional()
  @IsNumber()
  maxGuests?: number;

  @IsNumber()
  price: number;

  @IsArray()
  @IsString({ each: true })
  includedItems: string[];

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtPackageImageDto)
  images?: CreateYachtPackageImageDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtPackageExtraDto)
  extras?: CreateYachtPackageExtraDto[];
}
