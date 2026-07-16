import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';

import { FlyTimelineType } from '@prisma/client';

export class CreateFlyOperationTimelineDto {
  @IsEnum(FlyTimelineType)
  type: FlyTimelineType;

  @IsDateString()
  eventTime: Date;

  @IsOptional()
  @IsString()
  note?: string;
}
