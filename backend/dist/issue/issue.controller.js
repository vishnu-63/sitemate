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
exports.IssueController = void 0;
const common_1 = require("@nestjs/common");
const issue_service_1 = require("./issue.service");
const create_issue_dto_1 = require("../dto/create-issue.dto");
let IssueController = class IssueController {
    constructor(issueService) {
        this.issueService = issueService;
    }
    async createUser(issue) {
        const res = await this.issueService.addIssue(issue);
        return res;
    }
    async getIssueDetails(issueId, response) {
        let issueObj = await this.issueService.getIssue(issueId);
        if (issueObj.length == 0) {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({ "message": "Not Found" });
        }
        return response.status(common_1.HttpStatus.OK).json(issueObj);
    }
    async getAllIssues(response) {
        let issueObj = await this.issueService.getAllIssues();
        if (issueObj.length == 0) {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({ "message": "Not Found" });
        }
        return response.status(common_1.HttpStatus.OK).json(issueObj);
    }
    async updateIssue(issueId, issue, response) {
        const issueObj = await this.issueService.updateIsuue(issue, issueId);
        if (!issueObj) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ "message": "Unable to Update issue Due to Not Existence" });
        }
        return response.status(common_1.HttpStatus.OK).json(issueObj);
    }
    async deleteAvatar(issueId, response) {
        const issueObj = await this.issueService.deleteIssueById(issueId);
        if (issueObj.deletedCount == 0) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ "message": "Unable to delete issue Due to Not Existence" });
        }
        return response.status(common_1.HttpStatus.OK).json({ "message": "Issue has been Deleted Successfully" });
    }
};
exports.IssueController = IssueController;
__decorate([
    (0, common_1.Post)("/issue"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_issue_dto_1.CreateIssueDto]),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)("/issue/:issueId"),
    __param(0, (0, common_1.Param)('issueId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "getIssueDetails", null);
__decorate([
    (0, common_1.Get)("/issues"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "getAllIssues", null);
__decorate([
    (0, common_1.Put)('/issue/:issueId'),
    __param(0, (0, common_1.Param)('issueId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_issue_dto_1.CreateIssueDto, Object]),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "updateIssue", null);
__decorate([
    (0, common_1.Delete)("/issue/:issueId"),
    __param(0, (0, common_1.Param)('issueId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "deleteAvatar", null);
exports.IssueController = IssueController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [issue_service_1.IssueService])
], IssueController);
//# sourceMappingURL=issue.controller.js.map