import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CreateFlyAircraftSpecificationDto } from './create-fly-aircraft-specification.dto';
import { CreateFlyAircraftFeaturesDto } from './create-fly-aircraft-features.dto';
import { CreateFlyAircraftImageDto } from './create-fly-aircraft-image.dto';
import { CreateFlyCabinDto } from './create-fly-cabin.dto';
import { CreateFlySeatMapDto } from './create-fly-seat-map.dto';

export class CreateFlyAircraftDto {
  @IsString()
  airlineId: string;

  @IsOptional()
  @IsString()
  manufacturer?: string;

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  registrationNumber?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyAircraftSpecificationDto)
  specification?: CreateFlyAircraftSpecificationDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyAircraftFeaturesDto)
  features?: CreateFlyAircraftFeaturesDto;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyCabinDto)
  @IsArray()
  cabins?: CreateFlyCabinDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyAircraftImageDto)
  @IsArray()
  images?: CreateFlyAircraftImageDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlySeatMapDto)
  seatMap?: CreateFlySeatMapDto;
}
