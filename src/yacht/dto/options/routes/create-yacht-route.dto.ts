// dto/create-yacht-route.dto.ts

import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

//
// ======================================================
// Yacht Route Stop
// ======================================================
//

export class CreateYachtRouteStopDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  addressId?: string;

  @IsOptional()
  @IsInt()
  stopDurationMinutes?: number;

  @IsInt()
  order: number;
}

//
// ======================================================
// Yacht Route
// ======================================================
//

export class CreateYachtRouteDto {
  @IsString()
  departureMarinaId: string;

  @IsString()
  destinationMarinaId: string;

  // ==========================
  // DESTINATION
  // ==========================

  @IsString()
  destinationName: string;

  // ==========================
  // DISTANCE / DURATION
  // ==========================

  @IsOptional()
  @IsNumber()
  distanceNm?: number;

  @IsOptional()
  @IsInt()
  durationMinutes?: number;

  // ==========================
  // STOPS
  // ==========================

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtRouteStopDto)
  stops?: CreateYachtRouteStopDto[];

  // ==========================
  // STATUS
  // ==========================

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
