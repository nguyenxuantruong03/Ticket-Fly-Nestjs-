import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateFlyPassengerDocumentDto {
  @IsOptional()
  @IsString()
  passportNumber?: string;

  @IsOptional()
  @IsString()
  passportCountry?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: Date;

  @IsOptional()
  @IsString()
  nationalId?: string;
}
