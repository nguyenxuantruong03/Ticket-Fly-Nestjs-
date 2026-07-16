import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

import { InventoryLockStatus } from '@prisma/client';

export class CreateCarRentalInventoryLockDto {
  @IsString()
  vehicleId: string;

  @IsOptional()
  @IsString()
  bookingId?: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsDateString()
  startTime: string;

  @IsDateString()
  endTime: string;

  @IsDateString()
  expiresAt: string;

  @IsOptional()
  @IsDateString()
  releasedAt?: string;

  @IsInt()
  quantity: number;

  @IsOptional()
  @IsEnum(InventoryLockStatus)
  status?: InventoryLockStatus;
}
