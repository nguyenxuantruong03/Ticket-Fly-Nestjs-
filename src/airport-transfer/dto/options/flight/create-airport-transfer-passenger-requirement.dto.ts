import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class CreateAirportTransferPassengerRequirementDto {
  @IsOptional()
  @IsBoolean()
  passportRequired?: boolean;

  @IsOptional()
  @IsBoolean()
  phoneRequired?: boolean;

  @IsOptional()
  @IsBoolean()
  emailRequired?: boolean;

  @IsOptional()
  @IsInt()
  minimumPassenger?: number;

  @IsOptional()
  @IsInt()
  maximumPassenger?: number;
}
