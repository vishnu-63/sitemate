import { IssueService } from './issue.service';
import { Issue } from './schemas/issue.schema';
import { CreateIssueDto } from 'src/dto/create-issue.dto';
import { Response } from 'express';
export declare class IssueController {
    private issueService;
    constructor(issueService: IssueService);
    createUser(issue: CreateIssueDto): Promise<Issue>;
    getIssueDetails(issueId: number, response: Response): Promise<Response<any, Record<string, any>>>;
    getAllIssues(response: Response): Promise<Response<any, Record<string, any>>>;
    updateIssue(issueId: number, issue: CreateIssueDto, response: Response): Promise<Response<any, Record<string, any>>>;
    deleteAvatar(issueId: number, response: Response): Promise<Response<any, Record<string, any>>>;
}
