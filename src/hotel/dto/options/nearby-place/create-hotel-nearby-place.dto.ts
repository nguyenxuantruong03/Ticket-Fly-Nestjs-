// create-hotel-nearby-place.dto.ts

import { IsEnum, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

import { NearbyPlaceType } from '@prisma/client';

export class CreateHotelNearbyPlaceDto {
  // ==========================
  // RELATION
  // ==========================

  @IsString()
  hotelId: string;

  // ==========================
  // BASIC
  // ==========================

  @IsString()
  name: string;

  @IsEnum(NearbyPlaceType)
  type: NearbyPlaceType;

  // ==========================
  // LOCATION
  // ==========================

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  // ==========================
  // DISTANCE
  // ==========================

  @IsOptional()
  @IsNumber()
  distanceKm?: number;

  @IsOptional()
  @IsInt()
  travelTimeMinutes?: number;

  // ==========================
  // DESCRIPTION
  // ==========================

  @IsOptional()
  @IsString()
  description?: string;
}
