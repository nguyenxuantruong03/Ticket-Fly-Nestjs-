import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { Currency, Continent } from '@prisma/client';

export class CreateCountryDto {
  // =========================
  // BASIC
  // =========================

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  officialName?: string;

  @IsString()
  slug: string;

  @IsString()
  code: string;

  @IsString()
  iso2: string;

  @IsString()
  iso3: string;

  @IsOptional()
  @IsString()
  phoneCode?: string;

  @IsOptional()
  @IsString()
  capital?: string;

  // =========================
  // LOCATION
  // =========================

  @IsEnum(Continent)
  continent: Continent;

  @IsOptional()
  @IsString()
  timezone?: string;

  @IsOptional()
  @IsEnum(Currency)
  currency?: Currency;

  @IsArray()
  @IsString({ each: true })
  languages: string[];

  // =========================
  // MEDIA
  // =========================

  @IsOptional()
  @IsString()
  flag?: string;

  @IsOptional()
  @IsString()
  thumbnail?: string;

  @IsOptional()
  @IsString()
  coverImage?: string;

  // =========================
  // SEARCH
  // =========================

  @IsArray()
  @IsString({ each: true })
  aliases: string[];

  @IsArray()
  @IsString({ each: true })
  keywords: string[];

  @IsOptional()
  priority?: number;

  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsBoolean()
  searchable?: boolean;

  // =========================
  // STATUS
  // =========================

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
