import { PartialType } from '@nestjs/mapped-types';
import { CreateProviderBookingDto } from './create-provider-booking.dto';

export class UpdateProviderBookingDto extends PartialType(CreateProviderBookingDto) {}
