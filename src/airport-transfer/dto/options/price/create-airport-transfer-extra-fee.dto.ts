import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
  IsOptional,
} from 'class-validator';
import { AirportTransferExtraFeeType } from '@prisma/client';

export class CreateAirportTransferExtraFeeDto {
  @IsEnum(AirportTransferExtraFeeType)
  type: AirportTransferExtraFeeType;

  @IsString()
  name: string;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsBoolean()
  required?: boolean;
}
