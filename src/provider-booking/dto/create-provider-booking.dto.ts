import {
  ProviderOperatingStatus,
  ProviderStatus,
  typeServiceBooking,
} from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProviderBookingDto {
  // =====================
  // BASIC INFORMATION
  // =====================

  @IsOptional()
  @IsString()
  officialName?: string;

  @IsString()
  displayName: string;

  @IsOptional()
  @IsString()
  shortName?: string;

  @IsOptional()
  @IsUrl()
  logo?: string;

  @IsOptional()
  @IsUrl()
  banner?: string;

  @IsOptional()
  @IsString()
  subtitle?: string;

  @IsOptional()
  @IsString()
  description?: string;

  // =====================
  // COMPANY INFORMATION
  // =====================

  @IsOptional()
  @IsString()
  companyType?: string;

  @IsOptional()
  @IsString()
  registrationNumber?: string;

  @IsOptional()
  @IsString()
  taxCode?: string;

  @IsOptional()
  @IsInt()
  foundedYear?: number;

  @IsOptional()
  @IsInt()
  employeeCount?: number;

  // =====================
  // CONTACT
  // =====================

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  hotline?: string;

  @IsOptional()
  @IsUrl()
  website?: string;

  // =====================
  // ADDRESS
  // =====================

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  // =====================
  // SOCIAL
  // =====================

  @IsOptional()
  @IsUrl()
  facebook?: string;

  @IsOptional()
  @IsUrl()
  instagram?: string;

  @IsOptional()
  @IsUrl()
  youtube?: string;

  @IsOptional()
  @IsUrl()
  linkedin?: string;

  // =====================
  // TRUST
  // =====================

  @IsOptional()
  @IsBoolean()
  verified?: boolean;

  @IsOptional()
  @IsString()
  licenseNumber?: string;

  @IsString()
  userId: string;

  @IsOptional()
  @IsArray()
  @IsEnum(typeServiceBooking, { each: true })
  service?: typeServiceBooking[];

  @IsOptional()
  @IsEnum(ProviderStatus)
  status?: ProviderStatus;

  @IsOptional()
  @IsEnum(ProviderOperatingStatus)
  operatingStatus?: ProviderOperatingStatus;
}
