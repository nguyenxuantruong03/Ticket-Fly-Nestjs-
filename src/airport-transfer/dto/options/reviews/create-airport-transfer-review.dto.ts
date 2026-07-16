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

import { CreateAirportTransferReviewImageDto } from './create-airport-transfer-review-image.dto';

export class CreateAirportTransferReviewDto {
  @IsString()
  transferId: string;

  @IsOptional()
  @IsString()
  bookingId?: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsNumber()
  overallRating: number;

  @IsOptional()
  @IsNumber()
  driverRating?: number;

  @IsOptional()
  @IsNumber()
  vehicleRating?: number;

  @IsOptional()
  @IsNumber()
  punctuality?: number;

  @IsOptional()
  @IsNumber()
  cleanliness?: number;

  @IsOptional()
  @IsNumber()
  communication?: number;

  @IsOptional()
  @IsNumber()
  pickupExperience?: number;

  @IsOptional()
  @IsNumber()
  valueForMoney?: number;

  @IsOptional()
  @IsNumber()
  safety?: number;

  @IsOptional()
  @IsNumber()
  comfort?: number;

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

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferReviewImageDto)
  images?: CreateAirportTransferReviewImageDto[];
}
