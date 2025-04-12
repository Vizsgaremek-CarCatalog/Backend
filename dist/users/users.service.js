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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const argon2 = require("argon2");
const prisma_service_1 = require("../prisma.service");
const config_1 = require("@nestjs/config");
let UsersService = class UsersService {
    constructor(prisma, db, configService) {
        this.prisma = prisma;
        this.db = db;
        this.configService = configService;
    }
    async create(createUserDto) {
        if (createUserDto.role === 'ADMIN') {
            const adminPassword = this.configService.get('ADMIN_PASSWORD');
            if (createUserDto.adminPassword !== adminPassword) {
                throw new Error('Invalid admin password');
            }
        }
        const hashedPw = await argon2.hash(createUserDto.password);
        const user = await this.db.user.create({
            data: {
                email: createUserDto.email,
                password: hashedPw,
                role: createUserDto.role || 'USER',
            },
        });
        delete user.password;
        return user;
    }
    findAll() {
        return this.db.user.findMany();
    }
    findOne(id) {
        return this.db.user.findUnique({ where: { id } });
    }
    async update(id, updateUserDto) {
        if (isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid ID: ID must be a positive number');
        }
        try {
            const existingUser = await this.db.user.findUnique({
                where: { id },
            });
            if (!existingUser) {
                throw new common_1.NotFoundException(`User with ID ${id} not found`);
            }
            const data = { ...updateUserDto };
            if (data.password) {
                data.password = await argon2.hash(data.password);
            }
            return await this.db.user.update({
                data,
                where: { id },
            });
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException || error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to update user data');
        }
    }
    async getUserByToken(token) {
        const tokenObj = await this.db.token.findUnique({
            where: { token },
            include: { user: true },
        });
        if (!tokenObj)
            return null;
        const user = tokenObj.user;
        delete user.password;
        return user;
    }
    async getUserFavorites(userId) {
        const favorites = await this.prisma.favorite.findMany({
            where: { userId },
            include: { car: true },
        });
        return favorites.map((fav) => fav.car);
    }
    async addFavorite(userId, carId) {
        const favorite = await this.prisma.favorite.create({
            data: {
                userId,
                carId,
            },
            include: { car: true },
        });
        return favorite.car;
    }
    async removeFavorite(userId, carId) {
        await this.prisma.favorite.deleteMany({
            where: {
                userId,
                carId,
            },
        });
    }
    async changePassword(userId, currentPassword, newPassword, confirmPassword) {
        if (newPassword !== confirmPassword) {
            throw new Error('Passwords do not match');
        }
        const user = await this.db.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await argon2.verify(user.password, currentPassword);
        if (!isPasswordValid) {
            throw new Error('Invalid current password');
        }
        const hashedNewPassword = await argon2.hash(newPassword);
        await this.db.user.update({
            where: { id: userId },
            data: { password: hashedNewPassword },
        });
        return true;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        prisma_service_1.PrismaService,
        config_1.ConfigService])
], UsersService);
//# sourceMappingURL=users.service.js.map