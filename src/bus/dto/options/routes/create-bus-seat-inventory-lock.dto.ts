import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

import { InventoryLockStatus } from '@prisma/client';

export class CreateBusSeatInventoryLockDto {
  @IsOptional()
  @IsString()
  bookingId?: string;

  @IsString()
  vehicleId: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsDateString()
  startTime: string;

  @IsOptional()
  @IsDateString()
  releasedAt?: string;

  @IsOptional()
  @IsEnum(InventoryLockStatus)
  status?: InventoryLockStatus;

  @IsDateString()
  endTime: string;

  @IsInt()
  quantity: number;

  @IsDateString()
  expiresAt: string;
}
