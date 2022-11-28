import { StatisticsService } from './../statistics/statistics.service';
import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { SkillsService } from 'src/skills/skills.service';

@Module({
  controllers: [CharacterController],
  providers: [CharacterService, PrismaService, SkillsService, StatisticsService]
})
export class CharacterModule {}
