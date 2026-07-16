import { PartialType } from '@nestjs/mapped-types';
import { CreateCarRentalDto } from './create-car-rental.dto';

export class UpdateCarRentalDto extends PartialType(CreateCarRentalDto) {}
