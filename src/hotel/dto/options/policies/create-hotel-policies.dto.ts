// create-hotel-policies.dto.ts

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

// ======================================================
// HOUSE RULES
// ======================================================

export class CreateHotelHouseRulesDto {
  @IsOptional()
  @IsString()
  quietHoursStart?: string;

  @IsOptional()
  @IsString()
  quietHoursEnd?: string;

  @IsOptional()
  @IsBoolean()
  partiesAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  visitorsAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  alcoholAllowed?: boolean;
}

// ======================================================
// CHECK IN POLICY
// ======================================================

export class CreateHotelCheckInPolicyDto {
  @IsString()
  checkInTime: string;

  @IsString()
  checkOutTime: string;

  @IsOptional()
  @IsBoolean()
  frontDesk24Hours?: boolean;

  @IsOptional()
  @IsBoolean()
  selfCheckIn?: boolean;

  @IsOptional()
  @IsBoolean()
  expressCheckIn?: boolean;

  @IsOptional()
  @IsBoolean()
  expressCheckOut?: boolean;

  @IsOptional()
  @IsString()
  keyCollectionNote?: string;
}

// ======================================================
// GUEST POLICY
// ======================================================

export class CreateHotelGuestPolicyDto {
  @IsOptional()
  @IsInt()
  minimumAge?: number;

  @IsOptional()
  @IsBoolean()
  childrenAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  petsAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  smokingAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  extraBedAvailable?: boolean;

  @IsOptional()
  @IsNumber()
  extraBedFee?: number;
}

// ======================================================
// PAYMENT POLICY
// ======================================================

export class CreateHotelPaymentPolicyDto {
  @IsArray()
  @IsString({ each: true })
  paymentTypes: string[];

  @IsArray()
  @IsString({ each: true })
  acceptedCards: string[];

  @IsOptional()
  @IsBoolean()
  cashAccepted?: boolean;

  @IsOptional()
  @IsBoolean()
  depositRequired?: boolean;

  @IsOptional()
  @IsNumber()
  depositAmount?: number;
}

// ======================================================
// CANCELLATION POLICY
// ======================================================

export class CreateHotelCancellationPolicyDto {
  @IsOptional()
  @IsBoolean()
  freeCancellation?: boolean;

  @IsOptional()
  @IsInt()
  freeCancellationBeforeHours?: number;

  @IsOptional()
  @IsNumber()
  cancellationFee?: number;

  @IsOptional()
  @IsNumber()
  noShowFee?: number;
}

// ======================================================
// BOOKING POLICY
// ======================================================

export class CreateHotelBookingPolicyDto {
  @IsBoolean()
  instantConfirmation: boolean;

  @IsBoolean()
  refundable: boolean;

  @IsOptional()
  @IsBoolean()
  payAtHotel?: boolean;

  @IsOptional()
  @IsBoolean()
  payLater?: boolean;

  @IsOptional()
  @IsBoolean()
  breakfastIncluded?: boolean;

  @IsOptional()
  @IsBoolean()
  mobileVoucher?: boolean;

  @IsOptional()
  @IsBoolean()
  onlineCheckIn?: boolean;

  @IsOptional()
  @IsBoolean()
  onlineCheckOut?: boolean;

  @IsOptional()
  @IsBoolean()
  requiresCreditCardGuarantee?: boolean;

  @IsOptional()
  @IsBoolean()
  requiresDeposit?: boolean;

  @IsOptional()
  @IsBoolean()
  requiresGovernmentId?: boolean;

  @IsOptional()
  @IsBoolean()
  allowsModification?: boolean;
}

// ======================================================
// MAIN DTO
// ======================================================

export class CreateHotelPoliciesDto {
  // Relation với HotelRatePlan

  @IsString()
  ratePlanId: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelCheckInPolicyDto)
  checkIn?: CreateHotelCheckInPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelGuestPolicyDto)
  guest?: CreateHotelGuestPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelPaymentPolicyDto)
  payment?: CreateHotelPaymentPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelCancellationPolicyDto)
  cancellation?: CreateHotelCancellationPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelBookingPolicyDto)
  booking?: CreateHotelBookingPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelHouseRulesDto)
  houseRules?: CreateHotelHouseRulesDto;
}
