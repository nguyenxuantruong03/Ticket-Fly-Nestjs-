import { Test, TestingModule } from '@nestjs/testing';
import { ProviderBookingController } from './provider-booking.controller';
import { ProviderBookingService } from './provider-booking.service';

describe('ProviderBookingController', () => {
  let controller: ProviderBookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProviderBookingController],
      providers: [ProviderBookingService],
    }).compile();

    controller = module.get<ProviderBookingController>(ProviderBookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
