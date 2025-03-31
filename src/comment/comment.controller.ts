import { Controller, Post, Get, Delete, Body, Param, Headers, ForbiddenException, BadRequestException, NotFoundException } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async createComment(
    @Body() createCommentDto: CreateCommentDto,
    @Headers('user-id') userId: string,
  ) {
    const userIdInt = parseInt(userId, 10);
    if (isNaN(userIdInt)) {
      throw new BadRequestException('Invalid user-id format');
    }
    return this.commentService.create(createCommentDto, userIdInt);
  }

  @Get(':carId')
  async getComments(@Param('carId') carId: number) {
    return this.commentService.findAll(carId);
  }

  @Delete(':id')
  async deleteComment(
    @Param('id') id: string, // Change to string and parse
    @Headers('user-id') userId: string,
  ) {
    const userIdInt = parseInt(userId, 10);
    const commentIdInt = parseInt(id, 10);
    if (isNaN(userIdInt) || isNaN(commentIdInt)) {
      throw new BadRequestException('Invalid user-id or comment id format');
    }

    const isAdmin = await this.commentService.checkIfAdmin(userIdInt);
    if (!isAdmin) {
      throw new ForbiddenException('Nincs jogosultságod ehhez a művelethez.');
    }

    try {
      await this.commentService.remove(commentIdInt);
      return { message: 'Komment törölve.' };
    } catch (error) {
      if (error.code === 'P2025') { // Prisma record not found error
        throw new NotFoundException('Comment not found');
      }
      throw error; // Re-throw other errors for a 500
    }
  }
}