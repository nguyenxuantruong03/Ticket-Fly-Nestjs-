import { IsNumber, IsOptional } from 'class-validator';

export class CreateCarRentalVehicleLocationDto {
  @IsOptional()
  @IsNumber()
  lat?: number;

  @IsOptional()
  @IsNumber()
  lng?: number;
}
