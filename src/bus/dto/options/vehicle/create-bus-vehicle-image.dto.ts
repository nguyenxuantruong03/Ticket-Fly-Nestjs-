import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

import { BusVehicleImageCategory } from '@prisma/client';

export class CreateBusVehicleImageDto {
  @IsString()
  url: string;

  @IsEnum(BusVehicleImageCategory)
  category: BusVehicleImageCategory;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;

  @IsOptional()
  @IsInt()
  sortOrder?: number;

  @IsOptional()
  @IsString()
  alt?: string;
}
