import { IsBoolean, IsEnum, IsNumber, IsOptional, Min } from 'class-validator';


export class CreateFlyFastTrackDto {
  @IsBoolean()
  enabled: boolean;

  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

}
