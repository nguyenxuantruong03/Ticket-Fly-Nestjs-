import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateBusChildPolicyDto {
  @IsOptional()
  @IsInt()
  freeAgeUnder?: number;

  @IsOptional()
  @IsInt()
  childTicketAgeFrom?: number;

  @IsOptional()
  @IsInt()
  childTicketAgeTo?: number;

  @IsOptional()
  @IsNumber()
  childDiscountPercent?: number;
}
