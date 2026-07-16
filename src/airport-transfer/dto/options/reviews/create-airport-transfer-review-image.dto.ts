import { IsString } from 'class-validator';

export class CreateAirportTransferReviewImageDto {
  @IsString()
  url: string;
}
