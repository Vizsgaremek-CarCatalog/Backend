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
exports.CarcatalogController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const carcatalog_service_1 = require("./carcatalog.service");
const create_carcatalog_dto_1 = require("./dto/create-carcatalog.dto");
const update_carcatalog_dto_1 = require("./dto/update-carcatalog.dto");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
let CarcatalogController = class CarcatalogController {
    constructor(carcatalogService) {
        this.carcatalogService = carcatalogService;
    }
    create(createCarcatalogDto, file) {
        createCarcatalogDto.mass = Number(createCarcatalogDto.mass);
        if (isNaN(createCarcatalogDto.mass)) {
            throw new common_1.BadRequestException('Mass must be a valid number');
        }
        const imageUrl = file ? `http://localhost:3000/uploads/${file.filename}` : null;
        return this.carcatalogService.create({ ...createCarcatalogDto, imageUrl });
    }
    findAll() {
        return this.carcatalogService.findAll();
    }
    findOne(id) {
        return this.carcatalogService.findOne(+id);
    }
    update(id, updateCarcatalogDto) {
        return this.carcatalogService.update(+id, updateCarcatalogDto);
    }
    remove(id) {
        return this.carcatalogService.remove(+id);
    }
};
exports.CarcatalogController = CarcatalogController;
CarcatalogController.storage = (0, multer_1.diskStorage)({
    destination: './uploads',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + (0, path_1.extname)(file.originalname));
    },
});
__decorate([
    openapi.ApiOperation({ summary: "Creates a new user" }),
    (0, common_1.Post)(),
    (0, swagger_1.ApiParam)({
        name: "id",
        type: "number",
        description: 'The unique ID of the user'
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', { storage: CarcatalogController.storage })),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Car created successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'The supplied data was invalid' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carcatalog_dto_1.CreateCarcatalogDto, Object]),
    __metadata("design:returntype", void 0)
], CarcatalogController.prototype, "create", null);
__decorate([
    openapi.ApiOperation({ summary: "Retrieves all car entries in the catalog" }),
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retrive all cars' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'The supplied data was invalid' }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarcatalogController.prototype, "findAll", null);
__decorate([
    openapi.ApiOperation({ summary: "Retrieves a specific car by ID" }),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({
        name: "id",
        type: "number",
        description: 'The unique ID of the car'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retrive a specific car' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Car not found or invalid ID' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarcatalogController.prototype, "findOne", null);
__decorate([
    openapi.ApiOperation({ summary: "Modifies the details of an existing car" }),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({
        name: "id",
        type: "number",
        description: 'The unique ID of the car'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The modified data of the car' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'The supplied data was invalid' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_carcatalog_dto_1.UpdateCarcatalogDto]),
    __metadata("design:returntype", void 0)
], CarcatalogController.prototype, "update", null);
__decorate([
    openapi.ApiOperation({ summary: "Deletes a car entry by ID" }),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'The unique ID of the car'
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'int', description: 'The unique ID of the car' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Car deleted successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Car not found or invalid ID' }),
    openapi.ApiResponse({ status: 200, type: Boolean }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarcatalogController.prototype, "remove", null);
exports.CarcatalogController = CarcatalogController = __decorate([
    (0, common_1.Controller)('carcatalog'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [carcatalog_service_1.CarcatalogService])
], CarcatalogController);
//# sourceMappingURL=carcatalog.controller.js.map