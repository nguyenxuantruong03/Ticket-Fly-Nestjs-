import {
  IsArray,
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateFlyRouteDto } from './options/routes/create-fly-route.dto';
import { CreateFlyPoliciesDto } from './options/policies/create-fly-policies.dto';
import { CreateFlyPriceDto } from './options/price/create-fly-price.dto';
import { CreateFlyNoticeDto } from './options/notice/create-fly-notice.dto';
import { CreateFlyImageDto } from './options/images/create-fly-image.dto';
import { CreateFlyScheduleDto } from './options/airline/create-fly-schedule.dto';
import { CreateFlyTripDto } from './options/trip/create-fly-trip.dto';
import { CreateFlyFavoriteDto } from './options/favorite/create-fly-favorite.dto';

export class CreateFlyDto {
  @IsString()
  providerBookingId: string;

  @IsString()
  airlineId: string;

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
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  searchPriority?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyRouteDto)
  routes?: CreateFlyRouteDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyPoliciesDto)
  policies?: CreateFlyPoliciesDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyPriceDto)
  price?: CreateFlyPriceDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyNoticeDto)
  notice?: CreateFlyNoticeDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyImageDto)
  images?: CreateFlyImageDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyScheduleDto)
  schedule?: CreateFlyScheduleDto[];
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyTripDto)
  trips?: CreateFlyTripDto[];
}
