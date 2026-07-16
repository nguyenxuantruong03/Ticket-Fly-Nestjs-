import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Currency, FlyAddonType } from '@prisma/client';

export class CreateFlyAddonDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(FlyAddonType)
  type: FlyAddonType;

  @IsOptional()
  @IsString()
  provider?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsNumber()
  amount: number;

  @IsEnum(Currency)
  currency: Currency;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
