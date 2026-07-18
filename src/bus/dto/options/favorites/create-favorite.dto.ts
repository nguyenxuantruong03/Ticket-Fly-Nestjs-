import { IsString } from 'class-validator';

export class CreateBusFavoriteDto {
  @IsString()
  userId: string;

  @IsString()
  busId: string;
}
