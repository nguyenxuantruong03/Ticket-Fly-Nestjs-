import { IsBoolean, IsEnum, IsNumber, IsOptional } from 'class-validator';

import { BusLuggageUnit } from '@prisma/client';

export class CreateBusLuggagePolicyDto {
  @IsOptional()
  @IsNumber()
  includedLuggage?: number;

  @IsOptional()
  @IsEnum(BusLuggageUnit)
  unit?: BusLuggageUnit;

  @IsOptional()
  @IsBoolean()
  extraLuggageAllowed?: boolean;

  @IsOptional()
  @IsNumber()
  extraLuggageFee?: number;
}
