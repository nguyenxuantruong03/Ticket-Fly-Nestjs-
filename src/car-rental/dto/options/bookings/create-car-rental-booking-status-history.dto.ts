import { IsEnum, IsOptional, IsString } from 'class-validator';

import { CarRentalBookingStatus } from '@prisma/client';

export class CreateCarRentalBookingStatusHistoryDto {
  @IsOptional()
  @IsEnum(CarRentalBookingStatus)
  fromStatus?: CarRentalBookingStatus;

  @IsEnum(CarRentalBookingStatus)
  toStatus: CarRentalBookingStatus;

  @IsOptional()
  @IsString()
  note?: string;
}
