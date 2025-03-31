import { PrismaService } from 'src/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentService {
    private readonly db;
    constructor(db: PrismaService);
    create(createCommentDto: CreateCommentDto, userId: number): Promise<{
        id: number;
        userId: number;
        text: string;
        createdAt: Date;
        carId: number;
    }>;
    findAll(carId: number): Promise<({
        user: {
            email: string;
        };
    } & {
        id: number;
        userId: number;
        text: string;
        createdAt: Date;
        carId: number;
    })[]>;
    findOne(id: number): Promise<{
        id: number;
        userId: number;
        text: string;
        createdAt: Date;
        carId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        userId: number;
        text: string;
        createdAt: Date;
        carId: number;
    }>;
    checkIfAdmin(userId: number): Promise<boolean>;
}
