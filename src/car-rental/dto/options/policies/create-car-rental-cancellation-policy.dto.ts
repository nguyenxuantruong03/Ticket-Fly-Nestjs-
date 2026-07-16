import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreateCarRentalCancellationPolicyDto {
  @IsBoolean()
  refundable: boolean;

  @IsBoolean()
  freeCancellation: boolean;

  @IsOptional()
  @IsNumber()
  freeCancellationBeforeHours?: number;

  @IsOptional()
  @IsBoolean()
  partialRefund?: boolean;

  @IsOptional()
  @IsNumber()
  cancellationFee?: number;

  @IsNumber()
  noShowFee: number;
}
