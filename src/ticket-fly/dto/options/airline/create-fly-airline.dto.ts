import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CreateFlyAirlineImageDto } from './create-fly-airline-image.dto';
import { CreateFlyAirlineRatingDto } from './create-fly-airline-rating.dto';
import { CreateFlyWifiPackageDto } from './create-fly-wifi-package.dto';
import { CreateFlyAddonDto } from './create-fly-addon.dto';

export class CreateFlyAirlineDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  legalName?: string;

  @IsOptional()
  @IsString()
  iataCode?: string;

  @IsOptional()
  @IsString()
  icaoCode?: string;

  @IsOptional()
  @IsString()
  callsign?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsString()
  hotline?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  logo?: string;

  @IsOptional()
  @IsString()
  banner?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyAirlineImageDto)
  @IsArray()
  images?: CreateFlyAirlineImageDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyAirlineRatingDto)
  @IsArray()
  rating?: CreateFlyAirlineRatingDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyWifiPackageDto)
  @IsArray()
  wifiPackage?: CreateFlyWifiPackageDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyAddonDto)
  @IsArray()
  addon?: CreateFlyAddonDto[];
}
