import { IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateFlyBookingContactDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  countryCode?: string;
}
