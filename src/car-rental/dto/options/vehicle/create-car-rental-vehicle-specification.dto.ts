import { IsEnum, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

import { RentalVehicleCondition } from '@prisma/client';

export class CreateCarRentalVehicleSpecificationDto {
  @IsOptional()
  @IsString()
  vin?: string;

  @IsOptional()
  @IsInt()
  engineSizeCc?: number;

  @IsOptional()
  @IsInt()
  horsePower?: number;

  @IsOptional()
  @IsNumber()
  batteryCapacityKwh?: number;

  @IsOptional()
  @IsNumber()
  rangeKm?: number;

  @IsOptional()
  @IsEnum(RentalVehicleCondition)
  condition?: RentalVehicleCondition;

  @IsOptional()
  @IsInt()
  previousOwners?: number;
}
