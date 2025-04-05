"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const fs_1 = require("fs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    const uploadDir = (0, path_1.join)(__dirname, '..', 'uploads');
    if (!(0, fs_1.existsSync)(uploadDir)) {
        (0, fs_1.mkdirSync)(uploadDir);
    }
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'uploads'), { prefix: '/uploads' });
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('ejs');
    const docConfig = new swagger_1.DocumentBuilder()
        .setTitle('Phone app')
        .addBearerAuth()
        .build();
    swagger_1.SwaggerModule.setup('apidoc', app, () => swagger_1.SwaggerModule.createDocument(app, docConfig));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map