import { IsDateString, IsEnum, IsOptional, IsUrl } from 'class-validator';

import { RentalVehicleDocumentType } from '@prisma/client';

export class CreateCarRentalVehicleDocumentDto {
  @IsEnum(RentalVehicleDocumentType)
  type: RentalVehicleDocumentType;

  @IsUrl()
  url: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;
}
