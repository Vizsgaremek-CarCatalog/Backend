import { Controller, Post, Get, Delete, Body, Param, Headers, ForbiddenException, BadRequestException, NotFoundException } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiForbiddenResponse, ApiNotFoundResponse, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('comments')
@ApiBearerAuth()
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

   /**
   * Creates a new comment when you are logged in
   * 
   *
   * @param createcarcatalogDto The data to be created
   * @returns JSON response 
   */
   
  @Post()
  @ApiResponse({status:200,description:"Comment created succesfully"})
  @ApiBadRequestResponse({description:"the supplied data was invalid"})
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
    /**
   * Retrieves all comments by the carId
   * 
   * @returns JSON response
   */
  

  @Get(':carId')
  async getComments(@Param('carId') carId: number) {
    return this.commentService.findAll(carId);
  }
     /**
   * Deletes a user's comment by ID
   * 
   * @param id The unique ID of the comment
   * @returns JSON response
   */
   

     @Delete(':id')
     @ApiParam({
       name: 'id',
       type: 'string', // Matches the raw input type; Swagger will show this as the API expects a string that represents an integer
       description: 'The unique ID of the comment',
     })
     @ApiResponse({ status: 200, description: 'Comment deleted successfully' })
     @ApiBadRequestResponse({ description: 'Invalid ID format' })
     @ApiForbiddenResponse({ description: 'User lacks permission to delete the comment' })
     @ApiNotFoundResponse({ description: 'Comment not found' })
     async deleteComment(
       @Param('id') id: string, // Keep as string, parsed manually below
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
         if (error.code === 'P2025') {
           throw new NotFoundException('Comment not found');
         }
         throw error; // Re-throw other errors for a 500 response
       }
     }
   }