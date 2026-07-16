import {
  IsArray,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { BusBookingStatus, BusPaymentStatus } from '@prisma/client';

import { CreateBusBookingPassengerDto } from './create-bus-booking-passenger.dto';
import { CreateBusBookingSeatDto } from './create-bus-booking-seat.dto';
import { CreateBusBookingStatusHistoryDto } from './create-bus-booking-status-history.dto';
import { CreateBusBookingPriceSnapshotDto } from './create-bus-booking-price-snapshot.dto';

export class CreateBusBookingDto {
  @IsString()
  busId: string;

  @IsString()
  tripId: string;

  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  note?: string;

  @IsOptional()
  @IsString()
  specialRequest?: string;

  @IsEnum(BusBookingStatus)
  status: BusBookingStatus;

  @IsOptional()
  @IsEnum(BusPaymentStatus)
  paymentStatus?: BusPaymentStatus;

  @IsOptional()
  @IsDateString()
  expiresAt?: string;

  // --------------------------------------------------------------------------
  // Passengers
  // --------------------------------------------------------------------------

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusBookingPassengerDto)
  passengers: CreateBusBookingPassengerDto[];

  // --------------------------------------------------------------------------
  // Seats
  // --------------------------------------------------------------------------

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusBookingSeatDto)
  seats: CreateBusBookingSeatDto[];

  // --------------------------------------------------------------------------
  // Price Snapshot
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusBookingPriceSnapshotDto)
  priceSnapshot?: CreateBusBookingPriceSnapshotDto;

  // --------------------------------------------------------------------------
  // Status History
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusBookingStatusHistoryDto)
  statusHistory?: CreateBusBookingStatusHistoryDto[];
}
