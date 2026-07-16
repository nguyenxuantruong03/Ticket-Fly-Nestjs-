import { IsEnum, IsInt, IsNumber, IsOptional } from 'class-validator';

import { BusSeatType } from '@prisma/client';

export class CreateBusSeatPriceDto {
  @IsEnum(BusSeatType)
  seatType: BusSeatType;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  originalPrice?: number;

  @IsOptional()
  @IsNumber()
  taxes?: number;

  @IsOptional()
  @IsNumber()
  serviceFee?: number;

  @IsOptional()
  @IsNumber()
  bookingFee?: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsNumber()
  finalPrice: number;

  @IsOptional()
  @IsInt()
  availableSeats?: number;
}
