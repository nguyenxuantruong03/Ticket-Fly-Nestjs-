import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateAirportTransferBlackoutDateDto {
  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  reason?: string;
}
