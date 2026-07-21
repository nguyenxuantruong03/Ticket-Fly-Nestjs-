import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';


export class CreateFlyInsuranceDto {
  @IsString()
  provider: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  coverage?: string;

  @IsNumber()
  @Min(0)
  amount: number;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
