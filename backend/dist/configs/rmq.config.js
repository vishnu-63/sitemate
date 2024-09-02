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
exports.rmqConfig = exports.RMQConfig = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
let RMQConfig = class RMQConfig {
    constructor(values) {
        if (typeof values === 'undefined') {
            this.host = process.env.RMQ_HOST || 'localhost';
            this.port = parseInt(process.env.RMQ_PORT || '5672');
        }
        else {
            this.host = values.host;
            this.port = values.port;
        }
    }
};
exports.RMQConfig = RMQConfig;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RMQConfig.prototype, "host", void 0);
__decorate([
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(65535),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], RMQConfig.prototype, "port", void 0);
exports.RMQConfig = RMQConfig = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], RMQConfig);
exports.rmqConfig = new RMQConfig();
const validationResult = (0, class_validator_1.validateSync)(exports.rmqConfig);
if (validationResult.length > 0) {
    console.log(validationResult);
    throw new Error();
}
//# sourceMappingURL=rmq.config.js.map