import { IsBoolean, IsOptional } from 'class-validator';

export class CreateCarRentalVehicleFeaturesDto {
  @IsOptional()
  @IsBoolean()
  airConditioner?: boolean;

  @IsOptional()
  @IsBoolean()
  bluetooth?: boolean;

  @IsOptional()
  @IsBoolean()
  gps?: boolean;

  @IsOptional()
  @IsBoolean()
  usbCharger?: boolean;

  @IsOptional()
  @IsBoolean()
  wirelessCharging?: boolean;

  @IsOptional()
  @IsBoolean()
  appleCarPlay?: boolean;

  @IsOptional()
  @IsBoolean()
  androidAuto?: boolean;

  @IsOptional()
  @IsBoolean()
  cruiseControl?: boolean;

  @IsOptional()
  @IsBoolean()
  reverseCamera?: boolean;

  @IsOptional()
  @IsBoolean()
  parkingSensor?: boolean;

  @IsOptional()
  @IsBoolean()
  dashCamera?: boolean;

  @IsOptional()
  @IsBoolean()
  sunroof?: boolean;

  @IsOptional()
  @IsBoolean()
  leatherSeats?: boolean;

  @IsOptional()
  @IsBoolean()
  heatedSeats?: boolean;

  @IsOptional()
  @IsBoolean()
  childSeatAvailable?: boolean;

  @IsOptional()
  @IsBoolean()
  phoneHolder?: boolean;

  @IsOptional()
  @IsBoolean()
  helmetIncluded?: boolean;

  @IsOptional()
  @IsBoolean()
  raincoatIncluded?: boolean;

  @IsOptional()
  @IsBoolean()
  luggageRack?: boolean;

  @IsOptional()
  @IsBoolean()
  skiRack?: boolean;
}
