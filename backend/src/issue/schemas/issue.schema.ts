import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Issue{ 
    @Prop({type:String,required: true })
    title:string

    @Prop({type:String, required: true})
    description:string

}

export const IssueSchema = SchemaFactory.createForClass(Issue);