import { Test, TestingModule } from '@nestjs/testing';
import { ProviderBookingService } from './provider-booking.service';

describe('ProviderBookingService', () => {
  let service: ProviderBookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderBookingService],
    }).compile();

    service = module.get<ProviderBookingService>(ProviderBookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
