import { IsNumber, IsOptional } from 'class-validator';

export class CreateYachtWaitingPolicyDto {
  @IsOptional()
  @IsNumber()
  freeWaitingMinutes?: number;

  @IsOptional()
  @IsNumber()
  extraWaitingFeePerHour?: number;

  @IsOptional()
  @IsNumber()
  maximumWaitingHours?: number;
}
