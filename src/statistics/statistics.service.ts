import { PrismaService } from './../prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';

@Injectable()
export class StatisticsService {
  constructor(private prismaService: PrismaService) {}

  async create(createStatisticDto: CreateStatisticDto) {
    try {
      const statistics = await this.prismaService.statistics.create({
        data: createStatisticDto
      })

      return statistics.id
    } catch (error) {
      console.log(error)
    }
  }

  async findAll() {
    try {
      const statistics = await this.prismaService.statistics.findMany()

      return statistics
    } catch (error) {
      console.log(error)
    }
  }

  async findOne(id: number) {
    const statistics = await this.prismaService.statistics.findUnique({
      where: {
        id
      }
    })

    if (!statistics) {
      throw new NotFoundException('Statics set not found')
    }

    return statistics
  }

  async update(id: number, updateStatisticDto: UpdateStatisticDto) {
    await this.findOne(id)

    try {
      const statistics = await this.prismaService.statistics.update({
        where: {
          id
        },
        data: {
          ...updateStatisticDto
        }
      })

      return statistics
    } catch (error) {
      console.log(error)
    }
  }

  async remove(id: number) {
    await this.findOne(id)

    try {
      await this.prismaService.statistics.delete({
        where: {
          id
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
