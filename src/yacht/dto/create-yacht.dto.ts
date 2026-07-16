import {
  IsArray,
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateYachtVehicleDto } from './options/vehicle/create-yacht-vehicle.dto';
import { CreateYachtAvailabilityDto } from './options/trip/create-yacht-availability.dto';
import { CreateYachtPriceDto } from './options/price/create-yacht-price.dto';
import { CreateYachtRouteDto } from './options/routes/create-yacht-route.dto';
import { CreateYachtTripDto } from './options/trip/create-yacht-trip.dto';
import { CreateYachtPackageDto } from './options/price/create-yacht-package.dto';
import { CreateYachtPoliciesDto } from './options/policies/create-yacht-policies.dto';
import { CreateYachtNoticeDto } from './options/notice/create-yacht-notice.dto';
import { CreateYachtCrewDto } from './options/crew/create-yacht-crew.dto';
import { CreateYachtRatingSummaryDto } from './options/reviews/create-yacht-rating-summary.dto';
import { CreateYachtImageDto } from './options/images/create-yacht-iamges.dto';
import { CreateYachtExtraDto } from './options/price/create-yacht-extra.dto';

export class CreateYachtDto {
  // =========================
  // RELATION
  // =========================

  @IsString()
  providerBookingId: string;

  @IsOptional()
  @IsString()
  marinaId?: string;

  // =========================
  // BASIC
  // =========================

  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  aliases?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  keywords?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsString()
  searchText?: string;

  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsBoolean()
  searchable?: boolean;

  @IsOptional()
  @IsInt()
  searchPriority?: number;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  // =========================
  // VEHICLE
  // =========================

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtVehicleDto)
  vehicle?: CreateYachtVehicleDto;

  // =========================
  // AVAILABILITY
  // =========================

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtAvailabilityDto)
  availability?: CreateYachtAvailabilityDto;

  // =========================
  // PRICE
  // =========================

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtPriceDto)
  price?: CreateYachtPriceDto;

  // =========================
  // ROUTES
  // =========================

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtRouteDto)
  routes?: CreateYachtRouteDto[];

  // =========================
  // TRIPS
  // =========================

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtTripDto)
  trips?: CreateYachtTripDto[];

  // =========================
  // PACKAGES
  // =========================

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtPackageDto)
  packages?: CreateYachtPackageDto[];

  // =========================
  // EXTRAS
  // =========================

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtExtraDto)
  extras?: CreateYachtExtraDto[];

  // =========================
  // POLICIES
  // =========================

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtPoliciesDto)
  policies?: CreateYachtPoliciesDto;

  // =========================
  // NOTICE
  // =========================

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtNoticeDto)
  notice?: CreateYachtNoticeDto;

  // =========================
  // IMAGES
  // =========================

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtImageDto)
  image?: CreateYachtImageDto[];

  // =========================
  // CREW
  // =========================

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtCrewDto)
  crew?: CreateYachtCrewDto[];

  // =========================
  // RATING SUMMARY
  // =========================

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtRatingSummaryDto)
  ratingSummary?: CreateYachtRatingSummaryDto;
}
