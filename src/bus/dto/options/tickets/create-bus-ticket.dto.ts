import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { BusTicketStatus } from '@prisma/client';

import { CreateBusBoardingPassDto } from './create-bus-boarding-pass.dto';

export class CreateBusTicketDto {
  @IsString()
  bookingId: string;

  @IsString()
  ticketNumber: string;

  @IsOptional()
  @IsDateString()
  issuedAt?: string;

  @IsEnum(BusTicketStatus)
  status: BusTicketStatus;

  @IsOptional()
  @IsString()
  seatNumber?: string;

  @IsOptional()
  @IsString()
  qrCode?: string;

  @IsOptional()
  @IsString()
  barcode?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusBoardingPassDto)
  boardingPass?: CreateBusBoardingPassDto;
}
