import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [UserModule, CharacterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
