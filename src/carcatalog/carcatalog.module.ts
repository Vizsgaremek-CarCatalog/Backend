import { Module } from '@nestjs/common';
import { CarcatalogService } from './carcatalog.service';
import { CarcatalogController } from './carcatalog.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CarcatalogController],
  providers: [CarcatalogService, PrismaService],
})
export class CarcatalogModule {}
