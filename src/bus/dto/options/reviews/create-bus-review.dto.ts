import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { ReviewStatus } from '@prisma/client';

import { CreateBusReviewImageDto } from './create-bus-review-image.dto';

export class CreateBusReviewDto {
  // --------------------------------------------------------------------------
  // Relations
  // --------------------------------------------------------------------------

  @IsString()
  busId: string;

  @IsString()
  tripId: string;

  @IsOptional()
  @IsString()
  bookingId?: string;

  @IsOptional()
  @IsString()
  userId?: string;

  // --------------------------------------------------------------------------
  // Rating
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsBoolean()
  anonymous?: boolean;

  @IsNumber()
  overallRating: number;

  @IsOptional()
  @IsNumber()
  cleanliness?: number;

  @IsOptional()
  @IsNumber()
  comfort?: number;

  @IsOptional()
  @IsNumber()
  busCondition?: number;

  @IsOptional()
  @IsNumber()
  driverService?: number;

  @IsOptional()
  @IsNumber()
  staffService?: number;

  @IsOptional()
  @IsNumber()
  punctuality?: number;

  @IsOptional()
  @IsNumber()
  boardingExperience?: number;

  @IsOptional()
  @IsNumber()
  bookingExperience?: number;

  @IsOptional()
  @IsNumber()
  valueForMoney?: number;

  // --------------------------------------------------------------------------
  // Review
  // --------------------------------------------------------------------------

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

  @IsOptional()
  @IsBoolean()
  recommend?: boolean;

  // --------------------------------------------------------------------------
  // Metadata
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsBoolean()
  verified?: boolean;

  @IsOptional()
  @IsEnum(ReviewStatus)
  status?: ReviewStatus;

  @IsOptional()
  @IsDateString()
  travelDate?: string;

  @IsOptional()
  @IsInt()
  helpfulCount?: number;

  @IsOptional()
  @IsString()
  response?: string;

  @IsOptional()
  @IsDateString()
  responseAt?: string;

  // --------------------------------------------------------------------------
  // Images
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusReviewImageDto)
  images?: CreateBusReviewImageDto[];
}
