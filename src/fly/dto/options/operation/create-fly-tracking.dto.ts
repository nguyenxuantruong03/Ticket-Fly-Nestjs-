import { IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateFlyTrackingDto {
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsNumber()
  altitudeFt?: number;

  @IsOptional()
  @IsNumber()
  speedKmh?: number;

  @IsOptional()
  @IsNumber()
  heading?: number;

  @IsOptional()
  @IsDateString()
  lastUpdated?: Date;
}
