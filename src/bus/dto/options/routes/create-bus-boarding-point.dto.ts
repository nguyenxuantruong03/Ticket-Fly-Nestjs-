import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateBusBoardingPointDto {
  @IsString()
  addressId: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  departureTime: string;

  @IsInt()
  order: number;
}
