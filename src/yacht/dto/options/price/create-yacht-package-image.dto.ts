import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateYachtPackageImageDto {
  @IsString()
  url: string;

  @IsOptional()
  @IsNumber()
  sortOrder?: number;
}
