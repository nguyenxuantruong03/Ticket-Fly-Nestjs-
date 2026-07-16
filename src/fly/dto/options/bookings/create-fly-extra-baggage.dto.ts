import { IsEnum, IsNumber, Min } from 'class-validator';

import { Currency } from '@prisma/client';

export class CreateFlyExtraBaggageDto {
  @IsNumber()
  @Min(0)
  weightKg: number;

  @IsNumber()
  @Min(0)
  amount: number;

  @IsEnum(Currency)
  currency: Currency;
}
