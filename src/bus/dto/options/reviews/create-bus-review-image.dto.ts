import { IsString } from 'class-validator';

export class CreateBusReviewImageDto {
  @IsString()
  url: string;
}
