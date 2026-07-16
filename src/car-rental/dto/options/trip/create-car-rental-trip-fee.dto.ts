import { IsNumber, IsOptional } from 'class-validator';

export class CreateCarRentalTripFeeDto {
  @IsOptional()
  @IsNumber()
  airportFee?: number;

  @IsOptional()
  @IsNumber()
  oneWayFee?: number;

  @IsOptional()
  @IsNumber()
  deliveryFee?: number;

  @IsOptional()
  @IsNumber()
  pickupFee?: number;

  @IsOptional()
  @IsNumber()
  dropoffFee?: number;
}
