import { IsUrl } from 'class-validator';

export class CreateCarRentalReviewImageDto {
  @IsUrl()
  url: string;
}
