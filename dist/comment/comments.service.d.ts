import { PrismaService } from '../prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentsService {
    private readonly db;
    constructor(db: PrismaService);
    create(createCommentDto: CreateCommentDto, userId: number, carId: number): Promise<{
        id: number;
        userId: number;
        text: string;
        createdAt: Date;
        carId: number;
    }>;
}
