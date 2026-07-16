import { IsEnum, IsInt, IsNumber, IsString } from 'class-validator';

import { BusSeatAvailabilityStatus, Currency } from '@prisma/client';

export class CreateBusSeatAvailabilityDto {
  @IsString()
  seatId: string;

  @IsEnum(BusSeatAvailabilityStatus)
  status: BusSeatAvailabilityStatus;

  @IsInt()
  availableSeats: number;

  @IsInt()
  soldSeats: number;

  @IsInt()
  reservedSeats: number;

  @IsInt()
  totalSeats: number;

  @IsNumber()
  currentPrice: number;

  @IsEnum(Currency)
  currency: Currency;
}
