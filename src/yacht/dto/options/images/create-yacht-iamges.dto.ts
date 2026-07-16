import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

import { YachtImageCategory } from '@prisma/client';

export class CreateYachtImageDto {
  // =========================
  // RELATION
  // =========================

  @IsOptional()
  @IsString()
  yachtId?: string;

  // =========================
  // BASIC
  // =========================

  @IsString()
  url: string;

  @IsEnum(YachtImageCategory)
  category: YachtImageCategory;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;

  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
