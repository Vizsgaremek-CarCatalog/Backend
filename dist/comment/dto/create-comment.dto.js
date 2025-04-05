"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateCommentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { carId: { required: true, type: () => Number }, text: { required: true, type: () => String } };
    }
}
exports.CreateCommentDto = CreateCommentDto;
//# sourceMappingURL=create-comment.dto.js.map