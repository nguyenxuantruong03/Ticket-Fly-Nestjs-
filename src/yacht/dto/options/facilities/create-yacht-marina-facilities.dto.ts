import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateYachtMarinaFacilitiesDto {
  @IsString()
  marinaId: string;

  @IsOptional()
  @IsBoolean()
  fuelStation?: boolean;

  @IsOptional()
  @IsBoolean()
  restaurant?: boolean;

  @IsOptional()
  @IsBoolean()
  cafe?: boolean;

  @IsOptional()
  @IsBoolean()
  parking?: boolean;

  @IsOptional()
  @IsBoolean()
  waitingLounge?: boolean;

  @IsOptional()
  @IsBoolean()
  toilet?: boolean;

  @IsOptional()
  @IsBoolean()
  shower?: boolean;

  @IsOptional()
  @IsBoolean()
  drinkingWater?: boolean;

  @IsOptional()
  @IsBoolean()
  electricity?: boolean;

  @IsOptional()
  @IsBoolean()
  wifi?: boolean;

  @IsOptional()
  @IsBoolean()
  security?: boolean;

  @IsOptional()
  @IsBoolean()
  cctv?: boolean;

  @IsOptional()
  @IsBoolean()
  luggageStorage?: boolean;

  @IsOptional()
  @IsBoolean()
  convenienceStore?: boolean;

  @IsOptional()
  @IsBoolean()
  atm?: boolean;

  @IsOptional()
  @IsBoolean()
  customs?: boolean;

  @IsOptional()
  @IsBoolean()
  immigration?: boolean;
}
