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
exports.IssueService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const issue_schema_1 = require("./schemas/issue.schema");
const axios_1 = require("@nestjs/axios");
const mongoose_2 = require("mongoose");
let IssueService = class IssueService {
    constructor(issueModel, httpService) {
        this.issueModel = issueModel;
        this.httpService = httpService;
    }
    async addIssue(issue) {
        const issueObj = new this.issueModel({
            title: issue.title,
            description: issue.description
        });
        const issueResponse = await issueObj.save();
        return issueResponse;
    }
    async getAllIssues() {
        try {
            const response = await this.issueModel.find();
            return response;
        }
        catch (error) {
            throw new common_1.HttpException({ status: error.response?.status || common_1.HttpStatus.BAD_REQUEST, message: 'Issue not found' }, error.response?.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getIssue(issueId) {
        try {
            const response = await this.issueModel.find({ _id: issueId });
            return response;
        }
        catch (error) {
            throw new common_1.HttpException({ status: error.response?.status || common_1.HttpStatus.BAD_REQUEST, message: 'Issue not found' }, error.response?.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateIsuue(issue, issueId) {
        let exists = await this.getIssue(issueId);
        if (exists.length == 0) {
            return 0;
        }
        let response = await this.issueModel.find({ _id: issueId });
        let issueObj = response[0];
        if (issue.title != undefined) {
            issueObj.title = issue.title;
        }
        if (issue.description != undefined) {
            issueObj.description = issue.description;
        }
        const issueResponse = await issueObj.save();
        return issueResponse;
    }
    async deleteIssueById(issueId) {
        const issueObj = await this.issueModel.findOne({ _id: issueId });
        if (issueObj == null) {
            throw new common_1.BadRequestException('Issue doesnot exists.');
        }
        const response = await issueObj.deleteOne();
        return response;
    }
};
exports.IssueService = IssueService;
exports.IssueService = IssueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(issue_schema_1.Issue.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, axios_1.HttpService])
], IssueService);
//# sourceMappingURL=issue.service.js.map