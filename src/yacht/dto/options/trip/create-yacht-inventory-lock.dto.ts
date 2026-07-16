// dto/create-yacht-inventory-lock.dto.ts

import { IsDate, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

import { Type } from 'class-transformer';

import { InventoryLockStatus } from '@prisma/client';

export class CreateYachtInventoryLockDto {
  // ==========================
  // RELATION
  // ==========================

  @IsOptional()
  @IsString()
  availabilityId?: string;

  @IsString()
  tripId: string;

  @IsString()
  yachtId: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  bookingId?: string;

  // ==========================
  // LOCK INFO
  // ==========================

  @Type(() => Date)
  @IsDate()
  startTime: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  releasedAt?: Date;

  @IsOptional()
  @IsEnum(InventoryLockStatus)
  status?: InventoryLockStatus;

  @Type(() => Date)
  @IsDate()
  endTime: Date;

  @IsInt()
  quantity: number;

  @Type(() => Date)
  @IsDate()
  expiresAt: Date;
}
