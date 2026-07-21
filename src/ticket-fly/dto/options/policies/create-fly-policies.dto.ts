import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

import { FlyRefundType } from '@prisma/client';

// ======================================================
// TRANSIT POLICY
// ======================================================

export class CreateFlyTransitPolicyDto {
  @IsBoolean()
  selfTransfer: boolean;

  @IsBoolean()
  baggageTransfer: boolean;

  @IsBoolean()
  visaRequiredDuringTransit: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  minimumConnectionMinutes?: number;
}

// ======================================================
// CANCELLATION POLICY
// ======================================================

export class CreateFlyCancellationPolicyDto {
  @IsBoolean()
  refundable: boolean;

  @IsEnum(FlyRefundType)
  refundType: FlyRefundType;

  @IsOptional()
  @IsNumber()
  cancellationFee?: number;

  @IsOptional()
  @IsNumber()
  noShowFee?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  freeCancellationBeforeHours?: number;
}

// ======================================================
// CHANGE POLICY
// ======================================================

export class CreateFlyChangePolicyDto {
  @IsBoolean()
  allowed: boolean;

  @IsOptional()
  @IsNumber()
  changeFee?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  maxChanges?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  beforeDepartureHours?: number;
}

// ======================================================
// BAGGAGE POLICY
// ======================================================

export class CreateFlyBaggagePolicyDto {
  @IsOptional()
  @IsNumber()
  cabinIncludedKg?: number;

  @IsOptional()
  @IsNumber()
  checkedIncludedKg?: number;

  @IsBoolean()
  extraAllowed: boolean;

  @IsOptional()
  @IsNumber()
  extraPricePerKg?: number;
}

// ======================================================
// BOARDING POLICY
// ======================================================

export class CreateFlyBoardingPolicyDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  boardingBeforeMinutes?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  gateCloseMinutes?: number;

  @IsOptional()
  @IsBoolean()
  onlineBoardingPass?: boolean;

  @IsOptional()
  @IsBoolean()
  printedBoardingPass?: boolean;
}

// ======================================================
// PASSENGER POLICY
// ======================================================

export class CreateFlyPassengerPolicyDto {
  @IsBoolean()
  infantAllowed: boolean;

  @IsBoolean()
  childAllowed: boolean;

  @IsBoolean()
  petsAllowed: boolean;

  @IsBoolean()
  unaccompaniedMinor: boolean;

  @IsBoolean()
  wheelchairSupport: boolean;

  @IsBoolean()
  pregnantPassengerAllowed: boolean;
}

// ======================================================
// CHECK-IN POLICY
// ======================================================

export class CreateFlyCheckInPolicyDto {
  @IsBoolean()
  onlineCheckIn: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  opensBeforeHours?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  closesBeforeMinutes?: number;

  @IsBoolean()
  airportCheckIn: boolean;

  @IsBoolean()
  mobileBoardingPass: boolean;
}

// ======================================================
// VISA POLICY
// ======================================================

export class CreateFlyVisaPolicyDto {
  @IsOptional()
  @IsBoolean()
  visaRequired?: boolean;

  @IsOptional()
  @IsBoolean()
  passportRequired?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  passportMinimumValidityMonths?: number;

  @IsOptional()
  @IsBoolean()
  healthDocumentsRequired?: boolean;

  @IsOptional()
  @IsString()
  note?: string;
}

// ======================================================
// ROOT DTO
// ======================================================

export class CreateFlyPoliciesDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyCancellationPolicyDto)
  cancellation?: CreateFlyCancellationPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyChangePolicyDto)
  change?: CreateFlyChangePolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyBaggagePolicyDto)
  baggage?: CreateFlyBaggagePolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyBoardingPolicyDto)
  boarding?: CreateFlyBoardingPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyPassengerPolicyDto)
  passenger?: CreateFlyPassengerPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyCheckInPolicyDto)
  checkIn?: CreateFlyCheckInPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyTransitPolicyDto)
  transit?: CreateFlyTransitPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyVisaPolicyDto)
  visa?: CreateFlyVisaPolicyDto;
}
