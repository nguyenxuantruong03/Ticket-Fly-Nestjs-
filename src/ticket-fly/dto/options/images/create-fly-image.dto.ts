import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

import { FlyImageCategory } from '@prisma/client';

export class CreateFlyImageDto {
  @IsString()
  url: string;

  @IsEnum(FlyImageCategory)
  category: FlyImageCategory;

  @IsOptional()
  @IsString()
  alt?: string;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;
}
