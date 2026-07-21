import { WeekDay } from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';


export class CreateAirportTransferScheduleDto {
  @IsString()
  transferId: string;

  @IsString()
  departureTime: string;

  @IsArray()
  @IsEnum(WeekDay, { each: true })
  operatingDays: WeekDay[];

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
