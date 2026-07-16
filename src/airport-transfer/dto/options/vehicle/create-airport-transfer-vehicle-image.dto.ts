import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

import { AirportTransferVehicleImageCategory } from '@prisma/client';

export class CreateAirportTransferVehicleImageDto {
  @IsString()
  url: string;

  @IsEnum(AirportTransferVehicleImageCategory)
  category: AirportTransferVehicleImageCategory;

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
