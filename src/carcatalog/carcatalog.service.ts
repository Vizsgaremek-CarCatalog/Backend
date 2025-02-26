import { Injectable } from '@nestjs/common';
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
    try{
      await this.db.cars.delete({
        where: {id}
      })
      return true
    }catch{
      return false
    };
  }
}
