import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateFlyAircraftSpecificationDto {
  @IsOptional()
  @IsNumber()
  maxRangeKm?: number;

  @IsOptional()
  @IsNumber()
  cruiseSpeed?: number;

  @IsOptional()
  @IsInt()
  maxPassengers?: number;

  @IsOptional()
  @IsString()
  engineType?: string;

  @IsOptional()
  @IsInt()
  engineCount?: number;

  @IsOptional()
  @IsNumber()
  wingspan?: number;

  @IsOptional()
  @IsNumber()
  length?: number;

  @IsOptional()
  @IsNumber()
  height?: number;

  @IsOptional()
  @IsInt()
  firstFlightYear?: number;
}
