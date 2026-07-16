import { IsBoolean, IsOptional } from 'class-validator';

export class CreateYachtFlightSupportDto {
  @IsOptional()
  @IsBoolean()
  airportPickup?: boolean;

  @IsOptional()
  @IsBoolean()
  flightNumberRequired?: boolean;

  @IsOptional()
  @IsBoolean()
  flightDelayMonitoring?: boolean;
}
