import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { FlyAirlineImageCategory } from '@prisma/client';

export class CreateFlyAirlineImageDto {
  @IsString()
  url: string;

  @IsEnum(FlyAirlineImageCategory)
  category: FlyAirlineImageCategory;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;
}
