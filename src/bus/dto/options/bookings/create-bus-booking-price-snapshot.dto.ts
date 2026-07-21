import { IsNumber } from 'class-validator';


export class CreateBusBookingPriceSnapshotDto {
  @IsNumber()
  subtotal: number;

  @IsNumber()
  taxes: number;

  @IsNumber()
  serviceFee: number;

  @IsNumber()
  discount: number;

  @IsNumber()
  total: number;
}
