import { IsOptional, IsString } from 'class-validator';

export class CreateYachtNoticeDto {
  // ==========================
  // NOTICE
  // ==========================

  @IsOptional()
  @IsString()
  important?: string;

  @IsOptional()
  @IsString()
  beforeBooking?: string;

  @IsOptional()
  @IsString()
  afterBooking?: string;

  @IsOptional()
  @IsString()
  safetyNotice?: string;
}
