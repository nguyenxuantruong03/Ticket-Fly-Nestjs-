import { IsInt } from 'class-validator';

export class CreateFlyItinerarySegmentDto {
  @IsInt()
  order: number;
}
