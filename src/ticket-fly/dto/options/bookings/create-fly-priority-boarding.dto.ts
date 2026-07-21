import { IsBoolean, IsEnum, IsNumber, IsOptional, Min } from 'class-validator';


export class CreateFlyPriorityBoardingDto {
  @IsBoolean()
  enabled: boolean;

  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

}
