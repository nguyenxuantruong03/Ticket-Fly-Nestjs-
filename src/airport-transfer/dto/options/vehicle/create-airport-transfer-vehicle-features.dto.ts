import { IsBoolean, IsOptional } from 'class-validator';

export class CreateAirportTransferVehicleFeaturesDto {
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
  bottledWater?: boolean;

  @IsOptional()
  @IsBoolean()
  childSeat?: boolean;

  @IsOptional()
  @IsBoolean()
  wheelchairAccessible?: boolean;

  @IsOptional()
  @IsBoolean()
  petFriendly?: boolean;

  @IsOptional()
  @IsBoolean()
  phoneCharger?: boolean;

  @IsOptional()
  @IsBoolean()
  music?: boolean;

  @IsOptional()
  @IsBoolean()
  gpsTracking?: boolean;
}
