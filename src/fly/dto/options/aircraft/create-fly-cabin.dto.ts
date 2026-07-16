import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { FlyCabinClass } from '@prisma/client';
import { CreateFlySeatDto } from './create-fly-seat.dto';

export class CreateFlyCabinDto {
  @IsEnum(FlyCabinClass)
  class: FlyCabinClass;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  rows?: number;

  @IsInt()
  totalSeats: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlySeatDto)
  seats?: CreateFlySeatDto[];
}
