import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, HttpException, HttpStatus, Headers } from '@nestjs/common';
import { UsersService } from './users.service';
import { AddFavoriteDto, ChangePasswordDto, CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBadRequestResponse, ApiBearerAuth, ApiParam, ApiResponse } from '@nestjs/swagger';
import { cars } from '@prisma/client';

@Controller('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  /**
   * Creates a new user for the website
   * 
   * @param createUserDto The data to be created
   * @returns JSON response 
   */


  @ApiResponse({ status: 200, description: 'user created successfully' })
  @ApiBadRequestResponse({ description: 'The supplied data was invalid' })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  /**
  * Retrieves all users 
  * 
  * @returns JSON response
  */

  @ApiResponse({ status: 200, description: 'Retrive all users' })
  @ApiBadRequestResponse({ description: 'The supplied data was invalid' })
  @Get()
  @UseGuards(AuthGuard('bearer'))
  findAll(@Request() req) {
    const user = req.user;
    console.log(user);
    return this.usersService.findAll();
  }

  /**
   * Retrieves a specific user by ID
   * 
   * @param id The unique ID of the user
   * @returns JSON response
   */

  @ApiParam({
    name: "id",
    type: "number",
    description: 'The unique ID of the user'
  })
  @ApiResponse({ status: 200, description: 'Retrive a specific user' })
  @ApiBadRequestResponse({ description: 'User not found or invalid ID' })

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  /**
    * Modifies the details of an existing user
    * 
    * @param id The unique ID of the user
    * @param updateUserDto The data to modify
    * @returns JSON response 
    */

  @ApiParam({
    name: "id",
    type: "number",
    description: 'The unique ID of the user'
  })
  @ApiResponse({ status: 200, description: 'The modified data of the user' })
  @ApiBadRequestResponse({ description: 'The supplied data was invalid' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
  /**
     * Deletes a user entry by ID
     * 
     * @param id The unique ID of the user
     * @returns JSON response
     */

  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'The unique ID of the user'
  })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @ApiBadRequestResponse({ description: 'User not found or invalid ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  /**
     * Get a user favorites by ID
     * 
     * @param id The unique ID of the user
     * @returns JSON response
     */


  // GET /users/:userId/favorites
  @ApiParam({ name: 'userId', type: 'number', description: 'The unique ID of the user' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved favorite cars' })
  @ApiBadRequestResponse({ description: 'Unauthorized or invalid user ID' })
  @Get(':userId/favorites')
  async getFavorites(
    @Param('userId') userId: string,
   
  ): Promise<cars[]> {
    const id = parseInt(userId);
    if (isNaN(id) ) {
      throw new HttpException('Unauthorized or invalid user ID', HttpStatus.UNAUTHORIZED);
    }
    return this.usersService.getUserFavorites(id);
  }
  
   /**
     * Post a user favorite by ID
     * 
     * @param id The unique ID of the user
     * @returns JSON response
     */

  // POST /users/:userId/favorites

  @ApiParam({ name: 'userId', type: 'number', description: 'The unique ID of the user' })
  @ApiResponse({ status: 200, description: 'Car successfully added to favorites' })
  @ApiBadRequestResponse({ description: 'Unauthorized, invalid ID, or car already in favorites' })
  @Post(':userId/favorites')
  async addFavorite(
    @Param('userId') userId: string,
    @Body() addFavoriteDto: AddFavoriteDto,
  
  ): Promise<cars> {
    const id = parseInt(userId);
    if (isNaN(id) ) {
      throw new HttpException('Unauthorized or invalid user ID', HttpStatus.UNAUTHORIZED);
    }
    try {
      return await this.usersService.addFavorite(id, addFavoriteDto.carId);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new HttpException('Car already in favorites', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Failed to add favorite', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
   /**
     * Deletes a user favorite by ID
     * 
     * @param id The unique ID of the user
     * @returns JSON response
     */

  // POST /users/:userId/favorites
  // DELETE /users/:userId/favorites/:carId
  @ApiParam({ name: 'userId', type: 'number', description: 'The unique ID of the user' })
  @ApiParam({ name: 'carId', type: 'number', description: 'The unique ID of the car' })
  @ApiResponse({ status: 200, description: 'Car successfully removed from favorites' })
  @ApiBadRequestResponse({ description: 'Unauthorized or invalid IDs' })
  @Delete(':userId/favorites/:carId')
  async removeFavorite(
    @Param('userId') userId: string,
    @Param('carId') carId: string,
  
  ): Promise<void> {
    const id = parseInt(userId);
    const cid = parseInt(carId);
    if (isNaN(id) ||  isNaN(cid)) {
      throw new HttpException('Unauthorized or invalid IDs', HttpStatus.UNAUTHORIZED);
    }
    await this.usersService.removeFavorite(id, cid);
  }

  /**
     * Update a user password by ID
     * 
     * @param id The unique ID of the user
     * @returns JSON response
     */
  @Patch(':id/change-password')
  @ApiParam({ name: 'id', type: 'number', description: 'The unique ID of the user' })
  @ApiResponse({ status: 200, description: 'Password changed successfully' })
  @ApiBadRequestResponse({ description: 'Invalid current password or new password' })
  async changePassword(
    @Param('id') userId: string,
    @Body() changePasswordDto: ChangePasswordDto,
   
  ) {
    const id = parseInt(userId);
    if (isNaN(id) ) {
      throw new HttpException('Unauthorized or invalid user ID', HttpStatus.UNAUTHORIZED);
    }

    const result = await this.usersService.changePassword(
      id,
      changePasswordDto.currentPassword,
      changePasswordDto.newPassword,
      changePasswordDto.confirmPassword
    );
    if (!result) {
      throw new HttpException('Failed to change password', HttpStatus.BAD_REQUEST);
    }
    return { message: 'Password changed successfully' };
  }

}


