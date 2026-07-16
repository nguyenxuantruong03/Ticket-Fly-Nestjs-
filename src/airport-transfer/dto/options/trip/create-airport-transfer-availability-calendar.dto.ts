import { IsBoolean, IsDateString, IsInt, IsOptional } from 'class-validator';

export class CreateAirportTransferAvailabilityCalendarDto {
  @IsDateString()
  date: string;

  @IsBoolean()
  available: boolean;

  @IsInt()
  totalVehicles: number;

  @IsInt()
  remainingVehicles: number;

  @IsOptional()
  @IsBoolean()
  stopSell?: boolean;

  @IsOptional()
  @IsInt()
  minimumNoticeMinutes?: number;
}
