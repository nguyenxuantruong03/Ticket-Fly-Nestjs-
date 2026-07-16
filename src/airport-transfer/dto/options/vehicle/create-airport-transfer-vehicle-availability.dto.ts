import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateAirportTransferVehicleAvailabilityDto {
  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsBoolean()
  available: boolean;

  @IsOptional()
  @IsString()
  note?: string;
}
