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

import { DriverOption } from '@prisma/client';
import { CreateCarRentalTripDto } from './options/trip/create-car-rental-trip.dto';
import { CreateCarRentalPoliciesDto } from './options/policies/create-car-rental-policies.dto';
import { CreateCarRentalVehicleDto } from './options/vehicle/create-car-rental-vehicle.dto';
import { CreateCarRentalImageDto } from './options/images/create-car-rental-image.dto';
import { CreateCarRentalExtraDto } from './options/extra/create-car-rental-extra.dto';
import { CreateCarRentalInsuranceDto } from './options/insurance/create-car-rental-insurance.dto';
import { CreateCarRentalBusinessHourDto } from './options/business-hour/create-car-rental-business-hour.dto';
import { CreateCarRentalPickupInstructionDto } from './options/instruction/create-car-rental-pickup-instruction.dto';
import { CreateCarRentalDriverDto } from './options/driver/create-car-rental-driver.dto';
import { CreateCarRentalReviewDto } from './options/reviews/create-car-rental-review.dto';

export class CreateCarRentalDto {
  // --------------------------------------------------------------------------
  // Basic
  // --------------------------------------------------------------------------

  @IsEnum(DriverOption)
  driverOption: DriverOption;

  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  aliases?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  keywords?: string[];

  @IsOptional()
  @IsString()
  searchText?: string;

  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsInt()
  searchPriority?: number;

  @IsString()
  providerBookingId: string;

  // --------------------------------------------------------------------------
  // Trip
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalTripDto)
  trip?: CreateCarRentalTripDto;

  // --------------------------------------------------------------------------
  // Policies
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalPoliciesDto)
  policies?: CreateCarRentalPoliciesDto;

  // --------------------------------------------------------------------------
  // Vehicles
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalVehicleDto)
  vehicle?: CreateCarRentalVehicleDto[];

  // --------------------------------------------------------------------------
  // Images
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalImageDto)
  images?: CreateCarRentalImageDto[];

  // --------------------------------------------------------------------------
  // Reviews
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalReviewDto)
  reviews?: CreateCarRentalReviewDto[];

  // --------------------------------------------------------------------------
  // Extras
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalExtraDto)
  extras?: CreateCarRentalExtraDto[];

  // --------------------------------------------------------------------------
  // Insurance
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalInsuranceDto)
  insurances?: CreateCarRentalInsuranceDto[];

  // --------------------------------------------------------------------------
  // Business Hours
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalBusinessHourDto)
  businessHours?: CreateCarRentalBusinessHourDto[];

  // --------------------------------------------------------------------------
  // Pickup Instructions
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalPickupInstructionDto)
  pickupInstructions?: CreateCarRentalPickupInstructionDto[];

  // --------------------------------------------------------------------------
  // Drivers
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalDriverDto)
  drivers?: CreateCarRentalDriverDto[];
}
