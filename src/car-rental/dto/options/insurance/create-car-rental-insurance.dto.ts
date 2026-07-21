import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CarRentalInsuranceType } from '@prisma/client';

import { CreateCarRentalInsuranceBenefitDto } from './create-car-rental-insurance-benefit.dto';

export class CreateCarRentalInsuranceDto {
  @IsEnum(CarRentalInsuranceType)
  type: CarRentalInsuranceType;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  pricePerDay?: number;

  @IsOptional()
  @IsNumber()
  fixedPrice?: number;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalInsuranceBenefitDto)
  benefits?: CreateCarRentalInsuranceBenefitDto[];
}
