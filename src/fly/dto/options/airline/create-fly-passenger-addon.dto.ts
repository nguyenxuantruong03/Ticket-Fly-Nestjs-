import {
  IsEnum,
  IsInt,
  IsNumber,
  IsObject,
  IsOptional,
  Min,
} from 'class-validator';
import { Currency } from '@prisma/client';

export class CreateFlyPassengerAddonDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number;

  @IsNumber()
  unitPrice: number;

  @IsNumber()
  totalPrice: number;

  @IsEnum(Currency)
  currency: Currency;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}
