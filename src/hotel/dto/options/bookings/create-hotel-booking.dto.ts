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
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import {
  Currency,
  Gender,
  HotelBookingStatus,
  HotelExtraType,
  ExtraPriceUnit,
  HotelMealType,
  MealPriceUnit,
} from '@prisma/client';
import { CreateHotelReviewDto } from '../reviews/create-hotel-review.dto';

//
// ======================================================
// HOTEL AREA GUIDE
// ======================================================
//

export class CreateHotelAreaGuideDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];
}

//
// ======================================================
// HOTEL BOOKING ROOM PRICE
// ======================================================
//

export class CreateHotelBookingRoomPriceDto {
  @IsNumber()
  originalPrice: number;

  @IsNumber()
  nightlyPrice: number;

  @IsInt()
  @Min(1)
  nights: number;

  @IsNumber()
  subtotal: number;

  @IsOptional()
  @IsNumber()
  tax?: number;

  @IsOptional()
  @IsNumber()
  serviceFee?: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsNumber()
  total: number;

  @IsEnum(Currency)
  currency: Currency;
}

//
// ======================================================
// HOTEL BOOKING ROOM
// ======================================================
//

export class CreateHotelBookingRoomDto {
  @IsOptional()
  @IsString()
  inventoryId?: string;

  @IsString()
  roomName: string;

  @IsOptional()
  @IsString()
  roomTypeId?: string;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsOptional()
  @IsInt()
  adults?: number;

  @IsOptional()
  @IsInt()
  children?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelBookingRoomPriceDto)
  price?: CreateHotelBookingRoomPriceDto;
}

//
// ======================================================
// HOTEL BOOKING PRICE SNAPSHOT
// ======================================================
//

export class CreateHotelBookingPriceSnapshotDto {
  @IsNumber()
  roomAmount: number;

  @IsNumber()
  currencyRate: number;

  @IsOptional()
  @IsNumber()
  taxAmount?: number;

  @IsOptional()
  @IsNumber()
  serviceFee?: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsNumber()
  totalAmount: number;

  @IsOptional()
  @IsNumber()
  depositAmount?: number;

  @IsNumber()
  payableNow: number;

  @IsNumber()
  payableLater: number;

  @IsEnum(Currency)
  currency: Currency;
}

//
// ======================================================
// HOTEL BOOKING GUEST
// ======================================================
//

export class CreateHotelBookingGuestDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  nationality?: string;

  @IsOptional()
  @IsString()
  passportNumber?: string;

  @IsOptional()
  @IsString()
  passportCountry?: string;

  @IsOptional()
  @IsString()
  dateOfBirth?: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsOptional()
  @IsBoolean()
  isMainGuest?: boolean;
}

//
// ======================================================
// HOTEL BOOKING STATUS HISTORY
// ======================================================
//

export class CreateHotelBookingStatusHistoryDto {
  @IsEnum(HotelBookingStatus)
  status: HotelBookingStatus;

  @IsOptional()
  @IsString()
  note?: string;
}

//
// ======================================================
// HOTEL EXTRA PRICE
// ======================================================
//

export class CreateHotelExtraPriceDto {
  @IsNumber()
  price: number;

  @IsEnum(Currency)
  currency: Currency;

  @IsEnum(ExtraPriceUnit)
  unit: ExtraPriceUnit;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

//
// ======================================================
// HOTEL EXTRA
// ======================================================
//

export class CreateHotelExtraDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(HotelExtraType)
  type: HotelExtraType;

  @IsOptional()
  @IsBoolean()
  required?: boolean;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelExtraPriceDto)
  prices?: CreateHotelExtraPriceDto[];

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

//
// ======================================================
// HOTEL BOOKING EXTRA
// ======================================================
//

export class CreateHotelBookingExtraDto {
  @IsOptional()
  @IsString()
  extraId?: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsNumber()
  price: number;

  @IsNumber()
  total: number;

  @IsEnum(Currency)
  currency: Currency;
}

//
// ======================================================
// HOTEL MEAL PRICE
// ======================================================
//

export class CreateHotelMealPriceDto {
  @IsNumber()
  price: number;

  @IsEnum(Currency)
  currency: Currency;

  @IsEnum(MealPriceUnit)
  unit: MealPriceUnit;
}

//
// ======================================================
// HOTEL MEAL OPTION
// ======================================================
//

export class CreateHotelMealOptionDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(HotelMealType)
  type: HotelMealType;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelMealPriceDto)
  prices?: CreateHotelMealPriceDto[];

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

//
// ======================================================
// HOTEL BOOKING MEAL
// ======================================================
//

export class CreateHotelBookingMealDto {
  @IsOptional()
  @IsString()
  mealId?: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsNumber()
  price: number;

  @IsNumber()
  total: number;

  @IsEnum(Currency)
  currency: Currency;
}

//
// ======================================================
// HOTEL BOOKING
// ======================================================
//

export class CreateHotelBookingDto {
  @IsOptional()
  @IsEnum(HotelBookingStatus)
  status?: HotelBookingStatus;

  @IsDateString()
  checkIn: string;

  @IsDateString()
  checkOut: string;

  @IsInt()
  totalRooms: number;

  @ValidateNested({ each: true })
  @Type(() => CreateHotelBookingRoomDto)
  rooms: CreateHotelBookingRoomDto[];

  @ValidateNested({ each: true })
  @Type(() => CreateHotelBookingGuestDto)
  guests: CreateHotelBookingGuestDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelBookingPriceSnapshotDto)
  price?: CreateHotelBookingPriceSnapshotDto;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelBookingStatusHistoryDto)
  statusHistory?: CreateHotelBookingStatusHistoryDto[];

  @IsOptional()
  @IsString()
  specialRequest?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelBookingExtraDto)
  extras?: CreateHotelBookingExtraDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelBookingMealDto)
  meals?: CreateHotelBookingMealDto[];

  @IsOptional()
  @IsDateString()
  expiresAt?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelReviewDto)
  reviews?: CreateHotelReviewDto[];
}
