import { IsEnum, IsString } from 'class-validator';

import { FlyCrewDuty } from '@prisma/client';

export class CreateFlyCrewAssignmentDto {
  @IsString()
  crewId: string;

  @IsString()
  tripId: string;

  @IsString()
  inventoryId: string;

  @IsEnum(FlyCrewDuty)
  duty: FlyCrewDuty;
}
