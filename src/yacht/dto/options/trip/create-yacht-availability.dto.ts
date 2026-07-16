// dto/create-yacht-availability.dto.ts

import {
  IsArray,
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

//
// ======================================================
// Availability Calendar
// ======================================================
//

export class CreateYachtAvailabilityCalendarDto {
  @Type(() => Date)
  @IsDate()
  date: Date;

  @IsBoolean()
  available: boolean;

  @IsOptional()
  @IsBoolean()
  booked?: boolean;

  @IsOptional()
  @IsBoolean()
  stopSell?: boolean;
}

//
// ======================================================
// Yacht Availability
// ======================================================
//

export class CreateYachtAvailabilityDto {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateYachtAvailabilityCalendarDto)
  calendar?: CreateYachtAvailabilityCalendarDto[];
}
