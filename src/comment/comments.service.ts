import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private readonly db: PrismaService) {}

  async create(createCommentDto: CreateCommentDto, userId: number, carId: number) {
    const comment = await this.db.comment.create({
      data: {
        text: createCommentDto.text,
        car: {
          connect: { id: carId },
        },
        user: {
          connect: { id: userId },
        },
      },
    });
    return comment;
  }
}
