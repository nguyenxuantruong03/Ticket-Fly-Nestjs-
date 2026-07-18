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

import { HotelStatus } from '@prisma/client';

import { CreateHotelFacilitiesDto } from './options/facilities/create-hotel-facilities.dto';
import { CreateHotelFavoriteDto } from './options/favorite/create-hotel-favorite.dto';
import { CreateHotelImageDto } from './options/images/create-hotel-image.dto';
import { CreateHotelRoomTypeDto } from './options/room-type/create-hotel-room-type.dto';
import {
  CreateHotelAreaGuideDto,
  CreateHotelBookingDto,
  CreateHotelExtraDto,
  CreateHotelMealOptionDto,
} from './options/bookings/create-hotel-booking.dto';
import { CreateHotelInformationDto } from './options/infomations/create-hotel-infomation.dto';
import { CreateHotelInventoryDto } from './options/inventory/create-hotel-inventory.dto';
import { CreateHotelReviewDto } from './options/reviews/create-hotel-review.dto';
import { CreateHotelNearbyPlaceDto } from './options/nearby-place/create-hotel-nearby-place.dto';

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
  @IsEnum(HotelStatus)
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
  // CONNECT
  // ======================================================

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelInformationDto)
  information?: CreateHotelInformationDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelImageDto)
  hotelImage?: CreateHotelImageDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelFacilitiesDto)
  facilitiesHotel?: CreateHotelFacilitiesDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelFavoriteDto)
  favorites?: CreateHotelFavoriteDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelAreaGuideDto)
  areaGuides?: CreateHotelAreaGuideDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelRoomTypeDto)
  roomTypes?: CreateHotelRoomTypeDto[];

  // ======================================================
  // CONNECT EXISTING
  // ======================================================

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelInventoryDto)
  inventory?: CreateHotelInventoryDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelReviewDto)
  reviews?: CreateHotelReviewDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelBookingDto)
  bookings?: CreateHotelBookingDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelExtraDto)
  extras?: CreateHotelExtraDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelMealOptionDto)
  mealOptions?: CreateHotelMealOptionDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelNearbyPlaceDto)
  nearbyPlaces?: CreateHotelNearbyPlaceDto[];
}
