import { IsString } from 'class-validator';

export class CreateFlyFavoriteDto {
  @IsString()
  userId: string;
  @IsString()
  flyId: string;
}
