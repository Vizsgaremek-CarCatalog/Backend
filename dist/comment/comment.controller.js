"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const create_comment_dto_1 = require("./dto/create-comment.dto");
const swagger_1 = require("@nestjs/swagger");
const carcatalog_service_1 = require("../carcatalog/carcatalog.service");
let CommentController = class CommentController {
    constructor(commentService, carService) {
        this.commentService = commentService;
        this.carService = carService;
    }
    async createComment(createCommentDto, userId) {
        const userIdInt = parseInt(userId, 10);
        if (isNaN(userIdInt)) {
            throw new common_1.BadRequestException('Invalid user-id format');
        }
        const car = await this.carService.findOne(createCommentDto.carId);
        if (!car) {
            throw new common_1.NotFoundException('Car not found');
        }
        return this.commentService.create(createCommentDto, userIdInt);
    }
    async getComments(carId) {
        const id = parseInt(carId, 10);
        if (isNaN(id)) {
            throw new common_1.BadRequestException('Invalid car ID format');
        }
        const car = await this.carService.findOne(id);
        if (!car) {
            throw new common_1.NotFoundException('Car not found');
        }
        const comments = await this.commentService.findAll(id);
        return comments;
    }
    async deleteComment(id, userId, adminStatus) {
        const userIdInt = parseInt(userId, 10);
        const commentIdInt = parseInt(id, 10);
        if (isNaN(userIdInt) || isNaN(commentIdInt)) {
            throw new common_1.BadRequestException('Invalid user-id or comment id format');
        }
        const isAdmin = await this.commentService.checkIfAdmin(userIdInt);
        if (!isAdmin) {
            throw new common_1.ForbiddenException('You do not have permission to delete this comment.');
        }
        try {
            await this.commentService.remove(commentIdInt);
            return { message: 'Comment deleted successfully.' };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Comment not found');
            }
            throw error;
        }
    }
};
exports.CommentController = CommentController;
__decorate([
    openapi.ApiOperation({ summary: "Creates a new comment when you are logged in" }),
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Comment created successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'The supplied data was invalid' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Car not found' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_dto_1.CreateCommentDto, String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "createComment", null);
__decorate([
    openapi.ApiOperation({ summary: "Retrieves all comments by the carId" }),
    (0, common_1.Get)(':carId'),
    (0, swagger_1.ApiParam)({ name: 'carId', type: 'number', description: 'The unique ID of the car' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of comments for the car' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid car ID format' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Car not found' }),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Param)('carId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getComments", null);
__decorate([
    openapi.ApiOperation({ summary: "Deletes a user's comment by ID" }),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        description: 'The unique ID of the comment',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Comment deleted successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid ID format' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'User lacks permission to delete the comment' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Comment not found' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('user-id')),
    __param(2, (0, common_1.Headers)('admin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "deleteComment", null);
exports.CommentController = CommentController = __decorate([
    (0, common_1.Controller)('comments'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [comment_service_1.CommentService,
        carcatalog_service_1.CarcatalogService])
], CommentController);
//# sourceMappingURL=comment.controller.js.map