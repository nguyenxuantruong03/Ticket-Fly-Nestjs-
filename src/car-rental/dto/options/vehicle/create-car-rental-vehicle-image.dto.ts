import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

import {
  RentalVehicleImageCategory,
  RentalVehicleImagePosition,
} from '@prisma/client';

export class CreateCarRentalVehicleImageDto {
  @IsUrl()
  url: string;

  @IsEnum(RentalVehicleImageCategory)
  category: RentalVehicleImageCategory;

  @IsOptional()
  @IsEnum(RentalVehicleImagePosition)
  position?: RentalVehicleImagePosition;

  @IsOptional()
  @IsString()
  alt?: string;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;

  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
