import { IsEnum, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

import { CarRentalExtraType, Currency } from '@prisma/client';

export class CreateCarRentalBookingExtraDto {
  @IsOptional()
  @IsString()
  extraId?: string;

  @IsString()
  name: string;

  @IsEnum(CarRentalExtraType)
  type: CarRentalExtraType;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsNumber()
  unitPrice: number;

  @IsNumber()
  totalPrice: number;

  @IsEnum(Currency)
  currency: Currency;
}
