import { IsEnum, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

import { CarRentalInsuranceType, Currency } from '@prisma/client';

export class CreateCarRentalBookingInsuranceDto {
  @IsOptional()
  @IsString()
  insuranceId?: string;

  @IsString()
  name: string;

  @IsEnum(CarRentalInsuranceType)
  type: CarRentalInsuranceType;

  @IsNumber()
  price: number;

  @IsEnum(Currency)
  currency: Currency;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsNumber()
  totalPrice: number;
}
