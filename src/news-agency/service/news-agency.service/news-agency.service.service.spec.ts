// this module is for auto testing

import { Test, TestingModule } from '@nestjs/testing';
import { NewsAgencyService } from './news-agency.service.service';

describe('NewsAgencyService', () => {
  let service: NewsAgencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsAgencyService],
    }).compile();

    service = module.get<NewsAgencyService>(NewsAgencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
