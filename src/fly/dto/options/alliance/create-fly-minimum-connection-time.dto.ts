import { IsInt } from 'class-validator';

export class CreateFlyMinimumConnectionTimeDto {
  @IsInt()
  domesticMinutes: number;

  @IsInt()
  internationalMinutes: number;
}
