import { IsString } from 'class-validator';

export class CreateAirportTransferFavoriteDto {
  @IsString()
  userId: string;
  @IsString()
  transferId: string;
}
