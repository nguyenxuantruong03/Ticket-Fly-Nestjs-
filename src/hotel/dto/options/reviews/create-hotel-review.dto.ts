// create-hotel-review.dto.ts

import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { ReviewStatus, TripType } from '@prisma/client';

// ======================================================
// REVIEW IMAGE
// ======================================================

export class CreateHotelReviewImageDto {
  @IsString()
  url: string;

  @IsInt()
  sortOrder: number;
}

// ======================================================
// MAIN DTO
// ======================================================

export class CreateHotelReviewDto {
  // ==========================
  // RELATIONS
  // ==========================

  @IsString()
  hotelId: string;

  @IsOptional()
  @IsString()
  bookingId?: string;

  @IsOptional()
  @IsString()
  roomTypeId?: string;

  @IsString()
  userId: string;

  // ==========================
  // REVIEW INFO
  // ==========================

  @IsOptional()
  @IsEnum(TripType)
  tripType?: TripType;

  @IsOptional()
  @IsBoolean()
  wouldRecommend?: boolean;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsBoolean()
  anonymous?: boolean;

  // ==========================
  // RATING
  // ==========================

  @IsNumber()
  overallRating: number;

  @IsOptional()
  @IsNumber()
  cleanliness?: number;

  @IsOptional()
  @IsNumber()
  service?: number;

  @IsOptional()
  @IsNumber()
  location?: number;

  @IsOptional()
  @IsNumber()
  facilities?: number;

  @IsOptional()
  @IsNumber()
  valueForMoney?: number;

  @IsOptional()
  @IsNumber()
  comfort?: number;

  @IsOptional()
  @IsNumber()
  sleepQuality?: number;

  @IsOptional()
  @IsNumber()
  food?: number;

  @IsOptional()
  @IsNumber()
  wifi?: number;

  // ==========================
  // CONTENT
  // ==========================

  @IsOptional()
  @IsString()
  title?: string;

  @IsString()
  comment: string;

  @IsOptional()
  @IsString()
  pros?: string;

  @IsOptional()
  @IsString()
  cons?: string;

  // ==========================
  // REVIEWER
  // ==========================

  @IsOptional()
  @IsString()
  reviewerName?: string;

  @IsOptional()
  @IsString()
  reviewerCountry?: string;

  @IsOptional()
  @IsDateString()
  stayDate?: Date;

  // ==========================
  // STATUS
  // ==========================

  @IsOptional()
  @IsBoolean()
  verified?: boolean;

  @IsOptional()
  @IsEnum(ReviewStatus)
  status?: ReviewStatus;

  // ==========================
  // RESPONSE
  // ==========================

  @IsOptional()
  @IsString()
  response?: string;

  @IsOptional()
  @IsDateString()
  responseAt?: Date;

  // ==========================
  // IMAGES
  // ==========================

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelReviewImageDto)
  images?: CreateHotelReviewImageDto[];

  @IsOptional()
  @IsNumber()
  helpfulCount?: number;
}
