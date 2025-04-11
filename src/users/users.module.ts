import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { Carcatalog } from 'src/carcatalog/entities/carcatalog.entity';
import { CarcatalogService } from 'src/carcatalog/carcatalog.service';

@Module({
  imports: [ConfigModule], // Import ConfigModule if not already done
  exports:[UsersService, ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService,CarcatalogService],
  
})
export class UsersModule {}
