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

import { AirportTransferServiceType } from '@prisma/client';
import { CreateAirportTransferAvailabilityDto } from './options/trip/create-airport-transfer-availability.dto';
import { CreateAirportTransferCapacityDto } from './options/trip/create-airport-transfer-capacity.dto';
import { CreateAirportTransferRouteDto } from './options/routes/create-airport-transfer-route.dto';
import { CreateAirportTransferTripDto } from './options/trip/create-airport-transfer-trip.dto';
import { CreateAirportTransferVehicleDto } from './options/vehicle/create-airport-transfer-vehicle.dto';
import { CreateAirportTransferFlightSupportDto } from './options/flight/create-airport-transfer-flight-support.dto';
import { CreateAirportTransferMeetAndGreetDto } from './options/flight/create-airport-transfer-meet-and-greet.dto';
import { CreateAirportTransferWaitingPolicyDto } from './options/flight/create-airport-transfer-waiting-policy.dto';
import { CreateAirportTransferPassengerRequirementDto } from './options/flight/create-airport-transfer-passenger-requirement.dto';
import { CreateAirportTransferContactInformationDto } from './options/flight/create-airport-transfer-contact-information.dto';
import { CreateAirportTransferSpecialRequestDto } from './options/flight/create-airport-transfer-special-request.dto';
import { CreateAirportTransferPriceDto } from './options/price/create-airport-transfer-price.dto';
import { CreateAirportTransferNoticeDto } from './options/notice/notice.dto';
import { CreateAirportTransferScheduleDto } from './options/routes/create-airport-transfer-schedule.dto';
import { CreateAirportTransferLuggagePolicyDto } from './options/flight/create-airport-transfer-luggage-policy.dto';

export class CreateAirportTransferDto {
  @IsString()
  providerBookingId: string;

  // --------------------------------------------------------------------------
  // Basic
  // --------------------------------------------------------------------------

  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsEnum(AirportTransferServiceType)
  serviceType: AirportTransferServiceType;

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
  @IsBoolean()
  searchable?: boolean;

  @IsOptional()
  @IsInt()
  searchPriority?: number;

  // --------------------------------------------------------------------------
  // Flags
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsBoolean()
  instantConfirmation?: boolean;

  // --------------------------------------------------------------------------
  // Availability
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferAvailabilityDto)
  availability?: CreateAirportTransferAvailabilityDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferCapacityDto)
  capacity?: CreateAirportTransferCapacityDto;

  // --------------------------------------------------------------------------
  // Routes
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferRouteDto)
  routes?: CreateAirportTransferRouteDto[];

  // --------------------------------------------------------------------------
  // Trips
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferTripDto)
  trips?: CreateAirportTransferTripDto[];

  // --------------------------------------------------------------------------
  // Vehicles
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferVehicleDto)
  vehicle?: CreateAirportTransferVehicleDto[];

  // --------------------------------------------------------------------------
  // Flight Support
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferFlightSupportDto)
  flightSupport?: CreateAirportTransferFlightSupportDto;

  // --------------------------------------------------------------------------
  // Meet & Greet
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferMeetAndGreetDto)
  meetAndGreet?: CreateAirportTransferMeetAndGreetDto;

  // --------------------------------------------------------------------------
  // Waiting Policy
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferWaitingPolicyDto)
  waitingPolicy?: CreateAirportTransferWaitingPolicyDto;

  // --------------------------------------------------------------------------
  // Luggage Policy
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferLuggagePolicyDto)
  luggagePolicy?: CreateAirportTransferLuggagePolicyDto;

  // --------------------------------------------------------------------------
  // Passenger Requirement
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferPassengerRequirementDto)
  passengerRequirement?: CreateAirportTransferPassengerRequirementDto;

  // --------------------------------------------------------------------------
  // Contact Information
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferContactInformationDto)
  contactInformation?: CreateAirportTransferContactInformationDto;

  // --------------------------------------------------------------------------
  // Special Request
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferSpecialRequestDto)
  specialRequest?: CreateAirportTransferSpecialRequestDto;

  // --------------------------------------------------------------------------
  // Price
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferPriceDto)
  price?: CreateAirportTransferPriceDto;

  // --------------------------------------------------------------------------
  // Notice
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferNoticeDto)
  notice?: CreateAirportTransferNoticeDto;

  // --------------------------------------------------------------------------
  // Schedule
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferScheduleDto)
  schedules?: CreateAirportTransferScheduleDto[];
}
