import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { BusVehicleStatus, BusVehicleType } from '@prisma/client';

import { CreateBusVehicleCapacityDto } from './create-bus-vehicle-capacity.dto';
import { CreateBusVehicleSpecificationDto } from './create-bus-vehicle-specification.dto';
import { CreateBusVehicleFeaturesDto } from './create-bus-vehicle-features.dto';
import { CreateBusVehicleImageDto } from './create-bus-vehicle-image.dto';
import { CreateBusSeatDto } from './create-bus-seat.dto';
import { CreateBusSeatLayoutDto } from './create-bus-seat-layout.dto';
import { CreateBusSeatMapDto } from './create-bus-seat-map.dto';

export class CreateBusVehicleDto {
  @IsEnum(BusVehicleType)
  type: BusVehicleType;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

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
  @IsEnum(BusVehicleStatus)
  status?: BusVehicleStatus;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusVehicleCapacityDto)
  capacity?: CreateBusVehicleCapacityDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusVehicleSpecificationDto)
  specification?: CreateBusVehicleSpecificationDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusVehicleFeaturesDto)
  features?: CreateBusVehicleFeaturesDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusVehicleImageDto)
  images?: CreateBusVehicleImageDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusSeatDto)
  seats?: CreateBusSeatDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusSeatLayoutDto)
  seatLayout?: CreateBusSeatLayoutDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusSeatMapDto)
  seatMap?: CreateBusSeatMapDto;
}
