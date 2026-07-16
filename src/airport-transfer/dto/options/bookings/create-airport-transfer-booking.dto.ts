import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import {
  AirportTransferBookingStatus,
  Currency,
  PaymentStatus,
} from '@prisma/client';

import { CreateAirportTransferBookingPassengerDto } from './create-airport-transfer-booking-passenger.dto';
import { CreateAirportTransferBookingContactDto } from './create-airport-transfer-booking-contact.dto';
import { CreateAirportTransferBookingFlightDto } from './create-airport-transfer-booking-flight.dto';
import { CreateAirportTransferBookingExtraDto } from './create-airport-transfer-booking-extra.dto';
import { CreateAirportTransferBookingTimelineDto } from './create-airport-transfer-booking-timeline.dto';
import { CreateAirportTransferBookingStatusHistoryDto } from './create-airport-transfer-booking-status-history.dto';

export class CreateAirportTransferBookingDto {
  @IsString()
  transferId: string;

  @IsOptional()
  @IsString()
  tripId?: string;

  @IsOptional()
  @IsString()
  vehicleId?: string;

  @IsString()
  userId: string;

  @IsEnum(AirportTransferBookingStatus)
  status: AirportTransferBookingStatus;

  @IsDateString()
  pickupTime: string;

  @IsNumber()
  totalAmount: number;

  @IsEnum(Currency)
  currency: Currency;

  @IsEnum(PaymentStatus)
  paymentStatus: PaymentStatus;

  // --------------------------------------------------------------------------
  // Contact
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferBookingContactDto)
  contact?: CreateAirportTransferBookingContactDto;

  // --------------------------------------------------------------------------
  // Flight
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferBookingFlightDto)
  flight?: CreateAirportTransferBookingFlightDto;

  // --------------------------------------------------------------------------
  // Passengers
  // --------------------------------------------------------------------------

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferBookingPassengerDto)
  passengers: CreateAirportTransferBookingPassengerDto[];

  // --------------------------------------------------------------------------
  // Extras
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferBookingExtraDto)
  extras?: CreateAirportTransferBookingExtraDto[];

  // --------------------------------------------------------------------------
  // Timeline
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferBookingTimelineDto)
  timeline?: CreateAirportTransferBookingTimelineDto[];

  // --------------------------------------------------------------------------
  // Status History
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferBookingStatusHistoryDto)
  histories?: CreateAirportTransferBookingStatusHistoryDto[];
}
