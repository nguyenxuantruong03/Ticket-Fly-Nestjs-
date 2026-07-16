import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { CreateBusSeatPriceDto } from './create-bus-seat-price.dto';

export class CreateBusTripPriceDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusSeatPriceDto)
  seatPrices: CreateBusSeatPriceDto[];
}
