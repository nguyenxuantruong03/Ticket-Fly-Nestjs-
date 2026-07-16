// create-yacht-booking.dto.ts

import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

import {
  Currency,
  Gender,
  YachtBookingStatus,
  YachtPassengerType,
} from '@prisma/client';
import { CreateYachtBookingStatusHistoryDto } from './create-yacht-booking-status-history.dto';

// ======================================================
// PASSENGER
// ======================================================

export class CreateYachtBookingPassengerDto {
  @IsString()
  fullName: string;

  @IsOptional()
  @IsString()
  nationality?: string;

  @IsOptional()
  @IsString()
  passportNumber?: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: Date;

  @IsEnum(Gender)
  gender: Gender;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  expiresAt: string;

  @IsString()
  identityNumber: string;

  @IsEnum(YachtPassengerType)
  type: YachtPassengerType;
}

// ======================================================
// BOOKING EXTRA
// ======================================================

export class CreateYachtBookingExtraDto {
  @IsOptional()
  @IsString()
  extraId?: string;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsNumber()
  price: number;

  @IsNumber()
  total: number;
}

// ======================================================
// CONTACT
// ======================================================

export class CreateYachtBookingContactDto {
  @IsString()
  fullName: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  note?: string;
}

// ======================================================
// PICKUP
// ======================================================

export class CreateYachtBookingPickupDto {
  @IsOptional()
  @IsBoolean()
  pickupRequired?: boolean;

  @IsOptional()
  @IsString()
  addressId?: string;

  @IsOptional()
  @IsDateString()
  pickupTime?: Date;

  @IsOptional()
  @IsString()
  note?: string;
}

// ======================================================
// MAIN DTO
// ======================================================

export class CreateYachtBookingDto {
  // ==========================
  // USER
  // ==========================

  @IsString()
  userId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtBookingStatusHistoryDto)
  statusHistory: CreateYachtBookingStatusHistoryDto;

  // ==========================
  // PRODUCT
  // ==========================

  @IsString()
  yachtId: string;

  @IsOptional()
  @IsString()
  tripId?: string;

  @IsOptional()
  @IsString()
  packageId?: string;

  // ==========================
  // BOOKING INFO
  // ==========================

  @IsString()
  bookingCode: string;

  @IsDateString()
  startTime: Date;

  @IsOptional()
  @IsDateString()
  endTime?: Date;

  @IsInt()
  guestCount: number;

  @IsOptional()
  @IsEnum(YachtBookingStatus)
  status?: YachtBookingStatus;

  // ==========================
  // PRICE
  // ==========================

  @IsEnum(Currency)
  currency: Currency;

  @IsNumber()
  subtotal: number;

  @IsOptional()
  @IsNumber()
  tax?: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsOptional()
  @IsNumber()
  serviceFee?: number;

  @IsNumber()
  total: number;

  // ==========================
  // RELATIONS
  // ==========================

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtBookingPassengerDto)
  passengers?: CreateYachtBookingPassengerDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtBookingExtraDto)
  extras?: CreateYachtBookingExtraDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtBookingContactDto)
  contact?: CreateYachtBookingContactDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtBookingPickupDto)
  pickup?: CreateYachtBookingPickupDto;
}
