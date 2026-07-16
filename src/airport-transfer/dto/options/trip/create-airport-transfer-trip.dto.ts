import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

import { AirportTransferTripStatus } from '@prisma/client';

export class CreateAirportTransferTripDto {
  @IsString()
  routeId: string;

  @IsOptional()
  @IsString()
  scheduleId?: string;

  @IsDateString()
  departureTime: string;

  @IsDateString()
  estimatedArrivalTime: string;

  @IsInt()
  totalSeats: number;

  @IsInt()
  availableSeats: number;

  @IsOptional()
  @IsEnum(AirportTransferTripStatus)
  status?: AirportTransferTripStatus;
}
