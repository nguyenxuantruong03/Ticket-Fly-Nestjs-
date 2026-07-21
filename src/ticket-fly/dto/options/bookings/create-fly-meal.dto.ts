import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

import { FlyMealType } from '@prisma/client';

export class CreateFlyMealDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(FlyMealType)
  type: FlyMealType;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;


  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
