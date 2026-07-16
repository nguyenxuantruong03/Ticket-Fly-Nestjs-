import { IsEnum, IsOptional, IsString } from 'class-validator';

import { AirportTransferBookingStatus } from '@prisma/client';

export class CreateAirportTransferBookingStatusHistoryDto {
  @IsOptional()
  @IsEnum(AirportTransferBookingStatus)
  fromStatus?: AirportTransferBookingStatus;

  @IsEnum(AirportTransferBookingStatus)
  toStatus: AirportTransferBookingStatus;

  @IsOptional()
  @IsString()
  note?: string;
}
