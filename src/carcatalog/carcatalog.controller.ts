import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { CarcatalogService } from './carcatalog.service';
import { CreateCarcatalogDto } from './dto/create-carcatalog.dto';
import { UpdateCarcatalogDto } from './dto/update-carcatalog.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiParam, ApiResponse } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('carcatalog')
@ApiBearerAuth()
export class CarcatalogController {
  constructor(private readonly carcatalogService: CarcatalogService) {}

  private static storage = diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + extname(file.originalname));
    },
  });


   /**
   * Creates a new user
   * 
   * @param id The unique ID of the user
   * @param createcarcatalogDto The data to be created
   * @returns JSON response 
   */
   
   @Post()
   @ApiParam({
     name: "id",
     type: "number",
     description: 'The unique ID of the user'
   })
   @UseInterceptors(FileInterceptor('image', { storage: CarcatalogController.storage }))
   @ApiResponse({ status: 200, description: 'Car created successfully' })
   @ApiBadRequestResponse({ description: 'The supplied data was invalid' })
   create(@Body() createCarcatalogDto: CreateCarcatalogDto, @UploadedFile() file: Express.Multer.File ) {
    createCarcatalogDto.mass = Number(createCarcatalogDto.mass); 
    if (isNaN(createCarcatalogDto.mass)) {
      throw new BadRequestException('Mass must be a valid number');
    }
    const imageUrl = file ? `http://localhost:3000/uploads/${file.filename}` : null;
    return this.carcatalogService.create({ ...createCarcatalogDto, imageUrl });
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
  @ApiResponse({ status: 200, description: 'The modified data of the car' })
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
