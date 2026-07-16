import { IsBoolean, IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateCarRentalRulesDto {
  @IsOptional()
  @IsInt()
  minimumAge?: number;

  @IsOptional()
  @IsInt()
  maximumAge?: number;

  @IsOptional()
  @IsBoolean()
  requiresDriverLicense?: boolean;

  @IsOptional()
  @IsBoolean()
  requiresInternationalLicense?: boolean;

  @IsOptional()
  @IsInt()
  minimumDrivingExperienceYears?: number;

  @IsOptional()
  @IsBoolean()
  smokingAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  petsAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  offRoadAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  crossBorderAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  additionalDriverAllowed?: boolean;

  @IsOptional()
  @IsNumber()
  lateReturnFeePerHour?: number;
}
