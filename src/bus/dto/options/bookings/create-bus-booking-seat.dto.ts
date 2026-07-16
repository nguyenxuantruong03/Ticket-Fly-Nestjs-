import { IsNumber, IsString } from 'class-validator';

export class CreateBusBookingSeatDto {
  @IsString()
  seatId: string;

  @IsNumber()
  price: number;
}
