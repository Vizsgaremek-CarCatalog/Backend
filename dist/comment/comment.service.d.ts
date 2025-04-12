import { PrismaService } from 'src/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentService {
    private readonly db;
    constructor(db: PrismaService);
    create(createCommentDto: CreateCommentDto, userId: number): Promise<{
        id: number;
        userId: number;
        carId: number;
        createdAt: Date;
        text: string;
    }>;
    findAll(carId: number): Promise<({
        user: {
            email: string;
        };
    } & {
        id: number;
        userId: number;
        carId: number;
        createdAt: Date;
        text: string;
    })[]>;
    findOne(id: number): Promise<{
        id: number;
        userId: number;
        carId: number;
        createdAt: Date;
        text: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        userId: number;
        carId: number;
        createdAt: Date;
        text: string;
    }>;
    checkIfAdmin(userId: number): Promise<boolean>;
}
