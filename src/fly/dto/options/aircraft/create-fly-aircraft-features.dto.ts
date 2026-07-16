import { IsBoolean, IsOptional } from 'class-validator';

export class CreateFlyAircraftFeaturesDto {
  @IsOptional()
  @IsBoolean()
  wifi?: boolean;

  @IsOptional()
  @IsBoolean()
  powerOutlet?: boolean;

  @IsOptional()
  @IsBoolean()
  usbPort?: boolean;

  @IsOptional()
  @IsBoolean()
  entertainment?: boolean;

  @IsOptional()
  @IsBoolean()
  liveTV?: boolean;

  @IsOptional()
  @IsBoolean()
  recliningSeat?: boolean;

  @IsOptional()
  @IsBoolean()
  lieFlatSeat?: boolean;

  @IsOptional()
  @IsBoolean()
  mealService?: boolean;

  @IsOptional()
  @IsBoolean()
  alcoholService?: boolean;

  @IsOptional()
  @IsBoolean()
  blanket?: boolean;

  @IsOptional()
  @IsBoolean()
  pillow?: boolean;
}
