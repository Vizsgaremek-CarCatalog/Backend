import { Test, TestingModule } from '@nestjs/testing';
import { CarcatalogService } from './carcatalog.service';

describe('CarcatalogService', () => {
  let service: CarcatalogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarcatalogService],
    }).compile();

    service = module.get<CarcatalogService>(CarcatalogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
