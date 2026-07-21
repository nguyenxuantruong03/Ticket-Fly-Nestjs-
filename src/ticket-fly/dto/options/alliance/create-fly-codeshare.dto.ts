import { IsString } from 'class-validator';

export class CreateFlyCodeshareDto {
  @IsString()
  marketingFlightNumber: string;

  @IsString()
  operatingFlightNumber: string;
}
