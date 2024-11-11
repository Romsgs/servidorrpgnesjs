import { Module } from '@nestjs/common';
import { CharacterSheetService } from './character-sheet.service';
import { CharacterSheetController } from './character-sheet.controller';

@Module({
  providers: [CharacterSheetService],
  controllers: [CharacterSheetController]
})
export class CharacterSheetModule {}
