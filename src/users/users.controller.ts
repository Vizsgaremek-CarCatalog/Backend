import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBadRequestResponse, ApiBearerAuth, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Creates a new car entry in the catalog
   * 
   * @param id The unique ID of the car
   * @param createUserDto The data to be created
   * @returns JSON response 
   */
  
  @ApiParam({
    name: "id",
    type: "number",
    description: 'The unique ID of the car'
  })
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
   * Retrieves a specific users by ID
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
   * Modifies the details of an existing car
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
   description: 'The unique ID of the user' })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @ApiBadRequestResponse({ description: 'User not found or invalid ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
