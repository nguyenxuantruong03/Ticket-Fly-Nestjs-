// dto/create-yacht-trip.dto.ts

import {
  IsArray,
  IsDate,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

import { YachtRepeatType, YachtTripStatus } from '@prisma/client';

//
// ======================================================
// Yacht Schedule
// ======================================================
//

export class CreateYachtScheduleDto {
  @IsEnum(YachtRepeatType)
  repeatType: YachtRepeatType;

  @IsArray()
  @IsInt({ each: true })
  daysOfWeek: number[];

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  startDate?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  endDate?: Date;

  @IsOptional()
  @IsString()
  departureTime?: string;
}

//
// ======================================================
// Yacht Trip
// ======================================================
//

export class CreateYachtTripDto {
  @IsOptional()
  @IsString()
  routeId?: string;

  // ==========================
  // TIME
  // ==========================

  @Type(() => Date)
  @IsDate()
  departureTime: Date;

  @Type(() => Date)
  @IsDate()
  arrivalTime: Date;

  // ==========================
  // STATUS
  // ==========================

  @IsOptional()
  @IsEnum(YachtTripStatus)
  status?: YachtTripStatus;

  // ==========================
  // CAPACITY
  // ==========================

  @IsOptional()
  @IsInt()
  maxGuests?: number;

  // ==========================
  // SCHEDULE
  // ==========================

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtScheduleDto)
  schedule?: CreateYachtScheduleDto;
}
