import {
  IsArray,
  IsDateString,
  IsEnum,
  IsOptional,
  ValidateNested,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

import { BusBoardingStatus, BusTripStatus } from '@prisma/client';

import { CreateBusTripPriceDto } from '../price/create-bus-trip-price.dto';
import { CreateBusRouteStopDto } from './create-bus-route-stop.dto';
import { CreateBusSeatAvailabilityDto } from './create-bus-seat-availability.dto';

export class CreateBusTripDto {
  @IsOptional()
  @IsString()
  vehicleId?: string;

  @IsDateString()
  departureTime: string;

  @IsDateString()
  arrivalTime: string;

  @IsOptional()
  @IsEnum(BusTripStatus)
  status?: BusTripStatus;

  @IsEnum(BusBoardingStatus)
  boardingStatus: BusBoardingStatus;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusTripPriceDto)
  price?: CreateBusTripPriceDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusRouteStopDto)
  stops?: CreateBusRouteStopDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusSeatAvailabilityDto)
  seatAvailability?: CreateBusSeatAvailabilityDto[];
}
