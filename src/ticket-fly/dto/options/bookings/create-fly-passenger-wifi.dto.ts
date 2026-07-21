import { IsString } from 'class-validator';

export class CreateFlyPassengerWifiDto {
  @IsString()
  packageId: string;
}
