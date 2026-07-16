import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreateAirportTransferMeetAndGreetDto {
  @IsOptional()
  @IsBoolean()
  available?: boolean;

  @IsOptional()
  @IsBoolean()
  included?: boolean;

  @IsOptional()
  @IsNumber()
  additionalFee?: number;

  @IsOptional()
  @IsBoolean()
  nameBoard?: boolean;

  @IsOptional()
  @IsBoolean()
  airportRepresentative?: boolean;

  @IsOptional()
  @IsBoolean()
  multilingualSupport?: boolean;
}
