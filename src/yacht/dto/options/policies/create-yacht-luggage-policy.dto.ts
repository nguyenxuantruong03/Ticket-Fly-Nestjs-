import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateYachtLuggagePolicyDto {
  @IsBoolean()
  allowed: boolean;

  @IsOptional()
  @IsNumber()
  maxWeightKg?: number;

  @IsOptional()
  @IsNumber()
  maxPieces?: number;

  @IsOptional()
  @IsBoolean()
  oversizedAllowed?: boolean;

  @IsOptional()
  @IsString()
  note?: string;
}
