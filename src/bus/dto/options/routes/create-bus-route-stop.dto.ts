import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateBusRouteStopDto {
  @IsOptional()
  @IsString()
  addressId: string;

  @IsOptional()
  @IsDateString()
  arrivalTime?: string;

  @IsOptional()
  @IsDateString()
  departureTime?: string;

  @IsInt()
  stopOrder: number;
}
