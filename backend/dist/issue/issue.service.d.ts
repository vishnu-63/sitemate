import { Issue } from './schemas/issue.schema';
import { CreateIssueDto } from 'src/dto/create-issue.dto';
import { HttpService } from '@nestjs/axios';
import mongoose from 'mongoose';
export declare class IssueService {
    private issueModel;
    private httpService;
    constructor(issueModel: mongoose.Model<Issue>, httpService: HttpService);
    addIssue(issue: CreateIssueDto): Promise<mongoose.Document<unknown, {}, Issue> & Issue & {
        _id: mongoose.Types.ObjectId;
    }>;
    getAllIssues(): Promise<(mongoose.Document<unknown, {}, Issue> & Issue & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    getIssue(issueId: number): Promise<(mongoose.Document<unknown, {}, Issue> & Issue & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    updateIsuue(issue: any, issueId: any): Promise<0 | (mongoose.Document<unknown, {}, Issue> & Issue & {
        _id: mongoose.Types.ObjectId;
    })>;
    deleteIssueById(issueId: number): Promise<mongoose.mongo.DeleteResult>;
}
