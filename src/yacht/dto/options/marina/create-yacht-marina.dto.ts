import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateYachtMarinaDto {
  // ==========================
  // BASIC
  // ==========================

  @IsString()
  name: string;

  // ==========================
  // ADDRESS
  // ==========================

  @IsString()
  addressId: string;

  // ==========================
  // LOCATION
  // ==========================

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  city?: string;

  // ==========================
  // CONTACT
  // ==========================

  @IsOptional()
  @IsString()
  contactPhone?: string;

  // ==========================
  // OPERATION
  // ==========================

  @IsOptional()
  @IsString()
  operatingHours?: string;
}
