import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreateCarRentalDamagePolicyDto {
  @IsOptional()
  @IsBoolean()
  insuranceIncluded?: boolean;

  @IsOptional()
  @IsNumber()
  excessAmount?: number;

  @IsOptional()
  @IsBoolean()
  depositRequired?: boolean;
}
