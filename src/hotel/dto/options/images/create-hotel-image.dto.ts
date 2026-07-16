import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

import { HotelImageCategory } from '@prisma/client';

export class CreateHotelImageDto {
  @IsString()
  url: string;

  @IsEnum(HotelImageCategory)
  category: HotelImageCategory;

  @IsInt()
  @Min(0)
  sortOrder: number;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;
}
