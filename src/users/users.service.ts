import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as argon2 from "argon2";
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly db: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPw = await argon2.hash(createUserDto.password);
    const user = await this.db.user.create({
      data: {
        ...createUserDto,
        password: hashedPw,
      },
    })
    delete user.password;
    return user;
  }

  findAll() {
    return this.db.user.findMany();
  }

  findOne(id: number) {
    return this.db.user.findUnique({where:  {id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try{
      return await this.db.user.update({
       data: updateUserDto,
       where: {id}
     });
   }catch{
     return undefined;
   }
  }


  async remove(id: number) {
    try{
      await this.db.user.delete({
        where: {id}
      })
      return true
    }catch{
      return false
    };
  }

  async getUserByToken(token: string) {
    const tokenObj = await this.db.token.findUnique({
      where: { token },
      include: { user: true }
    })
    if (!tokenObj) return null;
    const user = tokenObj.user;
    delete user.password;
    return user;
  }

}
