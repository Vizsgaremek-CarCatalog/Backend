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
    constructor(db, configService) {
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
        try {
            return await this.db.user.update({
                data: updateUserDto,
                where: { id },
            });
        }
        catch {
            return undefined;
        }
    }
    async remove(id) {
        try {
            await this.db.user.delete({
                where: { id },
            });
            return true;
        }
        catch {
            return false;
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
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], UsersService);
//# sourceMappingURL=users.service.js.map