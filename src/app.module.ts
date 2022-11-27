import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CharacterModule } from './character/character.module';
import { StatisticsModule } from './statistics/statistics.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [UserModule, CharacterModule, StatisticsModule, SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
