import { IsOptional, IsString } from 'class-validator';

export class CreateFlyDiversionDto {
  @IsString()
  divertedAirportId: string;

  @IsOptional()
  @IsString()
  reason?: string;
}
