import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

import { Weekday } from '@prisma/client';

export class CreateAirportTransferScheduleDto {
  @IsString()
  transferId: string;

  @IsString()
  departureTime: string;

  @IsArray()
  @IsEnum(Weekday, { each: true })
  operatingDays: Weekday[];

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
