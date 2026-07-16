import { YachtBookingStatus } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateYachtBookingStatusHistoryDto {
  @IsString()
  bookingId: string;

  @IsOptional()
  @IsEnum(YachtBookingStatus)
  fromStatus?: YachtBookingStatus;

  @IsEnum(YachtBookingStatus)
  toStatus: YachtBookingStatus;

  @IsOptional()
  @IsString()
  note?: string;
}
