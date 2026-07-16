import { IsString } from 'class-validator';

export class CreateBusFavoriteDto {
  @IsString()
  busId: string;
}
