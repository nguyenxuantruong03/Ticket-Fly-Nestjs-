import { WeekDay } from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateFlyScheduleDto {
  @IsString()
  departureTime: string;

  @IsString()
  arrivalTime: string;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsArray()
  @IsEnum(WeekDay, { each: true })
  operatingDays: WeekDay[];

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
