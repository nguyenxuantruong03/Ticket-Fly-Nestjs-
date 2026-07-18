import { IsString } from 'class-validator';

export class CreateCarRentalFavoriteDto {
  @IsString()
  userId: string;
  @IsString()
  rentalId: string;
}
