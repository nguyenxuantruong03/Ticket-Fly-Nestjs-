import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateAirportTransferBookingFlightDto {
  @IsOptional()
  @IsString()
  airline?: string;

  @IsOptional()
  @IsString()
  flightNumber?: string;

  @IsOptional()
  @IsString()
  terminal?: string;

  @IsOptional()
  @IsDateString()
  expectedArrival?: string;

  @IsOptional()
  @IsDateString()
  actualArrival?: string;
}
