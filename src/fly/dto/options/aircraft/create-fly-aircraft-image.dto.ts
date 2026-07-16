import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { FlyAircraftImageCategory } from '@prisma/client';

export class CreateFlyAircraftImageDto {
  @IsString()
  url: string;

  @IsEnum(FlyAircraftImageCategory)
  category: FlyAircraftImageCategory;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;

  @IsOptional()
  @IsString()
  alt?: string;
}
