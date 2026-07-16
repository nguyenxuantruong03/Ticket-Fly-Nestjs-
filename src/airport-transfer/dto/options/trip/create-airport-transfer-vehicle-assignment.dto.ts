import { IsOptional, IsString } from 'class-validator';

export class CreateAirportTransferVehicleAssignmentDto {
  @IsString()
  vehicleId: string;

  @IsOptional()
  @IsString()
  driverId?: string;
}
