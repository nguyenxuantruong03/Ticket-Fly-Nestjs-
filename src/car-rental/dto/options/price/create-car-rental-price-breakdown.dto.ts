import {
  IsArray,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { RentalDurationType } from '@prisma/client';

export class CreateCarRentalPriceBreakdownDto {
  @IsOptional()
  @IsNumber()
  rentalRate?: number;

  @IsOptional()
  @IsInt()
  duration?: number;

  @IsOptional()
  @IsEnum(RentalDurationType)
  durationType?: RentalDurationType;

  @IsOptional()
  @IsNumber()
  taxes?: number;

  @IsOptional()
  @IsNumber()
  serviceFee?: number;

  @IsOptional()
  @IsNumber()
  insuranceFee?: number;

  @IsOptional()
  @IsNumber()
  deliveryFee?: number;

  @IsOptional()
  @IsNumber()
  extraDriverFee?: number;

  @IsOptional()
  @IsNumber()
  childSeatFee?: number;

  @IsOptional()
  @IsNumber()
  gpsFee?: number;

  @IsOptional()
  @IsNumber()
  helmetFee?: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  includedItems?: string[];
}
