import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

import { CarRentalInsuranceBenefitType } from '@prisma/client';

export class CreateCarRentalInsuranceBenefitDto {
  @IsEnum(CarRentalInsuranceBenefitType)
  type: CarRentalInsuranceBenefitType;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  coverageAmount?: number;

  @IsOptional()
  @IsNumber()
  excessAmount?: number;
}
