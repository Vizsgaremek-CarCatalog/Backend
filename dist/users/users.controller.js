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
exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const carcatalog_service_1 = require("../carcatalog/carcatalog.service");
let UsersController = class UsersController {
    constructor(usersService, carService) {
        this.usersService = usersService;
        this.carService = carService;
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    findAll(req) {
        const user = req.user;
        console.log(user);
        return this.usersService.findAll();
    }
    findOne(id) {
        return this.usersService.findOne(+id);
    }
    update(id, updateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }
    remove(id) {
        return this.usersService.update + id;
    }
    async getFavorites(userId) {
        const id = parseInt(userId);
        if (isNaN(id)) {
            throw new common_1.HttpException('Unauthorized or invalid user ID', common_1.HttpStatus.UNAUTHORIZED);
        }
        return this.usersService.getUserFavorites(id);
    }
    async addFavorite(userId, addFavoriteDto) {
        const id = parseInt(userId);
        if (isNaN(id)) {
            throw new common_1.HttpException('Unauthorized or invalid user ID', common_1.HttpStatus.UNAUTHORIZED);
        }
        try {
            return await this.usersService.addFavorite(id, addFavoriteDto.carId);
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.HttpException('Car already in favorites', common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException('Failed to add favorite', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async removeFavorite(userId, carId) {
        const id = parseInt(userId);
        const cid = parseInt(carId);
        if (isNaN(id) || isNaN(cid)) {
            throw new common_1.HttpException('Unauthorized or invalid IDs', common_1.HttpStatus.UNAUTHORIZED);
        }
        const car = await this.carService.findOne(cid);
        if (!car) {
            throw new common_1.NotFoundException('Car not found');
        }
        await this.usersService.removeFavorite(id, cid);
        return { message: 'Car successfully removed from favorites.' };
    }
    async changePassword(userId, changePasswordDto) {
        const id = parseInt(userId);
        if (isNaN(id)) {
            throw new common_1.HttpException('Unauthorized or invalid user ID', common_1.HttpStatus.UNAUTHORIZED);
        }
        const user = await this.usersService.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const result = await this.usersService.changePassword(id, changePasswordDto.currentPassword, changePasswordDto.newPassword, changePasswordDto.confirmPassword);
        if (!result) {
            throw new common_1.BadRequestException('Failed to change password');
        }
        return { message: 'Password changed successfully' };
    }
};
exports.UsersController = UsersController;
__decorate([
    openapi.ApiOperation({ summary: "Creates a new user for the website" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'user created successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'The supplied data was invalid' }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    openapi.ApiOperation({ summary: "Retrieves all users" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retrive all users' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'The supplied data was invalid' }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('bearer')),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    openapi.ApiOperation({ summary: "Retrieves a specific user by ID" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        type: "number",
        description: 'The unique ID of the user'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retrive a specific user' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'User not found or invalid ID' }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    openapi.ApiOperation({ summary: "Modifies the details of an existing user" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        type: "number",
        description: 'The unique ID of the user'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The modified data of the user' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'The supplied data was invalid' }),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    openapi.ApiOperation({ summary: "Deletes a user entry by ID" }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'The unique ID of the user'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User deleted successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'User not found or invalid ID' }),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
__decorate([
    openapi.ApiOperation({ summary: "Get a user favorites by ID" }),
    (0, swagger_1.ApiParam)({ name: 'userId', type: 'number', description: 'The unique ID of the user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully retrieved favorite cars' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Unauthorized or invalid user ID' }),
    (0, common_1.Get)(':userId/favorites'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getFavorites", null);
__decorate([
    openapi.ApiOperation({ summary: "Post a user favorite by ID" }),
    (0, swagger_1.ApiParam)({ name: 'userId', type: 'number', description: 'The unique ID of the user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Car successfully added to favorites' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Unauthorized, invalid ID, or car already in favorites' }),
    (0, common_1.Post)(':userId/favorites'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_user_dto_1.AddFavoriteDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addFavorite", null);
__decorate([
    openapi.ApiOperation({ summary: "Deletes a user favorite by ID" }),
    (0, common_1.Delete)(':userId/favorites/:carId'),
    (0, swagger_1.ApiParam)({ name: 'userId', type: 'number', description: 'The unique ID of the user' }),
    (0, swagger_1.ApiParam)({ name: 'carId', type: 'number', description: 'The unique ID of the car' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Car successfully removed from favorites' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Unauthorized or invalid IDs' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Car not found' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('carId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeFavorite", null);
__decorate([
    openapi.ApiOperation({ summary: "Update a user password by ID" }),
    (0, common_1.Patch)(':id/change-password'),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'The unique ID of the user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Password changed successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid current password or new password' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'User not found' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_user_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changePassword", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        carcatalog_service_1.CarcatalogService])
], UsersController);
//# sourceMappingURL=users.controller.js.map