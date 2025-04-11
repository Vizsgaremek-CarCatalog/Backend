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
exports.CarcatalogService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CarcatalogService = class CarcatalogService {
    constructor(db) {
        this.db = db;
    }
    create(createCarcatalogDto) {
        return this.db.cars.create({
            data: createCarcatalogDto
        });
    }
    findAll() {
        return this.db.cars.findMany();
    }
    async findOne(id) {
        if (isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid ID: ID must be a positive number');
        }
        const car = await this.db.cars.findUnique({
            where: { id },
        });
        if (!car) {
            throw new common_1.NotFoundException(`Car with ID ${id} not found`);
        }
        return car;
    }
    async update(id, updateCarcatalogDto) {
        if (isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid ID: ID must be a positive number');
        }
        try {
            const existingCar = await this.db.cars.findUnique({
                where: { id },
            });
            if (!existingCar) {
                throw new common_1.NotFoundException(`Car with ID ${id} not found`);
            }
            return await this.db.cars.update({
                data: updateCarcatalogDto,
                where: { id },
            });
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException || error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to update car data');
        }
    }
    async remove(id) {
        if (isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid ID: ID must be a positive number');
        }
        try {
            const car = await this.db.cars.findUnique({
                where: { id },
            });
            if (!car) {
                throw new common_1.NotFoundException(`Car with ID ${id} not found`);
            }
            await this.db.cars.delete({
                where: { id },
            });
            return { message: 'Car deleted successfully' };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException || error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to delete car');
        }
    }
};
exports.CarcatalogService = CarcatalogService;
exports.CarcatalogService = CarcatalogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarcatalogService);
//# sourceMappingURL=carcatalog.service.js.map