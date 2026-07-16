import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

import { CarRentalImageCategory } from '@prisma/client';

export class CreateCarRentalImageDto {
  @IsString()
  url: string;

  @IsEnum(CarRentalImageCategory)
  category: CarRentalImageCategory;

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
