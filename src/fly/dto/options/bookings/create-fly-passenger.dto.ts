import {
  IsArray,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { Gender, PassengerTitle, PassengerType } from '@prisma/client';

import { CreateFlyPassengerDocumentDto } from './create-fly-passenger-document.dto';
import { CreateFlySeatAssignmentDto } from './create-fly-seat-assignment.dto';
import { CreateFlyMealSelectionDto } from './create-fly-meal-selection.dto';
import { CreateFlyExtraBaggageDto } from './create-fly-extra-baggage.dto';
import { CreateFlyPassengerWifiDto } from './create-fly-passenger-wifi.dto';
import { CreateFlyPassengerLoungeDto } from './create-fly-passenger-lounge.dto';
import { CreateFlyFastTrackDto } from './create-fly-fast-track.dto';
import { CreateFlyPassengerInsuranceDto } from './create-fly-passenger-insurance.dto';
import { CreateFlyTicketDto } from './create-fly-ticket.dto';
import { CreateFlyPriorityBoardingDto } from './create-fly-priority-boarding.dto';
import { CreateFlyPassengerAddonDto } from '../airline/create-fly-passenger-addon.dto';

export class CreateFlyPassengerDto {
  @IsEnum(PassengerType)
  type: PassengerType;

  @IsOptional()
  @IsEnum(PassengerTitle)
  title?: PassengerTitle;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsDateString()
  birthday?: Date;

  @IsOptional()
  @IsString()
  nationality?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyPassengerDocumentDto)
  document?: CreateFlyPassengerDocumentDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlySeatAssignmentDto)
  seat?: CreateFlySeatAssignmentDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyMealSelectionDto)
  meal?: CreateFlyMealSelectionDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyExtraBaggageDto)
  baggage?: CreateFlyExtraBaggageDto[];
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyPassengerWifiDto)
  wifi?: CreateFlyPassengerWifiDto[];
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyPriorityBoardingDto)
  priorityBoarding: CreateFlyPriorityBoardingDto[];
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyPassengerLoungeDto)
  lounge?: CreateFlyPassengerLoungeDto[];
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyFastTrackDto)
  fastTrack?: CreateFlyFastTrackDto[];
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyPassengerInsuranceDto)
  passengerInsurance?: CreateFlyPassengerInsuranceDto[];
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyPassengerAddonDto)
  passengerAddon?: CreateFlyPassengerAddonDto[];
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyTicketDto)
  tickets?: CreateFlyTicketDto[];
}
