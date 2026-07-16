import { IsEnum, IsOptional, IsString } from 'class-validator';

import { BusBookingStatus } from '@prisma/client';

export class CreateBusBookingStatusHistoryDto {
  @IsEnum(BusBookingStatus)
  status: BusBookingStatus;

  @IsOptional()
  @IsString()
  note?: string;
}
