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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CommentService = class CommentService {
    constructor(db) {
        this.db = db;
    }
    async create(createCommentDto, userId) {
        return this.db.comment.create({
            data: {
                text: createCommentDto.text,
                car: { connect: { id: createCommentDto.carId } },
                user: { connect: { id: userId } },
            },
        });
    }
    async findAll(carId) {
        const carIdInt = parseInt(carId.toString(), 10);
        if (isNaN(carIdInt)) {
            throw new common_1.BadRequestException('Invalid carId format');
        }
        return this.db.comment.findMany({
            where: { carId: carIdInt },
            include: { user: { select: { email: true } } },
        });
    }
    async findOne(id) {
        return this.db.comment.findUnique({
            where: { id },
        });
    }
    async remove(id) {
        try {
            return await this.db.comment.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Comment not found');
            }
            throw error;
        }
    }
    async checkIfAdmin(userId) {
        const user = await this.db.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user.role === 'ADMIN';
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentService);
//# sourceMappingURL=comment.service.js.map