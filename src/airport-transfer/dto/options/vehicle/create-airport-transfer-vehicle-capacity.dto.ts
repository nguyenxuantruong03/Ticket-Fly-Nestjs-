import { IsInt, IsOptional } from 'class-validator';

export class CreateAirportTransferVehicleCapacityDto {
  @IsInt()
  passengerCount: number;

  @IsOptional()
  @IsInt()
  luggageCount?: number;

  @IsOptional()
  @IsInt()
  cabinBaggageCount?: number;

  @IsOptional()
  @IsInt()
  oversizedLuggage?: number;
}
