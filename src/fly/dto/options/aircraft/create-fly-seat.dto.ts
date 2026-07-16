import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { FlySeatType } from '@prisma/client';

export class CreateFlySeatDto {
  @IsString()
  seatNumber: string;

  @IsOptional()
  @IsInt()
  row?: number;

  @IsOptional()
  @IsString()
  column?: string;

  @IsEnum(FlySeatType)
  type: FlySeatType;

  @IsOptional()
  @IsBoolean()
  extraLegroom?: boolean;

  @IsOptional()
  @IsBoolean()
  emergencyExit?: boolean;

  @IsOptional()
  @IsBoolean()
  nearWindow?: boolean;

  @IsOptional()
  @IsBoolean()
  nearAisle?: boolean;

  @IsOptional()
  @IsBoolean()
  nearWing?: boolean;

  @IsOptional()
  @IsBoolean()
  available?: boolean;
}
