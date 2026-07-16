// create-hotel-room-type.dto.ts

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
  BedType,
  SmokingPolicy,
  MealPlan,
  RoomViewType,
  BathroomType,
} from '@prisma/client';
import { CreateHotelRoomFacilitiesDto } from '../facilities/create-hotel-facilities.dto';

// ======================================================
// HOTEL ROOM IMAGE
// ======================================================

export class CreateHotelRoomImageDto {
  @IsOptional()
  @IsString()
  thumbnail?: string;

  @IsOptional()
  @IsString()
  cover?: string;

  @IsOptional()
  @IsString()
  hero?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  rooms?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  bedroom?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  bathroom?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  balcony?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  livingRoom?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  kitchen?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  workspace?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  view?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  gallery?: string[];
}

// ======================================================
// HOTEL ROOM DTO
// ======================================================

export class CreateHotelRoomDto {
  @IsString()
  roomTypeId: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  roomSize?: number;

  @IsOptional()
  @IsArray()
  @IsEnum(BedType, { each: true })
  bedTypes?: BedType[];

  @IsOptional()
  @IsInt()
  maxGuests?: number;

  @IsOptional()
  @IsInt()
  maxAdults?: number;

  @IsOptional()
  @IsInt()
  maxChildren?: number;

  @IsOptional()
  @IsInt()
  totalRooms?: number;

  @IsOptional()
  @IsBoolean()
  breakfastIncluded?: boolean;

  @IsOptional()
  @IsEnum(SmokingPolicy)
  smokingPolicy?: SmokingPolicy;

  @IsOptional()
  @IsEnum(MealPlan)
  mealPlan?: MealPlan;

  @IsOptional()
  @IsInt()
  bedCount?: number;

  @IsOptional()
  @IsNumber()
  bathroomCount?: number;

  @IsOptional()
  @IsEnum(RoomViewType)
  viewType?: RoomViewType;

  @IsOptional()
  @IsEnum(BathroomType)
  bathRoomType?: BathroomType;

  @IsOptional()
  @IsInt()
  floor?: number;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsBoolean()
  soundproof?: boolean;

  @IsOptional()
  @IsBoolean()
  nonSmoking?: boolean;

  @IsOptional()
  @IsBoolean()
  airConditioning?: boolean;

  @IsOptional()
  @IsBoolean()
  kitchenette?: boolean;

  @IsOptional()
  @IsBoolean()
  privateBathroom?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelRoomImageDto)
  roomImage?: CreateHotelRoomImageDto[];

  @IsOptional()
  @Type(() => CreateHotelRoomFacilitiesDto)
  roomFacilities?: CreateHotelRoomFacilitiesDto;
}

// ======================================================
// ROOM TYPE DTO
// ======================================================

export class CreateHotelRoomTypeDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsInt()
  sortOrder?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelRoomDto)
  rooms?: CreateHotelRoomDto[];
}
