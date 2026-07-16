import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateYachtSafetyEquipmentDto {
  @IsString()
  vehicleId: string;

  @IsOptional()
  @IsBoolean()
  lifeJacket?: boolean;

  @IsOptional()
  @IsBoolean()
  lifeRaft?: boolean;

  @IsOptional()
  @IsBoolean()
  fireExtinguisher?: boolean;

  @IsOptional()
  @IsBoolean()
  fireAlarm?: boolean;

  @IsOptional()
  @IsBoolean()
  firstAidKit?: boolean;

  @IsOptional()
  @IsBoolean()
  gps?: boolean;

  @IsOptional()
  @IsBoolean()
  radar?: boolean;

  @IsOptional()
  @IsBoolean()
  emergencyRadio?: boolean;

  @IsOptional()
  @IsBoolean()
  insurance?: boolean;
}
