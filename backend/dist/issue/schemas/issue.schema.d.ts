export declare class Issue {
    title: string;
    description: string;
}
export declare const IssueSchema: import("mongoose").Schema<Issue, import("mongoose").Model<Issue, any, any, any, import("mongoose").Document<unknown, any, Issue> & Issue & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Issue, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Issue>> & import("mongoose").FlatRecord<Issue> & {
    _id: import("mongoose").Types.ObjectId;
}>;
