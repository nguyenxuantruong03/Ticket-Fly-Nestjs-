import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

import { Currency } from '@prisma/client';

export class CreateYachtTripPriceDto {
  @IsString()
  tripId: string;

  @IsEnum(Currency)
  currency: Currency;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsNumber()
  originalAmount?: number;

  @IsOptional()
  @IsNumber()
  tax?: number;

  @IsOptional()
  @IsNumber()
  serviceFee?: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsNumber()
  finalAmount: number;
}
