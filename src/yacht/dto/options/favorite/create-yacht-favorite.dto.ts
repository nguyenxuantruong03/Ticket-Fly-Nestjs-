import { IsString } from 'class-validator';

export class CreateYachtFavoriteDto {
  @IsString()
  userId: string;

  @IsString()
  yachtId: string;
}
