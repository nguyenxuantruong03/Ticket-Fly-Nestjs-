import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
} from 'class-validator';

import { BusRefundType } from '@prisma/client';

export class CreateBusCancellationPolicyDto {
  @IsOptional()
  @IsBoolean()
  refundable?: boolean;

  @IsEnum(BusRefundType)
  refundType: BusRefundType;

  @IsOptional()
  @IsBoolean()
  freeCancellation?: boolean;

  @IsOptional()
  @IsInt()
  freeCancellationBeforeHours?: number;

  @IsOptional()
  @IsNumber()
  cancellationFee?: number;

  @IsOptional()
  @IsNumber()
  noShowFee?: number;
}
