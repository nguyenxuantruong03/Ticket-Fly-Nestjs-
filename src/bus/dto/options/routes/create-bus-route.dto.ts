import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CreateBusBoardingPointDto } from './create-bus-boarding-point.dto';
import { CreateBusDropoffPointDto } from './create-bus-dropoff-point.dto';
import { CreateBusTripDto } from './create-bus-trip.dto';

export class CreateBusRouteDto {
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
  @IsString()
  code?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusBoardingPointDto)
  boardingPoints?: CreateBusBoardingPointDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusDropoffPointDto)
  dropoffPoints?: CreateBusDropoffPointDto[];

  // --------------------------------------------------------------------------
  // Trips
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusTripDto)
  trips?: CreateBusTripDto[];
}
