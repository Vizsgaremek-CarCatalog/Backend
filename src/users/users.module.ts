import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule

@Module({
  imports: [ConfigModule], // Import ConfigModule if not already done
  exports:[UsersService],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  
})
export class UsersModule {}
