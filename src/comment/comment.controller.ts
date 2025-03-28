import { Controller, Post, Get, Delete, Body, Param, Headers, ForbiddenException, BadRequestException } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto'; // DTO importálása


@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  // Új komment létrehozása (csak bejelentkezett felhasználóknak)
  @Post()
  async createComment(
    @Body() createCommentDto: CreateCommentDto, // DTO használata
    @Headers('user-id') userId: string, // A frontend biztosítja, hogy a user be legyen jelentkezve
    
  ) {
    const userIdInt = parseInt(userId, 10);
  
    if (isNaN(userIdInt)) {
      throw new BadRequestException('Invalid user-id format');
    }
    return this.commentService.create(createCommentDto, userIdInt);
  }

  // Autóhoz tartozó kommentek lekérése
  @Get(':carId')
  async getComments(@Param('carId') carId: number) {
    return this.commentService.findAll(carId);
  }

  // Komment törlése (csak adminok)
  @Delete(':id')
  async deleteComment(
    @Param('id') id: number,
    @Headers('user-id') userId: number, // Admin jogosultságot kezeljük
  ) {
    // Ellenőrizzük, hogy admin-e a felhasználó
    const isAdmin = await this.commentService.checkIfAdmin(userId);
    if (!isAdmin) {
      throw new ForbiddenException('Nincs jogosultságod ehhez a művelethez.');
    }

    await this.commentService.remove(id);
    return { message: 'Komment törölve.' };
}
}