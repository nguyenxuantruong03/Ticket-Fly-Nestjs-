import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';

import { FlyDelayReason } from '@prisma/client';

export class CreateFlyDelayDto {
  @IsInt()
  @Min(0)
  minutes: number;

  @IsEnum(FlyDelayReason)
  reason: FlyDelayReason;

  @IsOptional()
  @IsString()
  description?: string;
}
