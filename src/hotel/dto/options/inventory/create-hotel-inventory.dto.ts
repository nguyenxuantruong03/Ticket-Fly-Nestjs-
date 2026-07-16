import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import {
  HotelRatePlanType,
  MealPlan,
  InventoryLockStatus,
} from '@prisma/client';
import { CreateHotelRoomPriceDto } from '../price/create-hotel-price.dto';
import { CreateHotelPoliciesDto } from '../policies/create-hotel-policies.dto';

//
// ======================================================
// HOTEL INVENTORY
// ======================================================
//

export class CreateHotelInventoryDto {
  @IsString()
  roomTypeId: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelAvailabilityDto)
  availability?: CreateHotelAvailabilityDto;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelRatePlanDto)
  ratePlans?: CreateHotelRatePlanDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelInventoryLockDto)
  locks?: CreateHotelInventoryLockDto[];
}

//
// ======================================================
// HOTEL AVAILABILITY
// ======================================================
//

export class CreateHotelAvailabilityDto {
  @IsBoolean()
  isAvailable;

  @IsOptional()
  @IsInt()
  @Min(0)
  availableRooms?: number;

  @IsOptional()
  @IsDateString()
  lastUpdated?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelAvailabilityCalendarDto)
  calendar?: CreateHotelAvailabilityCalendarDto[];
}

//
// ======================================================
// HOTEL AVAILABILITY CALENDAR
// ======================================================
//

export class CreateHotelAvailabilityCalendarDto {
  @IsDateString()
  date: string;

  @IsBoolean()
  available: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  remainingRooms?: number;

  @IsOptional()
  @IsNumber()
  priceOverride?: number;

  @IsOptional()
  @IsBoolean()
  stopSell?: boolean;

  @IsOptional()
  @IsInt()
  @Min(1)
  minimumStay?: number;

  @IsOptional()
  @IsBoolean()
  closedToArrival?: boolean;

  @IsOptional()
  @IsBoolean()
  closedToDeparture?: boolean;
}

//
// ======================================================
// HOTEL INVENTORY LOCK
// ======================================================
//

export class CreateHotelInventoryLockDto {
  @IsOptional()
  @IsString()
  ratePlanId?: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  bookingId?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number;

  @IsOptional()
  @IsEnum(InventoryLockStatus)
  status?: InventoryLockStatus;

  @IsDateString()
  startTime: string;

  @IsOptional()
  @IsDateString()
  releasedAt?: string;

  @IsDateString()
  endTime: string;

  @IsDateString()
  expiresAt: string;
}

//
// ======================================================
// HOTEL RATE PLAN
// ======================================================
//

export class CreateHotelRatePlanDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(HotelRatePlanType)
  type: HotelRatePlanType;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsEnum(MealPlan)
  mealPlan?: MealPlan;

  @IsOptional()
  @IsBoolean()
  refundable?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelRatePlanCancellationDto)
  cancellationPolicy?: CreateHotelRatePlanCancellationDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelRoomPriceDto)
  price?: CreateHotelRoomPriceDto;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelPoliciesDto)
  policies?: CreateHotelPoliciesDto;
}

//
// ======================================================
// HOTEL RATE PLAN CANCELLATION
// ======================================================
//

export class CreateHotelRatePlanCancellationDto {
  @IsOptional()
  @IsBoolean()
  freeCancellation?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  beforeHours?: number;

  @IsOptional()
  @IsNumber()
  cancellationFee?: number;
}
