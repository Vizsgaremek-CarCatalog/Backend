import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    createComment(createCommentDto: CreateCommentDto, userId: string): Promise<{
        id: number;
        userId: number;
        text: string;
        createdAt: Date;
        carId: number;
    }>;
    getComments(carId: number): Promise<({
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
    deleteComment(id: string, userId: string): Promise<{
        message: string;
    }>;
}
