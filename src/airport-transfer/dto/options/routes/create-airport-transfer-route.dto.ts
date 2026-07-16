import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  IsArray,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';

import { AirportTransferRouteType } from '@prisma/client';

import { CreateAirportTransferRouteStopDto } from './create-airport-transfer-route-stop.dto';

export class CreateAirportTransferRouteDto {
  @IsString()
  transferId: string;

  @IsEnum(AirportTransferRouteType)
  type: AirportTransferRouteType;

  @IsString()
  departureAddressId: string;

  @IsString()
  arrivalAddressId: string;

  @IsOptional()
  @IsNumber()
  distanceKm?: number;

  @IsOptional()
  @IsInt()
  estimatedDuration?: number;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferRouteStopDto)
  stops?: CreateAirportTransferRouteStopDto[];
}
