import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAirportTransferRouteStopDto {
  @IsString()
  addressId: string;

  @IsInt()
  stopOrder: number;

  @IsOptional()
  @IsInt()
  estimatedArrival?: number;

  @IsOptional()
  @IsInt()
  waitingMinutes?: number;
}
