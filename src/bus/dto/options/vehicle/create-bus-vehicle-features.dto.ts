import { IsBoolean, IsOptional } from 'class-validator';

export class CreateBusVehicleFeaturesDto {
  @IsOptional()
  @IsBoolean()
  airConditioner?: boolean;

  @IsOptional()
  @IsBoolean()
  wifi?: boolean;

  @IsOptional()
  @IsBoolean()
  usbCharger?: boolean;

  @IsOptional()
  @IsBoolean()
  powerOutlet?: boolean;

  @IsOptional()
  @IsBoolean()
  readingLight?: boolean;

  @IsOptional()
  @IsBoolean()
  blanket?: boolean;

  @IsOptional()
  @IsBoolean()
  pillow?: boolean;

  @IsOptional()
  @IsBoolean()
  drinkingWater?: boolean;

  @IsOptional()
  @IsBoolean()
  snack?: boolean;

  @IsOptional()
  @IsBoolean()
  toilet?: boolean;

  @IsOptional()
  @IsBoolean()
  tv?: boolean;

  @IsOptional()
  @IsBoolean()
  entertainment?: boolean;

  @IsOptional()
  @IsBoolean()
  gpsTracking?: boolean;

  @IsOptional()
  @IsBoolean()
  recliningSeat?: boolean;

  @IsOptional()
  @IsBoolean()
  massageSeat?: boolean;

  @IsOptional()
  @IsBoolean()
  wheelchairAccessible?: boolean;
}
