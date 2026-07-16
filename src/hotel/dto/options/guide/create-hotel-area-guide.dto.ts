import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateHotelAreaGuideDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}
