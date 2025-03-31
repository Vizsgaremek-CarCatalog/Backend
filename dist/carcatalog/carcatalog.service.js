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
    findOne(id) {
        return this.db.cars.findUnique({ where: { id } });
    }
    async update(id, updateCarcatalogDto) {
        try {
            return await this.db.cars.update({
                data: updateCarcatalogDto,
                where: { id }
            });
        }
        catch {
            return undefined;
        }
    }
    async remove(id) {
        try {
            await this.db.cars.delete({
                where: { id }
            });
            return true;
        }
        catch {
            return false;
        }
        ;
    }
};
exports.CarcatalogService = CarcatalogService;
exports.CarcatalogService = CarcatalogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarcatalogService);
//# sourceMappingURL=carcatalog.service.js.map