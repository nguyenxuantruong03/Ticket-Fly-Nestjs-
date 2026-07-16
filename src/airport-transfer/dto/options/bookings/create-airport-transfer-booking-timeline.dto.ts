import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateAirportTransferBookingTimelineDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  eventTime: string;
}
