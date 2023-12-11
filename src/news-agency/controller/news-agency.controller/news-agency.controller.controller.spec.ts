// this module is for auto testing

import { Test, TestingModule } from '@nestjs/testing';
import { NewsAgencyController } from './news-agency.controller.controller';

describe('NewsAgencyController', () => {
  let controller: NewsAgencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsAgencyController],
    }).compile();

    controller = module.get<NewsAgencyController>(NewsAgencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
