import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

import { Currency } from '@prisma/client';

export class CreateFlyPassengerInsuranceDto {
  @IsString()
  insuranceId: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number;

  @IsNumber()
  @Min(0)
  unitPrice: number;

  @IsNumber()
  @Min(0)
  totalPrice: number;

  @IsEnum(Currency)
  currency: Currency;
}
