import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { IssueService } from './issue.service';
import { Issue } from './schemas/issue.schema';
import { CreateIssueDto } from 'src/dto/create-issue.dto';
import { Response } from 'express';


@Controller('api')
export class IssueController {
    constructor(private issueService:IssueService){}
    @Post("/issue")
    async createUser(@Body() issue:CreateIssueDto): Promise<Issue> {
        const res= await this.issueService.addIssue(issue);
        return res
    }

    @Get("/issue/:issueId")
    async getIssueDetails(@Param('issueId') issueId:number,@Res() response:Response){
        let issueObj=await this.issueService.getIssue(issueId)
        if(issueObj.length==0){
            return response.status(HttpStatus.NOT_FOUND).json({"message":"Not Found"});
        }
        
        return response.status(HttpStatus.OK).json(issueObj);
    }


    @Get("/issues")
    async getAllIssues(@Res() response:Response){
        let issueObj=await this.issueService.getAllIssues()
        if(issueObj.length==0){
            return response.status(HttpStatus.NOT_FOUND).json({"message":"Not Found"});
        }
        
        return response.status(HttpStatus.OK).json(issueObj);
    }

    @Put('/issue/:issueId')
    async updateIssue(@Param('issueId') issueId:number,@Body() issue:CreateIssueDto,@Res() response:Response) {
        const issueObj=await this.issueService.updateIsuue(issue,issueId)
        if(!issueObj){
            return response.status(HttpStatus.BAD_REQUEST).json({"message":"Unable to Update issue Due to Not Existence"});
        }
        return response.status(HttpStatus.OK).json(issueObj)
    }

    @Delete("/issue/:issueId")
    async deleteAvatar(@Param('issueId') issueId:number,@Res() response:Response) {
        const issueObj=await this.issueService.deleteIssueById(issueId)
        if(issueObj.deletedCount==0){
            return response.status(HttpStatus.BAD_REQUEST).json({"message":"Unable to delete issue Due to Not Existence"});
        }
        return response.status(HttpStatus.OK).json({"message":"Issue has been Deleted Successfully"})

    }
}
