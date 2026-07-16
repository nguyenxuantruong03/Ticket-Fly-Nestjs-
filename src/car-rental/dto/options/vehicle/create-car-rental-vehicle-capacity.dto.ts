import { IsInt, IsOptional } from 'class-validator';

export class CreateCarRentalVehicleCapacityDto {
  @IsOptional()
  @IsInt()
  seatCount?: number;

  @IsOptional()
  @IsInt()
  luggageCount?: number;

  @IsOptional()
  @IsInt()
  doorCount?: number;
}
