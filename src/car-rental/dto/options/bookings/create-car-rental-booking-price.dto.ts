import { IsNumber } from 'class-validator';


export class CreateCarRentalBookingPriceDto {
  @IsNumber()
  rentalPrice: number;

  @IsNumber()
  deliveryFee?: number;

  @IsNumber()
  pickupFee?: number;

  @IsNumber()
  insuranceFee?: number;

  @IsNumber()
  serviceFee?: number;

  @IsNumber()
  tax?: number;

  @IsNumber()
  discount?: number;

  @IsNumber()
  couponDiscount?: number;

  @IsNumber()
  totalPrice: number;

}
