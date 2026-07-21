import { IsNumber, Min } from 'class-validator';

export class CreateFlyExtraBaggageDto {
  @IsNumber()
  @Min(0)
  weightKg: number;

  @IsNumber()
  @Min(0)
  amount: number;
}
