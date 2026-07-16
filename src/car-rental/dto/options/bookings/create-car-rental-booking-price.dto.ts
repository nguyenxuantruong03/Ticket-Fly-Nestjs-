import { IsEnum, IsNumber } from 'class-validator';

import { Currency } from '@prisma/client';

export class CreateCarRentalBookingPriceDto {
  @IsNumber()
  rentalPrice: number;

  @IsNumber()
  deliveryFee?: number;

  @IsNumber()
  pickupFee?: number;

  @IsNumber()
  insuranceFee?: number;

  @IsNumber()
  serviceFee?: number;

  @IsNumber()
  tax?: number;

  @IsNumber()
  discount?: number;

  @IsNumber()
  couponDiscount?: number;

  @IsNumber()
  totalPrice: number;

  @IsEnum(Currency)
  currency: Currency;
}
