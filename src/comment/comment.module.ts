import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { PrismaService } from 'src/prisma.service';
import { CarcatalogService } from 'src/carcatalog/carcatalog.service';

@Module({
  controllers: [CommentController],
  providers: [CommentService, PrismaService, CarcatalogService],
})
export class CommentModule {}
