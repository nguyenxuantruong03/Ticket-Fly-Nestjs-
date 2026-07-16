import { IsArray, IsEnum } from 'class-validator';

import { RentalDocument } from '@prisma/client';

export class CreateCarRentalRequiredDocumentsDto {
  @IsArray()
  @IsEnum(RentalDocument, { each: true })
  documents: RentalDocument[];
}
