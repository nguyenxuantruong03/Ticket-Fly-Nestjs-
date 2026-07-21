import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { FlyAddonType } from '@prisma/client';

export class CreateFlyAddonDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(FlyAddonType)
  type: FlyAddonType;

  @IsOptional()
  @IsString()
  provider?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsNumber()
  amount: number;


  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
