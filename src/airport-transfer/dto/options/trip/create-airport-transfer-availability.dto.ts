import {
  IsArray,
  IsBoolean,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CreateAirportTransferAvailabilityCalendarDto } from './create-airport-transfer-availability-calendar.dto';
import { CreateAirportTransferBlackoutDateDto } from './create-airport-transfer-blackout-date.dto';
import { CreateAirportTransferInventoryLockDto } from './create-airport-transfer-inventory-lock.dto';

export class CreateAirportTransferAvailabilityDto {
  @IsOptional()
  @IsBoolean()
  available?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferAvailabilityCalendarDto)
  calendars?: CreateAirportTransferAvailabilityCalendarDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferBlackoutDateDto)
  blackoutDates?: CreateAirportTransferBlackoutDateDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferInventoryLockDto)
  locks?: CreateAirportTransferInventoryLockDto[];
}
