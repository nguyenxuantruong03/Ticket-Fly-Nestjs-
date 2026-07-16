import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCarRentalVehicleMaintenanceDto {
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  mileageKm?: number;

  @IsOptional()
  @IsDateString()
  serviceDate?: string;

  @IsOptional()
  @IsNumber()
  cost?: number;
}
