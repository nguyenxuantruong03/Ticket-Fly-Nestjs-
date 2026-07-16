import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateFlyCrewQualificationDto {
  @IsString()
  aircraftType: string;

  @IsOptional()
  @IsDateString()
  validUntil?: Date;

  @IsOptional()
  @IsDateString()
  issuedAt?: Date;
}
