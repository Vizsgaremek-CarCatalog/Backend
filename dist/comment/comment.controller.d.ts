import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    createComment(createCommentDto: CreateCommentDto, userId: string): Promise<{
        id: number;
        userId: number;
        carId: number;
        createdAt: Date;
        text: string;
    }>;
    getComments(carId: number): Promise<({
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
    deleteComment(id: string, userId: string, adminStatus: string): Promise<{
        message: string;
    }>;
}
