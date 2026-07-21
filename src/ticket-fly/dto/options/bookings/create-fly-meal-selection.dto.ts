import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateFlyMealSelectionDto {
  @IsString()
  mealId: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;
}
