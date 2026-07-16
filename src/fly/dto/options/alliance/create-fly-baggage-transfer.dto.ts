import { IsBoolean } from 'class-validator';

export class CreateFlyBaggageTransferDto {
  @IsBoolean()
  automaticTransfer: boolean;

  @IsBoolean()
  customsRequired: boolean;

  @IsBoolean()
  collectAgain: boolean;
}
