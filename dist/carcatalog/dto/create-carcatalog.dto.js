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
exports.CreateCarcatalogDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCarcatalogDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { vehicle: { required: true, type: () => String }, type: { required: true, type: () => String }, color: { required: true, type: () => String }, fuel: { required: true, type: () => String }, manufacturer: { required: true, type: () => String }, mass: { required: true, type: () => Number }, imageUrl: { required: false, type: () => String } };
    }
}
exports.CreateCarcatalogDto = CreateCarcatalogDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: "Mazda"
    }),
    __metadata("design:type", String)
], CreateCarcatalogDto.prototype, "vehicle", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: "SUV"
    }),
    __metadata("design:type", String)
], CreateCarcatalogDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: "red"
    }),
    __metadata("design:type", String)
], CreateCarcatalogDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: "gasoline"
    }),
    __metadata("design:type", String)
], CreateCarcatalogDto.prototype, "fuel", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: "Kia"
    }),
    __metadata("design:type", String)
], CreateCarcatalogDto.prototype, "manufacturer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 1500
    }),
    __metadata("design:type", Number)
], CreateCarcatalogDto.prototype, "mass", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCarcatalogDto.prototype, "imageUrl", void 0);
//# sourceMappingURL=create-carcatalog.dto.js.map