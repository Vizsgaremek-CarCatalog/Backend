import { Test, TestingModule } from '@nestjs/testing';
import { CarcatalogController } from './carcatalog.controller';
import { CarcatalogService } from './carcatalog.service';

describe('CarcatalogController', () => {
  let controller: CarcatalogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarcatalogController],
      providers: [CarcatalogService],
    }).compile();

    controller = module.get<CarcatalogController>(CarcatalogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
