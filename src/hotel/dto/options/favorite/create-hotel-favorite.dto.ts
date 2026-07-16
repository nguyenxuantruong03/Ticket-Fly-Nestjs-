import { IsString } from 'class-validator';

export class CreateHotelFavoriteDto {
  @IsString()
  userId: string;
  @IsString()
  hotelId: string;
}
