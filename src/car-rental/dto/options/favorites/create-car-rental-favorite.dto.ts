import { IsString } from 'class-validator';

export class CreateCarRentalFavoriteDto {
  @IsString()
  rentalId: string;
}
