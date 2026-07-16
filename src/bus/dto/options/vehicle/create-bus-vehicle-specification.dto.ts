import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';

import { BusFuelType } from '@prisma/client';

export class CreateBusVehicleSpecificationDto {
  @IsOptional()
  @IsString()
  engineType?: string;

  @IsOptional()
  @IsString()
  transmission?: string;

  @IsOptional()
  @IsEnum(BusFuelType)
  fuelType?: BusFuelType;

  @IsOptional()
  @IsString()
  suspension?: string;

  @IsOptional()
  @IsBoolean()
  airConditioning?: boolean;

  @IsOptional()
  @IsBoolean()
  wifiAvailable?: boolean;

  @IsOptional()
  @IsBoolean()
  toiletAvailable?: boolean;
}
