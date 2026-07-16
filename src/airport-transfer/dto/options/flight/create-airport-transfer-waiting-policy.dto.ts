import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateAirportTransferWaitingPolicyDto {
  @IsOptional()
  @IsInt()
  freeWaitingMinutes?: number;

  @IsOptional()
  @IsInt()
  airportFreeWaitingMinutes?: number;

  @IsOptional()
  @IsNumber()
  waitingFeePerHour?: number;

  @IsOptional()
  @IsInt()
  maximumWaitingMinutes?: number;
}
