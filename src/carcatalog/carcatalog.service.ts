import { BadRequestException, Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return this.db.cars.findUnique({where: {id}});
  }

  async update(id: number, updateCarcatalogDto: UpdateCarcatalogDto) {
    try{
      return await this.db.cars.update({
       data: updateCarcatalogDto,
       where: {id}
     });
   }catch{
     return undefined;
   }
  }

 async remove(id: number) {
 
  try {
    // Ellenőrizd, hogy létezik-e az id
    const car = await this.db.cars.findUnique({
      where: { id },
    });

    // Ha nem található, térj vissza hibával vagy false-szal
    if (!car) {
      return { message: 'Car not found', success: false };
    }

    // Ha létezik, töröld az adott rekordot
    await this.db.cars.delete({
      where: { id },
    });

    return { message: 'Car deleted successfully', success: true };
  } catch (error) {
    // Hibakezelés
    return { message: 'An error occurred', success: false };
  }
}
}
