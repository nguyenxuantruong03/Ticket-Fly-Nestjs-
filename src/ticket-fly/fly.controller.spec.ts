import { Test, TestingModule } from '@nestjs/testing';
import { FlyController } from './fly.controller';
import { FlyService } from './fly.service';

describe('FlyController', () => {
  let controller: FlyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlyController],
      providers: [FlyService],
    }).compile();

    controller = module.get<FlyController>(FlyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
