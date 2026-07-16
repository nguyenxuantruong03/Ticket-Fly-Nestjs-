import { IsInt, IsNumber, IsString, Min } from 'class-validator';

export class CreateAirportTransferBookingExtraDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(1)
  quantity: number;

  @IsNumber()
  amount: number;
}
