import {
  IsArray,
  IsBoolean,
  IsInt,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateFlyBaggageTransferDto } from './create-fly-baggage-transfer.dto';

export class CreateFlyConnectionDto {
  @IsInt()
  layoverMinutes: number;

  @IsBoolean()
  airportChange: boolean;

  @IsBoolean()
  terminalChange: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyBaggageTransferDto)
  baggageTransfer?: CreateFlyBaggageTransferDto[];
}
