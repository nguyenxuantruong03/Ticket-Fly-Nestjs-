import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsInt,
} from 'class-validator';

import { BusSeatType } from '@prisma/client';

export class CreateBusPriceBreakdownDto {
  @IsEnum(BusSeatType)
  seatType: BusSeatType;

  @IsNumber()
  basePrice: number;

  @IsOptional()
  @IsNumber()
  originalPrice?: number;

  @IsOptional()
  @IsNumber()
  taxes?: number;

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

  @IsOptional()
  @IsInt()
  availableSeats?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  includedItems?: string[];
}
