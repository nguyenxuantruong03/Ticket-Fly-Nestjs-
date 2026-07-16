import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateYachtExtraImageDto {
  @IsString()
  url: string;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;

  @IsOptional()
  @IsNumber()
  sortOrder?: number;
}
