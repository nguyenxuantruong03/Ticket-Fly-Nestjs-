import { IsEnum } from 'class-validator';

import { FlyOperationStatus } from '@prisma/client';

export class CreateFlyTripHistoryDto {
  @IsEnum(FlyOperationStatus)
  oldStatus: FlyOperationStatus;

  @IsEnum(FlyOperationStatus)
  newStatus: FlyOperationStatus;
}
