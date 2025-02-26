import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarcatalogService } from './carcatalog.service';
import { CreateCarcatalogDto } from './dto/create-carcatalog.dto';
import { UpdateCarcatalogDto } from './dto/update-carcatalog.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('carcatalog')
@ApiBearerAuth()
export class CarcatalogController {
  constructor(private readonly carcatalogService: CarcatalogService) {}

   /**
   * Creates a new user
   * 
   * @param id The unique ID of the user
   * @param createcarcatalogDto The data to be created
   * @returns JSON response 
   */
   @Patch(':id')
   @ApiParam({
     name: "id",
     type: "number",
     description: 'The unique ID of the user'
   })
   @ApiResponse({ status: 200, description: 'Car created successfully' })
   @ApiBadRequestResponse({ description: 'The supplied data was invalid' })
   @Post()
   create(@Body() createCarcatalogDto: CreateCarcatalogDto) {
    return this.carcatalogService.create(createCarcatalogDto);
  }

   /**
   * Retrieves all car entries in the catalog
   * 
   * @returns JSON response
   */
  @Get()
  @ApiResponse({ status: 200, description: 'Retrive all cars' })
  @ApiBadRequestResponse({ description: 'The supplied data was invalid' })
  findAll() {
    return this.carcatalogService.findAll();
  }

  /**
   * Retrieves a specific car by ID
   * 
   * @param id The unique ID of the car
   * @returns JSON response
   */
  @Get(':id')
  @ApiParam({
    name: "id",
    type: "number",
    description: 'The unique ID of the car'
  })
  @ApiResponse({ status: 200, description: 'Retrive a specific car' })
  @ApiBadRequestResponse({ description: 'Car not found or invalid ID' })
  findOne(@Param('id') id: string) {
    return this.carcatalogService.findOne(+id);
  }

  /**
   * Modifies the details of an existing car
   * 
   * @param id The unique ID of the car
   * @param updatecartalogDto The data to modify
   * @returns JSON response 
   */
  @Patch(':id')
  @ApiParam({
    name: "id",
    type: "number",
    description: 'The unique ID of the car'
  })
  @ApiResponse({ status: 200, description: 'The modified data of the phone' })
  @ApiBadRequestResponse({ description: 'The supplied data was invalid' })
  update(@Param('id') id: string, @Body() updateCarcatalogDto: UpdateCarcatalogDto) {
    return this.carcatalogService.update(+id, updateCarcatalogDto);
  }

   /**
   * Deletes a car entry by ID
   * 
   * @param id The unique ID of the car
   * @returns JSON response
   */
   @Delete(':id')
   @ApiParam({ 
    name: 'id', 
    type: 'number', 
    description: 'The unique ID of the car' })
  @ApiParam({ name: 'id', type: 'int', description: 'The unique ID of the car' })
  @ApiResponse({ status: 200, description: 'Car deleted successfully' })
  @ApiBadRequestResponse({ description: 'Car not found or invalid ID' })
  remove(@Param('id') id: string) {
    return this.carcatalogService.remove(+id);
  }
}
