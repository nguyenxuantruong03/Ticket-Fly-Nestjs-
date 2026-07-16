import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreateYachtBookingPolicyDto {
  @IsBoolean()
  instantConfirmation: boolean;

  @IsOptional()
  @IsNumber()
  advanceBookingHours?: number;

  @IsOptional()
  @IsNumber()
  minimumBookingDuration?: number;

  @IsOptional()
  @IsBoolean()
  modificationAllowed?: boolean;
}
