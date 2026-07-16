import { IsEnum, IsOptional, IsString } from 'class-validator';

import { PickupInstructionType } from '@prisma/client';

export class CreateCarRentalPickupInstructionDto {
  @IsEnum(PickupInstructionType)
  type: PickupInstructionType;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  contactPhone?: string;
}
