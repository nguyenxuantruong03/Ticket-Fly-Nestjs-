import { IsNumber, IsOptional } from 'class-validator';

export class CreateFlyAirlineRatingDto {
  @IsOptional()
  @IsNumber()
  overall?: number;

  @IsOptional()
  @IsNumber()
  service?: number;

  @IsOptional()
  @IsNumber()
  comfort?: number;

  @IsOptional()
  @IsNumber()
  food?: number;

  @IsOptional()
  @IsNumber()
  entertainment?: number;

  @IsOptional()
  @IsNumber()
  punctuality?: number;
}
