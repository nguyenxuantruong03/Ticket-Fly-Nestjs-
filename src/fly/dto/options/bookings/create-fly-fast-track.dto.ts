import { IsBoolean, IsEnum, IsNumber, IsOptional, Min } from 'class-validator';

import { Currency } from '@prisma/client';

export class CreateFlyFastTrackDto {
  @IsBoolean()
  enabled: boolean;

  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

  @IsOptional()
  @IsEnum(Currency)
  currency?: Currency;
}
