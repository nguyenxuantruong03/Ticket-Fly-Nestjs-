import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class CreateAirportTransferCapacityDto {
  @IsOptional()
  @IsInt()
  maxTripsPerDay?: number;

  @IsOptional()
  @IsInt()
  maxVehiclesPerDay?: number;

  @IsOptional()
  @IsBoolean()
  overbookingAllowed?: boolean;
}
