import { Injectable } from '@nestjs/common';
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
      throw new Error("Invalid carId format");
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
    return this.db.comment.delete({
      where: { id },
    });
  }

  async checkIfAdmin(userId: number) {
    const user = await this.db.user.findUnique({
      where: { id: userId },
    });
    return user?.role === 'ADMIN' ? true : false;
  }
}