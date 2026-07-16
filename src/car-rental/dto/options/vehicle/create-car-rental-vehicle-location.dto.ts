import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCarRentalVehicleLocationDto {
  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsNumber()
  lat?: number;

  @IsOptional()
  @IsNumber()
  lng?: number;
}
