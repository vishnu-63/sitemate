"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const cors = require('cors');
    app.use(cors({ origin: 'http://localhost:3003' }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map