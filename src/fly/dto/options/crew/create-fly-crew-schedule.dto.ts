import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';

import { FlyCrewDuty } from '@prisma/client';

export class CreateFlyCrewScheduleDto {
  @IsString()
  crewId: string;

  @IsDateString()
  startTime: Date;

  @IsDateString()
  endTime: Date;

  @IsEnum(FlyCrewDuty)
  duty: FlyCrewDuty;

  @IsOptional()
  @IsString()
  tripId?: string;
}
