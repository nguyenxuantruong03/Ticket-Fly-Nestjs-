import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

import {
  FlyCabinClass,
  FlyTripStatus,
  InventoryLockStatus,
} from '@prisma/client';
import { CreateFlyOperationDto } from '../operation/create-fly-operation.dto';
import { CreateFlyTrackingDto } from '../operation/create-fly-tracking.dto';
import { CreateFlyCancellationDto } from '../operation/create-fly-cancellation.dto';
import { CreateFlyDiversionDto } from '../operation/create-fly-diversion.dto';
import { CreateFlyCodeshareDto } from '../alliance/create-fly-codeshare.dto';
import { CreateFlyTripHistoryDto } from '../operation/create-fly-trip-history.dto';

// ======================================================
// INVENTORY LOCK
// ======================================================

export class CreateFlyInventoryLockDto {
  @IsDateString()
  startTime: string;

  @IsOptional()
  @IsDateString()
  releasedAt?: string;

  @IsOptional()
  @IsEnum(InventoryLockStatus)
  status?: InventoryLockStatus;

  @IsDateString()
  endTime: string;

  @IsInt()
  @Min(1)
  quantity: number;

  @IsDateString()
  expiresAt: string;
}

// ======================================================
// WAITLIST
// ======================================================

export class CreateFlyWaitlistDto {
  @IsInt()
  @Min(1)
  position: number;
}

// ======================================================
// INVENTORY FARE
// ======================================================

export class CreateFlyInventoryFareDto {
  @IsString()
  fareId: string;

  @IsInt()
  @Min(0)
  available: number;

  @IsInt()
  @Min(0)
  sold: number;

  @IsInt()
  @Min(0)
  hold: number;

  @IsInt()
  @Min(0)
  waitlist: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyInventoryLockDto)
  locks?: CreateFlyInventoryLockDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyWaitlistDto)
  waitlists?: CreateFlyWaitlistDto[];
}

// ======================================================
// CABIN INVENTORY
// ======================================================

export class CreateFlyCabinInventoryDto {
  @IsEnum(FlyCabinClass)
  cabinClass: FlyCabinClass;

  @IsInt()
  @Min(0)
  totalSeats: number;

  @IsInt()
  @Min(0)
  availableSeats: number;

  @IsInt()
  @Min(0)
  reservedSeats: number;

  @IsInt()
  @Min(0)
  blockedSeats: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  overbookLimit?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  waitlistSeats?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyInventoryFareDto)
  fares?: CreateFlyInventoryFareDto[];
}

// ======================================================
// INVENTORY
// ======================================================

export class CreateFlyInventoryDto {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyCabinInventoryDto)
  cabins?: CreateFlyCabinInventoryDto[];
}

// ======================================================
// OVERBOOKING RULE
// ======================================================

export class CreateFlyOverbookingRuleDto {
  @IsEnum(FlyCabinClass)
  cabinClass: FlyCabinClass;

  @IsNumber()
  percentage: number;
}

// ======================================================
// TRIP
// ======================================================

export class CreateFlyTripDto {
  @IsString()
  routeId: string;

  @IsString()
  flightNumber: string;

  @IsDateString()
  departureTime: string;

  @IsDateString()
  arrivalTime: string;

  @IsInt()
  @Min(0)
  durationMinutes: number;

  @IsOptional()
  @IsEnum(FlyTripStatus)
  status?: FlyTripStatus;

  @IsOptional()
  @IsInt()
  @Min(0)
  availableSeats?: number;

  @IsOptional()
  @IsString()
  aircraftId?: string;

  @IsOptional()
  @IsString()
  scheduleId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyInventoryDto)
  inventory?: CreateFlyInventoryDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyOperationDto)
  operation: CreateFlyOperationDto;
  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => CreateFlyTrackingDto)
  tracking: CreateFlyTrackingDto[];
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyCancellationDto)
  cancellation: CreateFlyCancellationDto;
  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => CreateFlyDiversionDto)
  diversion: CreateFlyDiversionDto[];
  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => CreateFlyCodeshareDto)
  codeshares: CreateFlyCodeshareDto[];
  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => CreateFlyTripHistoryDto)
  history: CreateFlyTripHistoryDto[];
}
