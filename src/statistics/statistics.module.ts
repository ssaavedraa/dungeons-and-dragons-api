import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { StatisticsController } from './statistics.controller';

@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService, PrismaService]
})
export class StatisticsModule {}
