import { IsBoolean, IsOptional } from 'class-validator';

export class CreateBusPassengerPolicyDto {
  @IsOptional()
  @IsBoolean()
  petsAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  smokingAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  foodAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  alcoholAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  wheelchairAccessible?: boolean;

  @IsOptional()
  @IsBoolean()
  specialAssistanceAvailable?: boolean;
}
