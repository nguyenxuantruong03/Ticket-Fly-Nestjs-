import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';

import { Currency } from '@prisma/client';

export class CreateFlyPassengerLoungeDto {
  @IsString()
  loungeId: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

  @IsOptional()
  @IsEnum(Currency)
  currency?: Currency;
}
