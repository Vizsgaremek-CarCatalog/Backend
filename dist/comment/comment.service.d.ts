import { PrismaService } from 'src/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentService {
    private readonly db;
    constructor(db: PrismaService);
    create(createCommentDto: CreateCommentDto, userId: number): unknown;
    findAll(carId: number): unknown;
    findOne(id: number): unknown;
    remove(id: number): unknown;
    checkIfAdmin(userId: number): unknown;
}
