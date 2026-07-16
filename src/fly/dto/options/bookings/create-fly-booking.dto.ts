import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { Currency, FlyBookingStatus } from '@prisma/client';

import { CreateFlyBookingContactDto } from './create-fly-booking-contact.dto';
import { CreateFlyPassengerDto } from './create-fly-passenger.dto';
import { CreateFlyBookingStatusHistoryDto } from './create-fly-booking-status-history.dto';
import { CreateFlyInterlineDto } from '../alliance/create-fly-interline.dto';
import { CreateFlyItineraryDto } from '../alliance/create-fly-itinerary.dto';

export class CreateFlyBookingDto {
  @IsString()
  bookingNumber: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyBookingContactDto)
  contact?: CreateFlyBookingContactDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyPassengerDto)
  passengers: CreateFlyPassengerDto[];

  @IsOptional()
  @IsEnum(FlyBookingStatus)
  status?: FlyBookingStatus;

  @IsNumber()
  @Min(1)
  totalPassengers: number;

  @IsNumber()
  @Min(0)
  totalAmount: number;

  @IsEnum(Currency)
  currency: Currency;

  @IsOptional()
  @IsString()
  note?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyBookingStatusHistoryDto)
  statusHistory?: CreateFlyBookingStatusHistoryDto[];
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyInterlineDto)
  interlines?: CreateFlyInterlineDto[];
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyItineraryDto)
  itineraries?: CreateFlyItineraryDto[];
}
