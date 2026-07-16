import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateYachtVehicleFacilitiesDto {
  @IsString()
  vehicleId: string;

  @IsOptional()
  @IsBoolean()
  wifi?: boolean;

  @IsOptional()
  @IsBoolean()
  bluetooth?: boolean;

  @IsOptional()
  @IsBoolean()
  tv?: boolean;

  @IsOptional()
  @IsBoolean()
  soundSystem?: boolean;

  @IsOptional()
  @IsBoolean()
  kitchen?: boolean;

  @IsOptional()
  @IsBoolean()
  refrigerator?: boolean;

  @IsOptional()
  @IsBoolean()
  coffeeMachine?: boolean;

  @IsOptional()
  @IsBoolean()
  bar?: boolean;

  @IsOptional()
  @IsBoolean()
  jacuzzi?: boolean;

  @IsOptional()
  @IsBoolean()
  swimmingPlatform?: boolean;

  @IsOptional()
  @IsBoolean()
  sunDeck?: boolean;

  @IsOptional()
  @IsBoolean()
  airConditioning?: boolean;

  @IsOptional()
  @IsBoolean()
  heating?: boolean;

  @IsOptional()
  @IsBoolean()
  shower?: boolean;

  @IsOptional()
  @IsBoolean()
  toilet?: boolean;

  @IsOptional()
  @IsBoolean()
  fishingEquipment?: boolean;

  @IsOptional()
  @IsBoolean()
  snorkelingEquipment?: boolean;

  @IsOptional()
  @IsBoolean()
  divingEquipment?: boolean;
}
