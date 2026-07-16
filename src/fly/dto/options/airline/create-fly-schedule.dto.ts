import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { Weekday } from '@prisma/client';

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
  @IsEnum(Weekday, { each: true })
  operatingDays: Weekday[];

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
