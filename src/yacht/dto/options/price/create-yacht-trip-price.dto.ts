import { IsNumber, IsOptional, IsString } from 'class-validator';


export class CreateYachtTripPriceDto {
  @IsString()
  tripId: string;


  @IsNumber()
  amount: number;

  @IsOptional()
  @IsNumber()
  originalAmount?: number;

  @IsOptional()
  @IsNumber()
  tax?: number;

  @IsOptional()
  @IsNumber()
  serviceFee?: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsNumber()
  finalAmount: number;
}
