import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from './jwt/jwt.module';
import { CharacterSheetModule } from './character-sheet/character-sheet.module';

@Module({
  imports: [UserModule, AuthModule, JwtModule, CharacterSheetModule],
  providers: [PrismaService],
})
export class AppModule {}
