import { IsBoolean, IsOptional } from 'class-validator';

export class CreateAirportTransferFlightSupportDto {
  @IsOptional()
  @IsBoolean()
  flightNumberRequired?: boolean;

  @IsOptional()
  @IsBoolean()
  airlineRequired?: boolean;

  @IsOptional()
  @IsBoolean()
  terminalSupported?: boolean;

  @IsOptional()
  @IsBoolean()
  arrivalFlightOnly?: boolean;

  @IsOptional()
  @IsBoolean()
  departureFlightOnly?: boolean;

  @IsOptional()
  @IsBoolean()
  flightTracking?: boolean;

  @IsOptional()
  @IsBoolean()
  delayMonitoring?: boolean;
}
