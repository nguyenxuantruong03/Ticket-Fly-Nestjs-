import {
  IsArray,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { FlyOperationStatus } from '@prisma/client';

import { CreateFlyDelayDto } from './create-fly-delay.dto';
import { CreateFlyOperationTimelineDto } from './create-fly-operation-timeline.dto';

export class CreateFlyOperationDto {
  @IsEnum(FlyOperationStatus)
  status: FlyOperationStatus;

  @IsOptional()
  @IsString()
  departureTerminal?: string;

  @IsOptional()
  @IsString()
  departureGate?: string;

  @IsOptional()
  @IsString()
  arrivalTerminal?: string;

  @IsOptional()
  @IsString()
  arrivalGate?: string;

  @IsOptional()
  @IsString()
  baggageClaim?: string;

  @IsOptional()
  @IsString()
  checkInCounter?: string;

  @IsOptional()
  @IsDateString()
  boardingTime?: Date;

  @IsOptional()
  @IsDateString()
  boardingEndTime?: Date;

  @IsOptional()
  @IsDateString()
  gateOpenTime?: Date;

  @IsOptional()
  @IsDateString()
  gateCloseTime?: Date;

  @IsOptional()
  @IsDateString()
  actualDepartureTime?: Date;

  @IsOptional()
  @IsDateString()
  actualArrivalTime?: Date;

  @IsOptional()
  @IsDateString()
  estimatedDepartureTime?: Date;

  @IsOptional()
  @IsDateString()
  estimatedArrivalTime?: Date;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyOperationTimelineDto)
  timeline?: CreateFlyOperationTimelineDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyDelayDto)
  delays?: CreateFlyDelayDto[];
}
