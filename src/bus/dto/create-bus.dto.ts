import {
  IsArray,
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateBusRouteDto } from './options/routes/create-bus-route.dto';
import { CreateBusPoliciesDto } from './options/policies/create-bus-policies.dto';
import { CreateBusVehicleDto } from './options/vehicle/create-bus-vehicle.dto';
import { CreateBusImageDto } from './options/images/create-image.dto';
import { CreateBusPriceDto } from './options/price/create-bus-price.dto';

export class CreateBusDto {
  @IsString()
  providerBookingId: string;

  // --------------------------------------------------------------------------
  // Basic
  // --------------------------------------------------------------------------

  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  // --------------------------------------------------------------------------
  // Search
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  aliases?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  keywords?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsString()
  searchText?: string;

  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsInt()
  searchPriority?: number;

  // --------------------------------------------------------------------------
  // Routes
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusRouteDto)
  routes?: CreateBusRouteDto[];

  // --------------------------------------------------------------------------
  // Policies
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusPoliciesDto)
  policies?: CreateBusPoliciesDto;

  // --------------------------------------------------------------------------
  // Vehicle
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusVehicleDto)
  vehicles?: CreateBusVehicleDto[];

  // --------------------------------------------------------------------------
  // Images
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusImageDto)
  images?: CreateBusImageDto[];

  // --------------------------------------------------------------------------
  // Prices
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusPriceDto)
  price?: CreateBusPriceDto[];
}
