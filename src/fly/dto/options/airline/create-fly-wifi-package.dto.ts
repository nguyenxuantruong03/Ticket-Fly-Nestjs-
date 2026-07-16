import { IsEnum, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { Currency } from '@prisma/client';

export class CreateFlyWifiPackageDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  dataLimitMb?: number;

  @IsOptional()
  @IsInt()
  durationMinutes?: number;

  @IsNumber()
  amount: number;

  @IsEnum(Currency)
  currency: Currency;
}
