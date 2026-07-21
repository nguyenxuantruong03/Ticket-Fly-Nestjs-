import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateFlyBoardingPassDto {
  @IsOptional()
  @IsString()
  gate?: string;

  @IsOptional()
  @IsDateString()
  boardingTime?: Date;

  @IsOptional()
  @IsString()
  boardingGroup?: string;

  @IsOptional()
  @IsString()
  barcode?: string;
}
