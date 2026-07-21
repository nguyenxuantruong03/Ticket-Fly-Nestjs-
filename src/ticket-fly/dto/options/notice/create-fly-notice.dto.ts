import { IsOptional, IsString } from 'class-validator';

export class CreateFlyNoticeDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  baggageNotice?: string;

  @IsOptional()
  @IsString()
  checkInNotice?: string;

  @IsOptional()
  @IsString()
  visaNotice?: string;

  @IsOptional()
  @IsString()
  covidNotice?: string;

  @IsOptional()
  @IsString()
  refundNotice?: string;
}
