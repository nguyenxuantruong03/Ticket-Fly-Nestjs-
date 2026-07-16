import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

import { FlyRouteType } from '@prisma/client';

// ======================================================
// ROUTE SEGMENT
// ======================================================

export class CreateFlyRouteSegmentDto {
  @IsString()
  departureAirportId: string;

  @IsString()
  arrivalAirportId: string;

  @IsInt()
  @Min(1)
  segmentOrder: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  estimatedDuration?: number;

  @IsOptional()
  @IsNumber()
  distanceKm?: number;
}

// ======================================================
// ROUTE
// ======================================================

export class CreateFlyRouteDto {
  @IsString()
  departureAirportId: string;

  @IsString()
  arrivalAirportId: string;

  @IsOptional()
  @IsNumber()
  distanceKm?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  estimatedDuration?: number;

  @IsOptional()
  @IsBoolean()
  directFlight?: boolean;

  @IsEnum(FlyRouteType)
  routeType: FlyRouteType;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyRouteSegmentDto)
  segments?: CreateFlyRouteSegmentDto[];
}
