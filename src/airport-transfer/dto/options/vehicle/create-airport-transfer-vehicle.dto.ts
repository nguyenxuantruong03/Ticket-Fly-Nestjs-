import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import {
  AirportTransferFuelType,
  AirportTransferTransmission,
  AirportTransferVehicleStatus,
  AirportTransferVehicleType,
} from '@prisma/client';

import { CreateAirportTransferVehicleCapacityDto } from './create-airport-transfer-vehicle-capacity.dto';
import { CreateAirportTransferVehicleFeaturesDto } from './create-airport-transfer-vehicle-features.dto';
import { CreateAirportTransferVehicleSpecificationDto } from './create-airport-transfer-vehicle-specification.dto';
import { CreateAirportTransferVehicleImageDto } from './create-airport-transfer-vehicle-image.dto';
import { CreateAirportTransferVehicleAvailabilityDto } from './create-airport-transfer-vehicle-availability.dto';
import { CreateAirportTransferDriverDto } from './create-airport-transfer-driver.dto';

export class CreateAirportTransferVehicleDto {
  @IsEnum(AirportTransferVehicleType)
  type: AirportTransferVehicleType;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  manufacturer?: string;

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
  @IsEnum(AirportTransferTransmission)
  transmission?: AirportTransferTransmission;

  @IsOptional()
  @IsEnum(AirportTransferFuelType)
  fuelType?: AirportTransferFuelType;

  @IsOptional()
  @IsEnum(AirportTransferVehicleStatus)
  status?: AirportTransferVehicleStatus;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferVehicleCapacityDto)
  capacity?: CreateAirportTransferVehicleCapacityDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferVehicleFeaturesDto)
  features?: CreateAirportTransferVehicleFeaturesDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferVehicleSpecificationDto)
  specification?: CreateAirportTransferVehicleSpecificationDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferVehicleImageDto)
  images?: CreateAirportTransferVehicleImageDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferVehicleAvailabilityDto)
  availability?: CreateAirportTransferVehicleAvailabilityDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferDriverDto)
  drivers?: CreateAirportTransferDriverDto[];
}
