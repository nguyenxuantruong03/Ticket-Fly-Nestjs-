import { IsBoolean, IsEnum, IsNumber, IsOptional } from 'class-validator';

import { YachtRefundType } from '@prisma/client';

export class CreateYachtCancellationPolicyDto {
  @IsBoolean()
  refundable: boolean;

  @IsBoolean()
  freeCancellation: boolean;

  @IsOptional()
  @IsNumber()
  freeCancellationBeforeHours?: number;

  @IsEnum(YachtRefundType)
  cancellationType: YachtRefundType;

  @IsOptional()
  @IsNumber()
  refundPercentage?: number;

  @IsOptional()
  @IsNumber()
  cancellationFee?: number;

  @IsOptional()
  @IsNumber()
  noShowFee?: number;
}
