import { IsEnum, IsNumber } from 'class-validator';

import { Currency } from '@prisma/client';

export class CreateBusBookingPriceSnapshotDto {
  @IsNumber()
  subtotal: number;

  @IsNumber()
  taxes: number;

  @IsNumber()
  serviceFee: number;

  @IsNumber()
  discount: number;

  @IsNumber()
  total: number;

  @IsEnum(Currency)
  currency: Currency;
}
