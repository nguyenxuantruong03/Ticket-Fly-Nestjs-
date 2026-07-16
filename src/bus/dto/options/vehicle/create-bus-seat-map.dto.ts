import { IsObject, IsOptional, IsString } from 'class-validator';

export class CreateBusSeatMapDto {
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  svgUrl?: string;

  @IsOptional()
  @IsObject()
  jsonLayout?: Record<string, any>;
}
