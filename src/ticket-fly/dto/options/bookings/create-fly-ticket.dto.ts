import {
  IsDateString,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CreateFlyBoardingPassDto } from './create-fly-boarding-pass.dto';

export class CreateFlyTicketDto {
  @IsString()
  ticketNumber: string;

  @IsOptional()
  @IsString()
  pnr?: string;

  @IsOptional()
  @IsString()
  qrCode?: string;

  @IsOptional()
  @IsDateString()
  issuedAt?: Date;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFlyBoardingPassDto)
  boardingPass?: CreateFlyBoardingPassDto;
}
