import { IsString } from 'class-validator';

export class CreateFlyFavoriteDto {
  @IsString()
  flyId: string;
}
