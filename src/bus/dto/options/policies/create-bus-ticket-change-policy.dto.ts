import { IsEnum, IsInt, IsNumber, IsOptional } from 'class-validator';

import { BusTicketChangeType } from '@prisma/client';

export class CreateBusTicketChangePolicyDto {
  @IsEnum(BusTicketChangeType)
  type: BusTicketChangeType;

  @IsOptional()
  @IsNumber()
  changeFee?: number;

  @IsOptional()
  @IsInt()
  maxChanges?: number;

  @IsOptional()
  @IsInt()
  changeBeforeDepartureHours?: number;
}
