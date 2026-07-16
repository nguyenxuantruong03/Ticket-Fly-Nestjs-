import { IsBoolean, IsOptional } from 'class-validator';

export class CreateAirportTransferSpecialRequestDto {
  @IsOptional()
  @IsBoolean()
  childSeat?: boolean;

  @IsOptional()
  @IsBoolean()
  babySeat?: boolean;

  @IsOptional()
  @IsBoolean()
  boosterSeat?: boolean;

  @IsOptional()
  @IsBoolean()
  wheelchair?: boolean;

  @IsOptional()
  @IsBoolean()
  petTransport?: boolean;

  @IsOptional()
  @IsBoolean()
  bicycle?: boolean;

  @IsOptional()
  @IsBoolean()
  skiEquipment?: boolean;

  @IsOptional()
  @IsBoolean()
  golfBag?: boolean;

  @IsOptional()
  @IsBoolean()
  additionalStop?: boolean;

  @IsOptional()
  @IsBoolean()
  noteSupported?: boolean;
}
