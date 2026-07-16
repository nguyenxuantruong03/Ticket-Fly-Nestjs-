import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { FuelPolicy } from '@prisma/client';

import { CreateCarRentalMileagePolicyDto } from './create-car-rental-mileage-policy.dto';
import { CreateCarRentalCancellationPolicyDto } from './create-car-rental-cancellation-policy.dto';
import { CreateCarRentalRulesDto } from './create-car-rental-rules.dto';
import { CreateCarRentalDamagePolicyDto } from './create-car-rental-damage-policy.dto';
import { CreateCarRentalRequiredDocumentsDto } from './create-car-rental-required-documents.dto';

export class CreateCarRentalPoliciesDto {
  @IsOptional()
  @IsInt()
  minimumDriverAge?: number;

  @IsOptional()
  @IsInt()
  minimumLicenseYears?: number;

  @IsOptional()
  @IsNumber()
  depositAmount?: number;

  @IsOptional()
  @IsEnum(FuelPolicy)
  fuelPolicy?: FuelPolicy;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalMileagePolicyDto)
  mileage?: CreateCarRentalMileagePolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalCancellationPolicyDto)
  cancellation?: CreateCarRentalCancellationPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalRulesDto)
  rules?: CreateCarRentalRulesDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalRequiredDocumentsDto)
  requiredDocuments?: CreateCarRentalRequiredDocumentsDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalDamagePolicyDto)
  damagePolicy?: CreateCarRentalDamagePolicyDto;
}
