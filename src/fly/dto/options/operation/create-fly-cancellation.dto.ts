import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateFlyCancellationDto {
  @IsOptional()
  @IsString()
  reason?: string;

  @IsDateString()
  cancelledAt: Date;

  @IsOptional()
  @IsBoolean()
  compensationRequired?: boolean;
}
