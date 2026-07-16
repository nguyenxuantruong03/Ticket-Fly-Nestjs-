import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateBusVehicleCapacityDto {
  @IsInt()
  totalSeats: number;

  @IsOptional()
  @IsInt()
  sleeperBeds?: number;

  @IsOptional()
  @IsInt()
  cabinRooms?: number;

  @IsOptional()
  @IsNumber()
  luggageCapacityKg?: number;
}
