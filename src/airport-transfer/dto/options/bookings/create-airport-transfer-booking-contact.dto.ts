import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateAirportTransferBookingContactDto {
  @IsString()
  fullName: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  emergencyPhone?: string;
}
