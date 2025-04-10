import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCarcatalogDto } from './dto/create-carcatalog.dto';
import { UpdateCarcatalogDto } from './dto/update-carcatalog.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CarcatalogService {
  constructor (private readonly db: PrismaService){}
  
  create(createCarcatalogDto: CreateCarcatalogDto) {
    return this.db.cars.create({
      data: createCarcatalogDto
    });
  }

  findAll() {
    return this.db.cars.findMany();
  }

  async findOne(id: number) {
    // 1. Validate the ID
    if (isNaN(id) || id <= 0) {
      throw new BadRequestException('Invalid ID: ID must be a positive number');
    }
  
    // 2. Find the car
    const car = await this.db.cars.findUnique({
      where: { id },
    });
  
    // 3. Check if the car exists
    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
  
    return car;
  }
  async update(id: number, updateCarcatalogDto: UpdateCarcatalogDto) {
    // 1. Check if id is a valid number
    if (isNaN(id) || id <= 0) {
      throw new BadRequestException('Invalid ID: ID must be a positive number');
    }
  
    try {
      // 2. Check if the record exists before updating
      const existingCar = await this.db.cars.findUnique({
        where: { id },
      });
  
      if (!existingCar) {
        throw new NotFoundException(`Car with ID ${id} not found`);
      }
  
      // 3. Perform the update
      return await this.db.cars.update({
        data: updateCarcatalogDto,
        where: { id },
      });
    } catch (error) {
      // 4. Handle specific errors
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error; // Re-throw known exceptions
      }
      throw new InternalServerErrorException('Failed to update car data');
    }
  }

  async remove(id: number) {
    // 1. Validate the ID
    if (isNaN(id) || id <= 0) {
      throw new BadRequestException('Invalid ID: ID must be a positive number');
    }
  
    try {
      // 2. Check if the car exists
      const car = await this.db.cars.findUnique({
        where: { id },
      });
  
      if (!car) {
        throw new NotFoundException(`Car with ID ${id} not found`);
      }
  
      // 3. Delete the car
      await this.db.cars.delete({
        where: { id },
      });
  
      return { message: 'Car deleted successfully' };
    } catch (error) {
      // 4. Handle specific errors
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error; // Re-throw known exceptions
      }
      // Handle Prisma-specific errors if needed (e.g., P2025 for not found, though already checked)
      throw new InternalServerErrorException('Failed to delete car');
    }
  }
}

