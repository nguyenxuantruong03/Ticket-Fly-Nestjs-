import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { YachtFeeType } from '@prisma/client';

export class CreateYachtPriceFeeDto {
  @IsEnum(YachtFeeType)
  type: YachtFeeType;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsBoolean()
  mandatory?: boolean;

  @IsOptional()
  @IsString()
  description?: string;
}
