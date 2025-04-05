import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    createComment(createCommentDto: CreateCommentDto, userId: string): unknown;
    getComments(carId: number): unknown;
    deleteComment(id: string, userId: string): unknown;
}
