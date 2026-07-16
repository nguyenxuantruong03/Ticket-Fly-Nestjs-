import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

import { Gender, PassengerDocumentType } from '@prisma/client';

export class CreateBusBookingPassengerDto {
  @IsOptional()
  @IsString()
  nationality?: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsEnum(PassengerDocumentType)
  documentType: PassengerDocumentType;

  @IsString()
  documentNumber: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;
}
