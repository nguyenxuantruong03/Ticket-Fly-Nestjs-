import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { ReviewStatus } from '@prisma/client';

import { CreateCarRentalReviewImageDto } from './create-car-rental-review-image.dto';

export class CreateCarRentalReviewDto {
  @IsNumber()
  overallRating: number;

  @IsOptional()
  @IsNumber()
  cleanliness?: number;

  @IsOptional()
  @IsNumber()
  vehicleCondition?: number;

  @IsOptional()
  @IsNumber()
  service?: number;

  @IsOptional()
  @IsNumber()
  pickupExperience?: number;

  @IsOptional()
  @IsNumber()
  valueForMoney?: number;

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
  verified?: boolean;

  @IsOptional()
  @IsEnum(ReviewStatus)
  status?: ReviewStatus;

  @IsOptional()
  @IsBoolean()
  anonymous?: boolean;

  @IsOptional()
  @IsDateString()
  rentalDate?: string;

  @IsOptional()
  @IsNumber()
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
  @Type(() => CreateCarRentalReviewImageDto)
  images?: CreateCarRentalReviewImageDto[];
}
