import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { FlyCrewRole, Gender } from '@prisma/client';

import { CreateFlyCrewAssignmentDto } from './create-fly-crew-assignment.dto';
import { CreateFlyCrewQualificationDto } from './create-fly-crew-qualification.dto';
import { CreateFlyCrewScheduleDto } from './create-fly-crew-schedule.dto';

export class CreateFlyCrewDto {
  @IsString()
  airlineId: string;

  @IsOptional()
  @IsString()
  employeeNumber?: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsDateString()
  birthDate?: Date;

  @IsOptional()
  @IsString()
  nationality?: string;

  @IsEnum(FlyCrewRole)
  role: FlyCrewRole;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyCrewQualificationDto)
  qualifications?: CreateFlyCrewQualificationDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyCrewAssignmentDto)
  assignments?: CreateFlyCrewAssignmentDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyCrewScheduleDto)
  crewSchedule?: CreateFlyCrewScheduleDto[];
}
