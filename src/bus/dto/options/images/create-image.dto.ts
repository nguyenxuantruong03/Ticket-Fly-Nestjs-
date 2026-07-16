import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

import { BusImageCategory } from '@prisma/client';

export class CreateBusImageDto {
  @IsString()
  url: string;

  @IsEnum(BusImageCategory)
  category: BusImageCategory;

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
