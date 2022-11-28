import { StatisticsService } from './../statistics/statistics.service';
import { SkillsService } from './../skills/skills.service';
import { PrismaService } from './../prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CharacterService {
  constructor(
    private prismaService: PrismaService,
    private skillsService: SkillsService,
    private statisticsService: StatisticsService
  ) {}
  async create(createCharacterDto: CreateCharacterDto) {
    try {
      const character = await this.prismaService.character.create({
        data: {
          ...createCharacterDto.characterData,
          statistics: {
            create: {
              ...createCharacterDto.characterStatistics
            }
          },
          skills: {
            create: {
              ...createCharacterDto.characterSkills
            }
          },
          user: {
            connect: {
              id: createCharacterDto.userId
            }
          }
        }
      })

      return character
    } catch (error) {
      console.log(error)
      throw new BadRequestException()
    }
  }

  async findAll() {
    const characters = await this.prismaService.character.findMany({
      include: {
        skills: true,
        statistics: true,
        user: true
      }
    })

    return characters
  }

  async findOne(id: number) {
    return `This action returns a #${id} character`;
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  async remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
