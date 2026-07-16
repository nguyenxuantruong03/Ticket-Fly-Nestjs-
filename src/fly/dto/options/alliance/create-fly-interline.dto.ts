import { IsBoolean } from 'class-validator';

export class CreateFlyInterlineDto {
  @IsBoolean()
  baggageTransfer: boolean;

  @IsBoolean()
  protectedConnection: boolean;
}
