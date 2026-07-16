import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class CreateBusBoardingPolicyDto {
  @IsOptional()
  @IsInt()
  checkInBeforeMinutes?: number;

  @IsOptional()
  @IsInt()
  boardingGateCloseMinutes?: number;

  @IsOptional()
  @IsBoolean()
  digitalTicketAccepted?: boolean;

  @IsOptional()
  @IsBoolean()
  printedTicketRequired?: boolean;
}
