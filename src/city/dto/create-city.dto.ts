import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { CityStatus } from '@prisma/client';

export class CreateCityDto {
  // =========================
  // BASIC
  // =========================

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  nativeName?: string;

  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  iataCode?: string;

  @IsOptional()
  @IsString()
  subtitle?: string;

  @IsOptional()
  @IsString()
  shortDescription?: string;

  @IsOptional()
  @IsString()
  description?: string;

  // =========================
  // COUNTRY
  // =========================

  @IsString()
  countryId: string;

  @IsOptional()
  @IsString()
  administrativeArea?: string;

  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsBoolean()
  isCapital?: boolean;

  // =========================
  // LOCATION
  // =========================

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsNumber()
  elevation?: number;

  @IsOptional()
  @IsString()
  timezone?: string;

  @IsOptional()
  @IsString()
  utcOffset?: string;

  // =========================
  // SEARCH
  // =========================

  @IsOptional()
  @IsNumber()
  priority?: number;

  @IsOptional()
  @IsNumber()
  displayOrder?: number;

  @IsOptional()
  @IsNumber()
  popularityScore?: number;

  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsBoolean()
  popular?: boolean;

  @IsOptional()
  @IsBoolean()
  searchable?: boolean;

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

  // =========================
  // MEDIA
  // =========================

  @IsOptional()
  @IsString()
  thumbnail?: string;

  @IsOptional()
  @IsString()
  coverImage?: string;

  @IsOptional()
  @IsString()
  bannerImage?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @IsOptional()
  @IsString()
  video?: string;

  // =========================
  // TRAVEL
  // =========================

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  bestMonths?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  rainyMonths?: string[];

  // =========================
  // SEO
  // =========================

  @IsOptional()
  @IsString()
  seoTitle?: string;

  @IsOptional()
  @IsString()
  seoDescription?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  seoKeywords?: string[];

  // =========================
  // STATUS
  // =========================

  @IsOptional()
  @IsBoolean()
  verified?: boolean;

  @IsOptional()
  @IsEnum(CityStatus)
  status?: CityStatus;
}
