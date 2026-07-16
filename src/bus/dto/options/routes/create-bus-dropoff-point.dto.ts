import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateBusDropoffPointDto {
  @IsString()
  addressId: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  arrivalTime?: string;

  @IsInt()
  order: number;
}
