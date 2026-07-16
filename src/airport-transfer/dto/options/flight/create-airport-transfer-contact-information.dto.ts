import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateAirportTransferContactInformationDto {
  @IsOptional()
  @IsString()
  hotline?: string;

  @IsOptional()
  @IsString()
  whatsapp?: string;

  @IsOptional()
  @IsString()
  telegram?: string;

  @IsOptional()
  @IsString()
  emergencyPhone?: string;

  @IsOptional()
  @IsEmail()
  supportEmail?: string;
}
