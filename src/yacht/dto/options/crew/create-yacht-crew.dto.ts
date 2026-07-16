import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

import { YachtCrewRole } from '@prisma/client';

export class CreateYachtCrewDto {
  // ==========================
  // BASIC
  // ==========================

  @IsString()
  name: string;

  @IsEnum(YachtCrewRole)
  role: YachtCrewRole;

  // ==========================
  // PROFILE
  // ==========================

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  experienceYears?: number;

  // ==========================
  // LANGUAGES
  // ==========================

  @IsArray()
  @IsString({ each: true })
  languages: string[];
}
