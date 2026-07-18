import { IsInt, IsOptional, IsString } from 'class-validator';

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

  @IsOptional()
  @IsInt()
  terminalCount?: number;
}
