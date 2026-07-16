import { IsEnum, IsOptional, IsString } from 'class-validator';

import { FlyBookingStatus } from '@prisma/client';

export class CreateFlyBookingStatusHistoryDto {
  @IsOptional()
  @IsEnum(FlyBookingStatus)
  fromStatus?: FlyBookingStatus;

  @IsEnum(FlyBookingStatus)
  toStatus: FlyBookingStatus;

  @IsOptional()
  @IsString()
  note?: string;
}
