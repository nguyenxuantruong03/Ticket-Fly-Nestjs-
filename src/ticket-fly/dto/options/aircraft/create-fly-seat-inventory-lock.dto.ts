import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { InventoryLockStatus } from '@prisma/client';

export class CreateFlySeatInventoryLockDto {
  @IsOptional()
  @IsString()
  tripId?: string;

  @IsOptional()
  @IsString()
  seatId?: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  bookingId?: string;

  @IsDateString()
  startTime: string;

  @IsDateString()
  endTime: string;

  @IsOptional()
  @IsDateString()
  releasedAt?: string;

  @IsDateString()
  expiresAt: string;

  @IsEnum(InventoryLockStatus)
  status: InventoryLockStatus;

  @IsInt()
  quantity: number;
}
