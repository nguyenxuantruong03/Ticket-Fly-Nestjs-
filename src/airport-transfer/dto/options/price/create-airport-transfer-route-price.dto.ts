import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { AirportTransferVehicleType } from '@prisma/client';
import { CreateAirportTransferPriceBreakdownDto } from './create-airport-transfer-price-breakdown.dto';

export class CreateAirportTransferRoutePriceDto {
  @IsString()
  routeId: string;

  @IsEnum(AirportTransferVehicleType)
  vehicleType: AirportTransferVehicleType;

  @IsNumber()
  basePrice: number;

  @IsOptional()
  @IsNumber()
  originalPrice?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAirportTransferPriceBreakdownDto)
  breakdown?: CreateAirportTransferPriceBreakdownDto;
}
