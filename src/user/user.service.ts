import { PrismaService } from './../prisma.service';
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this .prismaService.user.create({
        data: createUserDto
      })

      return user
    } catch (error) {
      console.log(error)

      if (error.code === 'P2002') {
        throw new BadRequestException('Username already taken, please select a new one')
      }

      throw new InternalServerErrorException('Something went wrong, read server logs')
    }
  }

  async findAll() {
    try {
      const users = await this.prismaService.user.findMany()

      return users.map(user => {
        delete user.password

        return user
      })
    } catch (error) {
      console.log(error)
    }
  }

  async findOne(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        username: true,
        createdAt: true,
        updatedAt: true,
      }
    })

    if (!user) {
      throw new NotFoundException('User not found')
    }

    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id)

    try {
      const user = await this.prismaService.user.update({
        where: {
          id
        },
        data: {
          ...updateUserDto
        }
      })

      return user
    } catch (error) {
      console.log(error)

      if (error.code === 'P2002') {
        throw new BadRequestException('Username already exist')
      }
    }
  }

  async remove(id: number) {
    await this.findOne(id)

    try {
      this.prismaService.user.delete({
        where: {
          id
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
