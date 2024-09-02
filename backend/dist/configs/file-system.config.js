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
exports.fileSystemConfig = exports.FileSystemConfig = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
let FileSystemConfig = class FileSystemConfig {
    constructor(values) {
        if (typeof values === 'undefined') {
            this.avatarStoragePath =
                process.env.FILE_SYSTEM_AVATAR_STORAGE_PATH || 'avatar';
        }
        else {
            this.avatarStoragePath = values.avatarStoragePath;
        }
    }
};
exports.FileSystemConfig = FileSystemConfig;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FileSystemConfig.prototype, "avatarStoragePath", void 0);
exports.FileSystemConfig = FileSystemConfig = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], FileSystemConfig);
exports.fileSystemConfig = new FileSystemConfig();
const validationResult = (0, class_validator_1.validateSync)(exports.fileSystemConfig);
if (validationResult.length > 0) {
    console.log(validationResult);
    throw new Error();
}
//# sourceMappingURL=file-system.config.js.map