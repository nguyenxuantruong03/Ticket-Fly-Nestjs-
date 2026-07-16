import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CarRentalExtraType } from '@prisma/client';

import { CreateCarRentalExtraPriceDto } from './create-car-rental-extra-price.dto';

export class CreateCarRentalExtraDto {
  @IsEnum(CarRentalExtraType)
  type: CarRentalExtraType;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsBoolean()
  required?: boolean;

  @IsOptional()
  @IsBoolean()
  available?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalExtraPriceDto)
  prices?: CreateCarRentalExtraPriceDto[];
}
