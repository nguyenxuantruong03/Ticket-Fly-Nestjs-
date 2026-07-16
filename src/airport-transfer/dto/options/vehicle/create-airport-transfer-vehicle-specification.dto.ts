import { IsNumber, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateAirportTransferVehicleSpecificationDto {
  @IsOptional()
  @IsInt()
  engineSizeCc?: number;

  @IsOptional()
  @IsNumber()
  fuelCapacity?: number;

  @IsOptional()
  @IsNumber()
  mileageKm?: number;

  @IsOptional()
  @IsString()
  vin?: string;
}
