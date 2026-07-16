import { IsString } from 'class-validator';

export class CreateHotelInformationDto {
  @IsString()
  addressId: string;

  @IsString()
  providerBookingId: string;
}
