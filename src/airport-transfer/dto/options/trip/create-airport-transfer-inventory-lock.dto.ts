import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

import { InventoryLockStatus } from '@prisma/client';

export class CreateAirportTransferInventoryLockDto {
  @IsOptional()
  @IsString()
  tripId?: string;

  @IsOptional()
  @IsString()
  vehicleId?: string;

  @IsOptional()
  @IsString()
  bookingId?: string;

  @IsString()
  userId: string;

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
