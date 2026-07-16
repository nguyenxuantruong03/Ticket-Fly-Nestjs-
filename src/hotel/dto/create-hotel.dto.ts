import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CreateHotelFacilitiesDto } from './options/facilities/create-hotel-facilities.dto';
import { CreateHotelFavoriteDto } from './options/favorite/create-hotel-favorite.dto';
import { CreateHotelImageDto } from './options/images/create-hotel-image.dto';
import { CreateHotelRoomTypeDto } from './options/room-type/create-hotel-room-type.dto';
import { CreateHotelAreaGuideDto } from './options/bookings/create-hotel-booking.dto';
import { HotelStatus } from '@prisma/client';

export class CreateHotelDto {
  // ======================================================
  // BASIC
  // ======================================================

  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsArray()
  @IsString({ each: true })
  aliases: string[];

  @IsArray()
  @IsString({ each: true })
  keywords: string[];

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsOptional()
  @IsString()
  searchText?: string;

  // ======================================================
  // STATUS
  // ======================================================

  @IsOptional()
  @IsEnum(() => HotelStatus)
  status?: HotelStatus;

  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsBoolean()
  searchable?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  searchPriority?: number;

  // ======================================================
  // CONNECT RELATIONS
  // ======================================================

  @IsOptional()
  @IsString()
  informationId?: string;

  // ======================================================
  // CREATE RELATIONS
  // ======================================================

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelImageDto)
  hotelImage?: CreateHotelImageDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelFacilitiesDto)
  facilitiesHotel?: CreateHotelFacilitiesDto;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelFavoriteDto)
  favorites?: CreateHotelFavoriteDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelAreaGuideDto)
  areaGuides?: CreateHotelAreaGuideDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelRoomTypeDto)
  roomTypes?: CreateHotelRoomTypeDto[];

  // ======================================================
  // CONNECT EXISTING
  // ======================================================

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  inventoryIds?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  reviewIds?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  bookingIds?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  extraIds?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  mealOptionIds?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  nearbyPlaceIds?: string[];
}
