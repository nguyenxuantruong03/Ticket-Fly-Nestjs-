import { IsString } from 'class-validator';

export class CreateAirportTransferFavoriteDto {
  @IsString()
  transferId: string;
}
