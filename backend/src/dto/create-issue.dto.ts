import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIssueDto {
  

  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
