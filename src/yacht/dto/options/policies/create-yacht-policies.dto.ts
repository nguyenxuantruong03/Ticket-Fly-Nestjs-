import { IsOptional, ValidateNested } from 'class-validator';

import { Type } from 'class-transformer';

import { CreateYachtCancellationPolicyDto } from './create-yacht-cancellation-policy.dto';
import { CreateYachtPassengerRequirementDto } from './create-yacht-passenger-requirement.dto';
import { CreateYachtLuggagePolicyDto } from './create-yacht-luggage-policy.dto';
import { CreateYachtWaitingPolicyDto } from './create-yacht-waiting-policy.dto';
import { CreateYachtMeetAndGreetDto } from './create-yacht-meet-and-greet.dto';
import { CreateYachtFlightSupportDto } from './create-yacht-flight-support.dto';
import { CreateYachtBookingPolicyDto } from './create-yacht-booking-policy.dto';

export class CreateYachtPoliciesDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtCancellationPolicyDto)
  cancellation?: CreateYachtCancellationPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtPassengerRequirementDto)
  passenger?: CreateYachtPassengerRequirementDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtLuggagePolicyDto)
  luggage?: CreateYachtLuggagePolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtWaitingPolicyDto)
  waiting?: CreateYachtWaitingPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtMeetAndGreetDto)
  meetAndGreet?: CreateYachtMeetAndGreetDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtFlightSupportDto)
  flightSupport?: CreateYachtFlightSupportDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateYachtBookingPolicyDto)
  booking?: CreateYachtBookingPolicyDto;
}
