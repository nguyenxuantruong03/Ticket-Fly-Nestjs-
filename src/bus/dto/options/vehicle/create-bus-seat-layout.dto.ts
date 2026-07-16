import { IsInt, IsString } from 'class-validator';

export class CreateBusSeatLayoutDto {
  @IsString()
  name: string;

  @IsInt()
  seatRows: number;

  @IsInt()
  seatColumns: number;
}
