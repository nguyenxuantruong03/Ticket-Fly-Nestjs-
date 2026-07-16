import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';

import { RentalLocationType } from '@prisma/client';

export class CreateCarRentalLocationDto {
  @IsEnum(RentalLocationType)
  type: RentalLocationType;

  @IsString()
  name: string;

  @IsString()
  addressId: string;

  @IsOptional()
  @IsBoolean()
  available?: boolean;
}
