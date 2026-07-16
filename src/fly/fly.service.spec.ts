import { Test, TestingModule } from '@nestjs/testing';
import { FlyService } from './fly.service';

describe('FlyService', () => {
  let service: FlyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlyService],
    }).compile();

    service = module.get<FlyService>(FlyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
