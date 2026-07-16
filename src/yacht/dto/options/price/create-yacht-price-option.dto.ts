import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { YachtDurationType } from '@prisma/client';

export class CreateYachtPriceOptionDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  duration?: number;

  @IsEnum(YachtDurationType)
  durationType: YachtDurationType;

  @IsOptional()
  @IsNumber()
  minGuests?: number;

  @IsOptional()
  @IsNumber()
  maxGuests?: number;

  @IsOptional()
  @IsNumber()
  originalPrice?: number;

  @IsArray()
  @IsString({ each: true })
  includedItems: string[];
}
