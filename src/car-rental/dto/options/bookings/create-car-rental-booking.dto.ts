import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import {
  CarRentalBookingStatus,
  CarRentalBookingType,
  CarRentalPaymentStatus,
} from '@prisma/client';

import { CreateCarRentalBookingPriceDto } from './create-car-rental-booking-price.dto';
import { CreateCarRentalBookingPassengerDto } from './create-car-rental-booking-passenger.dto';
import { CreateCarRentalBookingDriverDto } from './create-car-rental-booking-driver.dto';
import { CreateCarRentalBookingStatusHistoryDto } from './create-car-rental-booking-status-history.dto';
import { CreateCarRentalBookingExtraDto } from '../extra/create-car-rental-booking-extra.dto';
import { CreateCarRentalBookingInsuranceDto } from '../insurance/create-car-rental-booking-insurance.dto';
import { CreateCarRentalLocationDto } from '../trip/create-car-rental-location.dto';

export class CreateCarRentalBookingDto {
  // --------------------------------------------------------------------------
  // Relation
  // --------------------------------------------------------------------------

  @IsString()
  userId: string;

  @IsString()
  rentalId: string;

  @IsOptional()
  @IsString()
  vehicleId?: string;

  // --------------------------------------------------------------------------
  // Booking
  // --------------------------------------------------------------------------

  @IsString()
  bookingCode: string;

  @IsEnum(CarRentalBookingType)
  type: CarRentalBookingType;

  @IsOptional()
  @IsEnum(CarRentalBookingStatus)
  status?: CarRentalBookingStatus;

  @IsOptional()
  @IsEnum(CarRentalPaymentStatus)
  paymentStatus?: CarRentalPaymentStatus;

  // --------------------------------------------------------------------------
  // Rental Time
  // --------------------------------------------------------------------------

  @IsDateString()
  pickupDate: string;

  @IsDateString()
  returnDate: string;

  @IsOptional()
  @IsInt()
  totalHours?: number;

  @IsOptional()
  @IsInt()
  totalDays?: number;

  // --------------------------------------------------------------------------
  // Snapshot Vehicle
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsString()
  vehicleBrand?: string;

  @IsOptional()
  @IsString()
  vehicleModel?: string;

  @IsOptional()
  @IsString()
  vehicleType?: string;

  @IsOptional()
  @IsString()
  vehicleTransmission?: string;

  @IsOptional()
  @IsString()
  vehicleFuelType?: string;

  @IsOptional()
  @IsString()
  licensePlate?: string;

  @IsOptional()
  @IsString()
  year?: string;

  @IsOptional()
  @IsString()
  color?: string;

  // --------------------------------------------------------------------------
  // Driver
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsBoolean()
  driverRequired?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalBookingDriverDto)
  driver?: CreateCarRentalBookingDriverDto;

  // --------------------------------------------------------------------------
  // Price
  // --------------------------------------------------------------------------

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalBookingPriceDto)
  price?: CreateCarRentalBookingPriceDto;

  // --------------------------------------------------------------------------
  // Locations
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalLocationDto)
  locations?: CreateCarRentalLocationDto[];

  // --------------------------------------------------------------------------
  // Passengers
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalBookingPassengerDto)
  passengers?: CreateCarRentalBookingPassengerDto[];

  // --------------------------------------------------------------------------
  // Extras
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalBookingExtraDto)
  extras?: CreateCarRentalBookingExtraDto[];

  // --------------------------------------------------------------------------
  // Insurance
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalBookingInsuranceDto)
  bookingInsurance?: CreateCarRentalBookingInsuranceDto[];

  // --------------------------------------------------------------------------
  // Status History
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalBookingStatusHistoryDto)
  statusHistory?: CreateCarRentalBookingStatusHistoryDto[];

  // --------------------------------------------------------------------------
  // Expire
  // --------------------------------------------------------------------------

  @IsOptional()
  @IsDateString()
  expiresAt?: string;
}
