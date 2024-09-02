import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Issue } from './schemas/issue.schema';

import { validate } from 'class-validator';
import { CreateIssueDto } from 'src/dto/create-issue.dto';
import { HttpService } from '@nestjs/axios';
import * as crypto from 'crypto';
import mongoose from 'mongoose';
import { RmqRecord } from '@nestjs/microservices';


@Injectable()
export class IssueService {
    constructor(
        @InjectModel(Issue.name) private issueModel: mongoose.Model<Issue>,   
        private httpService: HttpService,
    ) {}

    public async addIssue(issue:CreateIssueDto) {
        const issueObj = new this.issueModel({
            title: issue.title,
            description: issue.description
        });

        const issueResponse = await issueObj.save();
        
        return issueResponse;
    }
    public async getAllIssues() {
        try {
            const response = await this.issueModel.find();
            return response;
        } catch (error) {
            throw new HttpException(
                { status: error.response?.status || HttpStatus.BAD_REQUEST, message: 'Issue not found' },
                error.response?.status || HttpStatus.BAD_REQUEST
            );
        }

    }
    public async getIssue(issueId: number) {
        try {
            const response = await this.issueModel.find({_id:issueId});
            return response;
        } catch (error) {
            throw new HttpException(
                { status: error.response?.status || HttpStatus.BAD_REQUEST, message: 'Issue not found' },
                error.response?.status || HttpStatus.BAD_REQUEST
            );
        }
    }
    async updateIsuue(issue,issueId){
       
        let exists=await this.getIssue(issueId)
        if(exists.length==0){
            return 0
        }
        let response = await this.issueModel.find({_id:issueId});
        let issueObj=response[0]
        if(issue.title!=undefined){
            issueObj.title=issue.title
        }
        if(issue.description!=undefined){
            issueObj.description=issue.description
        }

        const issueResponse = await issueObj.save();
        return issueResponse


    }

    async deleteIssueById(issueId:number){
        
        const issueObj=await this.issueModel.findOne({_id:issueId})
        if(issueObj==null){
            throw new BadRequestException('Issue doesnot exists.');
        }
        const response=await issueObj.deleteOne()
        return response
    }
   }
