import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAirportTransferTripPriceDto {
  @IsString()
  tripId: string;

  @IsNumber()
  finalPrice: number;

  @IsOptional()
  @IsNumber()
  originalPrice?: number;
}
