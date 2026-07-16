// dto/create-yacht-review.dto.ts

import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ReviewStatus } from '@prisma/client';

//
// ======================================================
// Yacht Review Image
// ======================================================
//

export class CreateYachtReviewImageDto {
  @IsString()
  url: string;
}

//
// ======================================================
// Yacht Review
// ======================================================
//

export class CreateYachtReviewDto {
  @IsString()
  yachtId: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  bookingId?: string;

  // ==========================
  // RATING
  // ==========================

  @IsNumber()
  @Min(0)
  @Max(5)
  overallRating: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  captainRating?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  crewRating?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  cleanliness?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  safety?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  comfort?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  experience?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  valueForMoney?: number;

  // ==========================
  // CONTENT
  // ==========================

  @IsOptional()
  @IsString()
  title?: string;

  @IsString()
  comment: string;

  // ==========================
  // IMAGES
  // ==========================

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtReviewImageDto)
  images?: CreateYachtReviewImageDto[];

  // ==========================
  // STATUS
  // ==========================

  @IsOptional()
  @IsBoolean()
  verified?: boolean;

  @IsOptional()
  @IsEnum(ReviewStatus)
  status?: ReviewStatus;
}
