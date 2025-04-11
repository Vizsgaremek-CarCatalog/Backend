import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private readonly db: PrismaService) {}

  async create(createCommentDto: CreateCommentDto, userId: number) {
    return this.db.comment.create({
      data: {
        text: createCommentDto.text,
        car: { connect: { id: createCommentDto.carId } },
        user: { connect: { id: userId } },
      },
    });
  }

  async findAll(carId: number) {
    const carIdInt = parseInt(carId.toString(), 10);
    if (isNaN(carIdInt)) {
      throw new BadRequestException('Invalid carId format');
    }
    return this.db.comment.findMany({
      where: { carId: carIdInt },
      include: { user: { select: { email: true } } },
    });
  }

  async findOne(id: number) {
    return this.db.comment.findUnique({
      where: { id },
    });
  }

  async remove(id: number) {
    try {
      return await this.db.comment.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Comment not found');
      }
      throw error;
    }
  }

  async checkIfAdmin(userId: number) {
    const user = await this.db.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user.role === 'ADMIN';
  }
}