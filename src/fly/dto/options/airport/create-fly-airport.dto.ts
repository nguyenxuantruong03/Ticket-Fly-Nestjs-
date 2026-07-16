import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateFlyAirportDto {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsString()
  iataCode: string;

  @IsOptional()
  @IsString()
  icaoCode?: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsOptional()
  @IsInt()
  terminalCount?: number;

  @IsOptional()
  @IsString()
  timezone?: string;

  @IsOptional()
  @IsNumber()
  lat?: number;

  @IsOptional()
  @IsNumber()
  lng?: number;
}
