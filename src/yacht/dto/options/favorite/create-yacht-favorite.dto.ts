import { IsString } from 'class-validator';

export class CreateYachtFavoriteDto {
  // ==========================
  // YACHT
  // ==========================

  @IsString()
  yachtId: string;
}
