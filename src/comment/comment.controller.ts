import { Controller, Post, Get, Delete, Body, Param, Headers, ForbiddenException, BadRequestException, NotFoundException } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiForbiddenResponse, ApiNotFoundResponse, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CarcatalogService } from 'src/carcatalog/carcatalog.service';

@Controller('comments')
@ApiBearerAuth()
export class CommentController {
  constructor(private readonly commentService: CommentService,
              private readonly carService: CarcatalogService
  ) {}

   /**
   * Creates a new comment when you are logged in
   * 
   *
   * @param createcarcatalogDto The data to be created
   * @returns JSON response 
   */
   
   @Post()
   @ApiResponse({ status: 200, description: 'Comment created successfully' })
   @ApiBadRequestResponse({ description: 'The supplied data was invalid' })
   @ApiNotFoundResponse({ description: 'Car not found' })
   async createComment(
     @Body() createCommentDto: CreateCommentDto,
     @Headers('user-id') userId: string,
   ) {
     const userIdInt = parseInt(userId, 10);
     if (isNaN(userIdInt)) {
       throw new BadRequestException('Invalid user-id format');
     }
   
     // Ellenőrizzük, hogy létezik-e a carId
     const car = await this.carService.findOne(createCommentDto.carId); // vagy repository hívás
     if (!car) {
       throw new NotFoundException('Car not found');
     }
   
     return this.commentService.create(createCommentDto, userIdInt);
   }
    /**
   * Retrieves all comments by the carId
   * 
   * @returns JSON response
   */
  
    @Get(':carId')
    @ApiParam({ name: 'carId', type: 'number', description: 'The unique ID of the car' })
    @ApiResponse({ status: 200, description: 'List of comments for the car' })
    @ApiBadRequestResponse({ description: 'Invalid car ID format' })
    @ApiNotFoundResponse({ description: 'Car not found' })
    async getComments(@Param('carId') carId: string) {
      const id = parseInt(carId, 10);
      if (isNaN(id)) {
        throw new BadRequestException('Invalid car ID format');
      }
    
      // Ellenőrizd, hogy létezik-e az autó
      const car = await this.carService.findOne(id); // vagy repository hívás
      if (!car) {
        throw new NotFoundException('Car not found');
      }
    
      // Lekérjük a kommenteket
      const comments = await this.commentService.findAll(id);
      return comments;
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
       type: 'string',
       description: 'The unique ID of the comment',
     })
     @ApiResponse({ status: 200, description: 'Comment deleted successfully' })
     @ApiBadRequestResponse({ description: 'Invalid ID format' })
     @ApiForbiddenResponse({ description: 'User lacks permission to delete the comment' })
     @ApiNotFoundResponse({ description: 'Comment not found' })
     async deleteComment(
       @Param('id') id: string,
       @Headers('user-id') userId: string,
       @Headers('admin') adminStatus: string, // Admin status a headerből (kept for Swagger)
     ) {
       const userIdInt = parseInt(userId, 10);
       const commentIdInt = parseInt(id, 10);
    
       if (isNaN(userIdInt) || isNaN(commentIdInt)) {
         throw new BadRequestException('Invalid user-id or comment id format');
       }
    
       // Check admin status using CommentService instead of adminStatus header
       const isAdmin = await this.commentService.checkIfAdmin(userIdInt);
       if (!isAdmin) {
         throw new ForbiddenException('You do not have permission to delete this comment.');
       }
    
       try {
         await this.commentService.remove(commentIdInt);
         return { message: 'Comment deleted successfully.' };
       } catch (error) {
         if (error.code === 'P2025') {
           throw new NotFoundException('Comment not found');
         }
         throw error;
       }
     }
   }

