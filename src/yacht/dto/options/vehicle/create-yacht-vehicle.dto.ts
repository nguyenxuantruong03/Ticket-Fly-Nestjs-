// dto/create-yacht-vehicle.dto.ts

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
  YachtFuelType,
  YachtCondition,
  YachtImageCategory,
} from '@prisma/client';
import { CreateYachtVehicleFacilitiesDto } from '../facilities/create-yacht-vehicle-facilities.dto';
import { CreateYachtSafetyEquipmentDto } from '../facilities/create-yacht-safety-equipment.dto';

//
// ======================================================
// Yacht Capacity
// ======================================================
//

export class CreateYachtCapacityDto {
  @IsInt()
  guestCapacity: number;

  @IsOptional()
  @IsInt()
  overnightCapacity?: number;

  @IsOptional()
  @IsInt()
  cabinCount?: number;

  @IsOptional()
  @IsInt()
  bathroomCount?: number;

  @IsOptional()
  @IsInt()
  crewCapacity?: number;
}

//
// ======================================================
// Yacht Specification
// ======================================================
//

export class CreateYachtSpecificationDto {
  @IsOptional()
  @IsInt()
  enginePowerHp?: number;

  @IsOptional()
  @IsNumber()
  cruisingSpeedKnots?: number;

  @IsOptional()
  @IsNumber()
  maxSpeedKnots?: number;

  @IsOptional()
  @IsNumber()
  fuelCapacityLiter?: number;

  @IsOptional()
  @IsNumber()
  rangeNm?: number;
}

//
// ======================================================
// Yacht Vehicle Image
// ======================================================
//

export class CreateYachtVehicleImageDto {
  @IsString()
  url: string;

  @IsEnum(YachtImageCategory)
  category: YachtImageCategory;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;

  @IsOptional()
  @IsInt()
  sortOrder?: number;
}

//
// ======================================================
// Yacht Vehicle
// ======================================================
//

export class CreateYachtVehicleDto {
  // ==========================
  // BASIC INFO
  // ==========================

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
  registrationNumber?: string;

  // ==========================
  // DIMENSION
  // ==========================

  @IsOptional()
  @IsNumber()
  lengthMeter?: number;

  @IsOptional()
  @IsNumber()
  widthMeter?: number;

  @IsOptional()
  @IsNumber()
  speedKnots?: number;

  // ==========================
  // ENUM
  // ==========================

  @IsOptional()
  @IsEnum(YachtFuelType)
  fuelType?: YachtFuelType;

  @IsOptional()
  @IsEnum(YachtCondition)
  condition?: YachtCondition;

  // ==========================
  // NESTED
  // ==========================

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtCapacityDto)
  capacity?: CreateYachtCapacityDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtSpecificationDto)
  specification?: CreateYachtSpecificationDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtVehicleImageDto)
  images?: CreateYachtVehicleImageDto[];

  @ValidateNested()
  @Type(() => CreateYachtVehicleFacilitiesDto)
  facilities?: CreateYachtVehicleFacilitiesDto;

  @ValidateNested()
  @Type(() => CreateYachtSafetyEquipmentDto)
  safetyEquipment?: CreateYachtSafetyEquipmentDto;
}
