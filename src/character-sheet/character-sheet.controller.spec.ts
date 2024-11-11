import { Test, TestingModule } from '@nestjs/testing';
import { CharacterSheetController } from './character-sheet.controller';

describe('CharacterSheetController', () => {
  let controller: CharacterSheetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterSheetController],
    }).compile();

    controller = module.get<CharacterSheetController>(CharacterSheetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
