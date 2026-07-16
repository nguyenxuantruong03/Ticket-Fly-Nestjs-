import { IsBoolean, IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateAirportTransferLuggagePolicyDto {
  @IsOptional()
  @IsInt()
  checkedBaggage?: number;

  @IsOptional()
  @IsInt()
  cabinBaggage?: number;

  @IsOptional()
  @IsBoolean()
  oversizedAllowed?: boolean;

  @IsOptional()
  @IsNumber()
  oversizedFee?: number;

  @IsOptional()
  @IsBoolean()
  sportsEquipmentAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  strollerAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  wheelchairAllowed?: boolean;
}
