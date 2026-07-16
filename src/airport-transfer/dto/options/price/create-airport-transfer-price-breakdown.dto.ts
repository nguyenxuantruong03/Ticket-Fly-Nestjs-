import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CreateAirportTransferExtraFeeDto } from './create-airport-transfer-extra-fee.dto';

export class CreateAirportTransferPriceBreakdownDto {
  @IsNumber()
  baseFare: number;

  @IsOptional()
  @IsNumber()
  airportFee?: number;

  @IsOptional()
  @IsNumber()
  parkingFee?: number;

  @IsOptional()
  @IsNumber()
  tollFee?: number;

  @IsOptional()
  @IsNumber()
  serviceFee?: number;

  @IsOptional()
  @IsNumber()
  taxes?: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsNumber()
  totalPrice: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  includedItems?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferExtraFeeDto)
  extraFees?: CreateAirportTransferExtraFeeDto[];
}
