import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';


import { CreateAirportTransferRoutePriceDto } from './create-airport-transfer-route-price.dto';
import { CreateAirportTransferTripPriceDto } from './create-airport-transfer-trip-price.dto';
import { CreateAirportTransferPriceRuleDto } from './create-airport-transfer-price-rule.dto';

export class CreateAirportTransferPriceDto {
  @IsNumber()
  fromPrice: number;

  @IsOptional()
  @IsNumber()
  toPrice?: number;

  @IsOptional()
  @IsNumber()
  originalFromPrice?: number;

  @IsOptional()
  @IsNumber()
  originalToPrice?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferRoutePriceDto)
  routePrices?: CreateAirportTransferRoutePriceDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferTripPriceDto)
  tripPrices?: CreateAirportTransferTripPriceDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAirportTransferPriceRuleDto)
  rules?: CreateAirportTransferPriceRuleDto[];
}
