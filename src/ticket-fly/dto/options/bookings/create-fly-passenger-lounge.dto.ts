import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateFlyPassengerLoungeDto {
  @IsString()
  loungeId: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;
}
