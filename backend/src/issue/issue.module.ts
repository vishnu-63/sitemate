import { Module } from '@nestjs/common';
import { IssueController } from './issue.controller';
import { IssueService } from './issue.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IssueSchema } from './schemas/issue.schema';
import { HttpModule } from '@nestjs/axios';

import {FileSystemConfig,fileSystemConfig,} from 'src/configs/file-system.config'
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Issue', schema: IssueSchema }]),
    
    HttpModule],
  controllers: [IssueController],
  providers: [IssueService],
  exports: [IssueService]
})
export class IssueModule {}
