import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import {
  RentalFuelType,
  RentalTransmission,
  RentalVehicleStatus,
  RentalVehicleType,
} from '@prisma/client';

import { CreateCarRentalPriceDto } from '../price/create-car-rental-price.dto';
import { CreateCarRentalVehicleCapacityDto } from './create-car-rental-vehicle-capacity.dto';
import { CreateCarRentalVehicleFeaturesDto } from './create-car-rental-vehicle-features.dto';
import { CreateCarRentalVehicleSpecificationDto } from './create-car-rental-vehicle-specification.dto';
import { CreateCarRentalVehicleLocationDto } from './create-car-rental-vehicle-location.dto';
import { CreateCarRentalVehicleImageDto } from './create-car-rental-vehicle-image.dto';
import { CreateCarRentalVehicleMaintenanceDto } from './create-car-rental-vehicle-maintenance.dto';
import { CreateCarRentalVehicleDocumentDto } from './create-car-rental-vehicle-document.dto';

export class CreateCarRentalVehicleDto {
  @IsEnum(RentalVehicleType)
  type: RentalVehicleType;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsEnum(RentalVehicleStatus)
  status?: RentalVehicleStatus;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsInt()
  year?: number;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  licensePlate?: string;

  @IsOptional()
  @IsEnum(RentalTransmission)
  transmission?: RentalTransmission;

  @IsOptional()
  @IsEnum(RentalFuelType)
  fuelType?: RentalFuelType;

  @IsOptional()
  @IsNumber()
  fuelCapacityLiters?: number;

  @IsOptional()
  @IsNumber()
  mileageKm?: number;

  @IsOptional()
  @IsNumber()
  mileageLimitPerDay?: number;

  @IsOptional()
  @IsBoolean()
  unlimitedMileage?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalVehicleCapacityDto)
  capacity?: CreateCarRentalVehicleCapacityDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalVehicleFeaturesDto)
  features?: CreateCarRentalVehicleFeaturesDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalVehicleSpecificationDto)
  specification?: CreateCarRentalVehicleSpecificationDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalVehicleLocationDto)
  locationCurrent?: CreateCarRentalVehicleLocationDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalPriceDto)
  price?: CreateCarRentalPriceDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalVehicleImageDto)
  images?: CreateCarRentalVehicleImageDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalVehicleMaintenanceDto)
  maintenance?: CreateCarRentalVehicleMaintenanceDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalVehicleDocumentDto)
  document?: CreateCarRentalVehicleDocumentDto[];
}
