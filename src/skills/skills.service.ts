import { PrismaService } from './../prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSkillsDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Injectable()
export class SkillsService {
  constructor(private prismaService: PrismaService) {}
  async create(createSkillsDto: any) {
    try {
      const skills = await this.prismaService.skills.create({
        data: createSkillsDto
      })

      return skills
    } catch (error) {
      console.log(error)
    }
  }

  async findAll() {
    try {
      return await this.prismaService.skills.findMany()
    } catch (error) {
      console.log(error)
    }
  }

  async findOne(id: number) {
    const skills = await this.prismaService.skills.findUnique({
      where: {
        id
      }
    })

    if (!skills) {
      throw new NotFoundException('Skills set not found')
    }

    return skills
  }

  async update(id: number, updateSkillDto: UpdateSkillDto) {
    await this.findOne(id)

    try {
      const skills = this.prismaService.skills.update({
        where: {
          id
        },
        data: {
          ...updateSkillDto
        }
      })

      return skills
    } catch (error) {
      console.log(error)
    }
  }

  async remove(id: number) {
    await this.findOne(id)

    try {
      await this.prismaService.skills.delete({
        where: {
          id
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
