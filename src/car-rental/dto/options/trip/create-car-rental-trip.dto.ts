import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { CreateCarRentalLocationDto } from './create-car-rental-location.dto';
import { CreateCarRentalScheduleDto } from './create-car-rental-schedule.dto';
import { CreateCarRentalTripFeeDto } from './create-car-rental-trip-fee.dto';

export class CreateCarRentalTripDto {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarRentalLocationDto)
  locations?: CreateCarRentalLocationDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalScheduleDto)
  schedule?: CreateCarRentalScheduleDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCarRentalTripFeeDto)
  tripFee?: CreateCarRentalTripFeeDto;
}
