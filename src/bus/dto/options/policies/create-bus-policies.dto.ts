import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateBusCancellationPolicyDto } from './create-bus-cancellation-policy.dto';
import { CreateBusLuggagePolicyDto } from './create-bus-luggage-policy.dto';
import { CreateBusChildPolicyDto } from './create-bus-child-policy.dto';
import { CreateBusBoardingPolicyDto } from './create-bus-boarding-policy.dto';
import { CreateBusTicketChangePolicyDto } from './create-bus-ticket-change-policy.dto';
import { CreateBusPassengerPolicyDto } from './create-bus-passenger-policy.dto';

export class CreateBusPoliciesDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusCancellationPolicyDto)
  cancellation?: CreateBusCancellationPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusLuggagePolicyDto)
  luggage?: CreateBusLuggagePolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusChildPolicyDto)
  child?: CreateBusChildPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusBoardingPolicyDto)
  boarding?: CreateBusBoardingPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusTicketChangePolicyDto)
  change?: CreateBusTicketChangePolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBusPassengerPolicyDto)
  passenger?: CreateBusPassengerPolicyDto;
}
