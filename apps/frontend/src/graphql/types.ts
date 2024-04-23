import type * as Types from "./schema.types";

export type ListReportsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ListReportsQuery = {
  reports: Array<
    Pick<Types.Report, "id" | "details" | "contentType"> & {
      reporter?: Types.Maybe<
        Pick<Types.OpenbookAuthUser, "id" | "email"> & {
          profile?: Types.Maybe<
            Pick<Types.OpenbookAuthUserprofile, "name" | "lastName">
          >;
        }
      >;
    }
  >;
};

export type ViewReportQueryVariables = Types.Exact<{
  id: Types.Scalars["UUID"]["input"];
}>;

export type ViewReportQuery = {
  report: Pick<Types.Report, "id" | "details" | "contentType" | "createdAt"> & {
    reporter?: Types.Maybe<
      Pick<Types.OpenbookAuthUser, "id" | "email"> & {
        profile?: Types.Maybe<
          Pick<Types.OpenbookAuthUserprofile, "name" | "lastName" | "avatar">
        >;
      }
    >;
    reportedPost?: Types.Maybe<
      Pick<
        Types.OpenbookPostsPost,
        "id" | "title" | "text" | "status" | "created"
      > & {
        author: Pick<Types.OpenbookAuthUser, "id" | "email"> & {
          profile?: Types.Maybe<
            Pick<Types.OpenbookAuthUserprofile, "name" | "lastName" | "avatar">
          >;
        };
      }
    >;
  };
};
