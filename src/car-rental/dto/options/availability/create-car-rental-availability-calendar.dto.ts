import { IsEnum, IsOptional, IsString } from 'class-validator';

import { CarRentalCalendarStatus } from '@prisma/client';

export class CreateCarRentalAvailabilityCalendarDto {
  @IsString()
  vehicleId: string;

  @IsString()
  startTime: string;

  @IsString()
  endTime: string;

  @IsEnum(CarRentalCalendarStatus)
  status: CarRentalCalendarStatus;

  @IsOptional()
  @IsString()
  bookingId?: string;

  @IsOptional()
  @IsString()
  note?: string;
}
