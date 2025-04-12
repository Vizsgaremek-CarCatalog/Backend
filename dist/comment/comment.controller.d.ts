import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CarcatalogService } from 'src/carcatalog/carcatalog.service';
export declare class CommentController {
    private readonly commentService;
    private readonly carService;
    constructor(commentService: CommentService, carService: CarcatalogService);
    createComment(createCommentDto: CreateCommentDto, userId: string): Promise<{
        id: number;
        userId: number;
        carId: number;
        createdAt: Date;
        text: string;
    }>;
    getComments(carId: string): Promise<({
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
