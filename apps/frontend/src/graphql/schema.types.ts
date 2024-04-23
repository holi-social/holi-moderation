export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: string; output: string };
  UUID: { input: string; output: string };
  geography: { input: string; output: string };
  geometry: { input: string; output: string };
  smallint: { input: string; output: string };
  timestamptz: { input: string; output: string };
  uuid: { input: string; output: string };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

export type ContentType = "CHAT_MESSAGE" | "COMMENT" | "POST";

export type CreateReport = {
  contentId: Scalars["UUID"]["input"];
  contentType: ContentType;
  createdAt: Scalars["DateTime"]["input"];
  details: Scalars["String"]["input"];
  reporterId: Scalars["UUID"]["input"];
  updatedAt: Scalars["DateTime"]["input"];
};

/** ordering argument of a cursor */
export type CursorOrdering =
  /** ascending ordering of the cursor */
  | "ASC"
  /** descending ordering of the cursor */
  | "DESC";

export type GeographyCastExp = {
  geometry?: InputMaybe<GeometryComparisonExp>;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type GeographyComparisonExp = {
  _cast?: InputMaybe<GeographyCastExp>;
  _eq?: InputMaybe<Scalars["geography"]["input"]>;
  _gt?: InputMaybe<Scalars["geography"]["input"]>;
  _gte?: InputMaybe<Scalars["geography"]["input"]>;
  _in?: InputMaybe<Array<Scalars["geography"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["geography"]["input"]>;
  _lte?: InputMaybe<Scalars["geography"]["input"]>;
  _neq?: InputMaybe<Scalars["geography"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["geography"]["input"]>>;
  /** is the column within a given distance from the given geography value */
  _stDWithin?: InputMaybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _stIntersects?: InputMaybe<Scalars["geography"]["input"]>;
};

export type GeometryCastExp = {
  geography?: InputMaybe<GeographyComparisonExp>;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type GeometryComparisonExp = {
  _cast?: InputMaybe<GeometryCastExp>;
  _eq?: InputMaybe<Scalars["geometry"]["input"]>;
  _gt?: InputMaybe<Scalars["geometry"]["input"]>;
  _gte?: InputMaybe<Scalars["geometry"]["input"]>;
  _in?: InputMaybe<Array<Scalars["geometry"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["geometry"]["input"]>;
  _lte?: InputMaybe<Scalars["geometry"]["input"]>;
  _neq?: InputMaybe<Scalars["geometry"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["geometry"]["input"]>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st3dDWithin?: InputMaybe<St_D_Within_Input>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st3dIntersects?: InputMaybe<Scalars["geometry"]["input"]>;
  /** does the column contain the given geometry value */
  _stContains?: InputMaybe<Scalars["geometry"]["input"]>;
  /** does the column cross the given geometry value */
  _stCrosses?: InputMaybe<Scalars["geometry"]["input"]>;
  /** is the column within a given distance from the given geometry value */
  _stDWithin?: InputMaybe<St_D_Within_Input>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _stEquals?: InputMaybe<Scalars["geometry"]["input"]>;
  /** does the column spatially intersect the given geometry value */
  _stIntersects?: InputMaybe<Scalars["geometry"]["input"]>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _stOverlaps?: InputMaybe<Scalars["geometry"]["input"]>;
  /** does the column have atleast one point in common with the given geometry value */
  _stTouches?: InputMaybe<Scalars["geometry"]["input"]>;
  /** is the column contained in the given geometry value */
  _stWithin?: InputMaybe<Scalars["geometry"]["input"]>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUser = {
  areGuidelinesAccepted: Scalars["Boolean"]["output"];
  connectionsCircleId?: Maybe<Scalars["uuid"]["output"]>;
  /** An array relationship */
  createdSpaces: Array<OpenbookCommunitiesCommunity>;
  /** An aggregate relationship */
  createdSpacesAggregate: OpenbookCommunitiesCommunityAggregate;
  dateJoined: Scalars["timestamptz"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["uuid"]["output"];
  identity?: Maybe<Scalars["String"]["output"]>;
  inviteCount: Scalars["smallint"]["output"];
  isActive: Scalars["Boolean"]["output"];
  isDeleted: Scalars["Boolean"]["output"];
  isEmailVerified: Scalars["Boolean"]["output"];
  isModerator: Scalars["Boolean"]["output"];
  isStaff: Scalars["Boolean"]["output"];
  isSuperuser: Scalars["Boolean"]["output"];
  languageId?: Maybe<Scalars["uuid"]["output"]>;
  lastLogin?: Maybe<Scalars["timestamptz"]["output"]>;
  lastSeenNotificationTimestamp?: Maybe<Scalars["timestamptz"]["output"]>;
  password: Scalars["String"]["output"];
  /** An array relationship */
  posts: Array<OpenbookPostsPost>;
  /** An aggregate relationship */
  postsAggregate: OpenbookPostsPostAggregate;
  /** An object relationship */
  profile?: Maybe<OpenbookAuthUserprofile>;
  translationLanguageId?: Maybe<Scalars["uuid"]["output"]>;
  username: Scalars["String"]["output"];
  visibility: Scalars["String"]["output"];
};

/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserCreatedSpacesArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunityOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};

/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserCreatedSpacesAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunityOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};

/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserPostsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};

/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserPostsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};

/** aggregated selection of "openbook_auth_user" */
export type OpenbookAuthUserAggregate = {
  aggregate?: Maybe<OpenbookAuthUserAggregateFields>;
  nodes: Array<OpenbookAuthUser>;
};

/** aggregate fields of "openbook_auth_user" */
export type OpenbookAuthUserAggregateFields = {
  avg?: Maybe<OpenbookAuthUserAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<OpenbookAuthUserMaxFields>;
  min?: Maybe<OpenbookAuthUserMinFields>;
  stddev?: Maybe<OpenbookAuthUserStddevFields>;
  stddevPop?: Maybe<OpenbookAuthUserStddevPopFields>;
  stddevSamp?: Maybe<OpenbookAuthUserStddevSampFields>;
  sum?: Maybe<OpenbookAuthUserSumFields>;
  varPop?: Maybe<OpenbookAuthUserVarPopFields>;
  varSamp?: Maybe<OpenbookAuthUserVarSampFields>;
  variance?: Maybe<OpenbookAuthUserVarianceFields>;
};

/** aggregate fields of "openbook_auth_user" */
export type OpenbookAuthUserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookAuthUserSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type OpenbookAuthUserAvgFields = {
  inviteCount?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "openbook_auth_user". All fields are combined with a logical 'AND'. */
export type OpenbookAuthUserBoolExp = {
  _and?: InputMaybe<Array<OpenbookAuthUserBoolExp>>;
  _not?: InputMaybe<OpenbookAuthUserBoolExp>;
  _or?: InputMaybe<Array<OpenbookAuthUserBoolExp>>;
  areGuidelinesAccepted?: InputMaybe<BooleanComparisonExp>;
  connectionsCircleId?: InputMaybe<UuidComparisonExp>;
  createdSpaces?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  createdSpacesAggregate?: InputMaybe<OpenbookCommunitiesCommunityAggregateBoolExp>;
  dateJoined?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  identity?: InputMaybe<StringComparisonExp>;
  inviteCount?: InputMaybe<SmallintComparisonExp>;
  isActive?: InputMaybe<BooleanComparisonExp>;
  isDeleted?: InputMaybe<BooleanComparisonExp>;
  isEmailVerified?: InputMaybe<BooleanComparisonExp>;
  isModerator?: InputMaybe<BooleanComparisonExp>;
  isStaff?: InputMaybe<BooleanComparisonExp>;
  isSuperuser?: InputMaybe<BooleanComparisonExp>;
  languageId?: InputMaybe<UuidComparisonExp>;
  lastLogin?: InputMaybe<TimestamptzComparisonExp>;
  lastSeenNotificationTimestamp?: InputMaybe<TimestamptzComparisonExp>;
  password?: InputMaybe<StringComparisonExp>;
  posts?: InputMaybe<OpenbookPostsPostBoolExp>;
  postsAggregate?: InputMaybe<OpenbookPostsPostAggregateBoolExp>;
  profile?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
  translationLanguageId?: InputMaybe<UuidComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
  visibility?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_auth_user" */
export type OpenbookAuthUserConstraint =
  /** unique or primary key constraint on columns "email" */
  | "openbook_auth_user_email_539766fb_uniq"
  /** unique or primary key constraint on columns "identity" */
  | "openbook_auth_user_identity_key"
  /** unique or primary key constraint on columns "id" */
  | "openbook_auth_user_pkey"
  /** unique or primary key constraint on columns "username" */
  | "openbook_auth_user_username_9c72c677_uniq";

/** input type for incrementing numeric columns in table "openbook_auth_user" */
export type OpenbookAuthUserIncInput = {
  inviteCount?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** input type for inserting data into table "openbook_auth_user" */
export type OpenbookAuthUserInsertInput = {
  areGuidelinesAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  connectionsCircleId?: InputMaybe<Scalars["uuid"]["input"]>;
  createdSpaces?: InputMaybe<OpenbookCommunitiesCommunityArrRelInsertInput>;
  dateJoined?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  identity?: InputMaybe<Scalars["String"]["input"]>;
  inviteCount?: InputMaybe<Scalars["smallint"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isEmailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  isModerator?: InputMaybe<Scalars["Boolean"]["input"]>;
  isStaff?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSuperuser?: InputMaybe<Scalars["Boolean"]["input"]>;
  languageId?: InputMaybe<Scalars["uuid"]["input"]>;
  lastLogin?: InputMaybe<Scalars["timestamptz"]["input"]>;
  lastSeenNotificationTimestamp?: InputMaybe<Scalars["timestamptz"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  posts?: InputMaybe<OpenbookPostsPostArrRelInsertInput>;
  profile?: InputMaybe<OpenbookAuthUserprofileObjRelInsertInput>;
  translationLanguageId?: InputMaybe<Scalars["uuid"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  visibility?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type OpenbookAuthUserMaxFields = {
  connectionsCircleId?: Maybe<Scalars["uuid"]["output"]>;
  dateJoined?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  identity?: Maybe<Scalars["String"]["output"]>;
  inviteCount?: Maybe<Scalars["smallint"]["output"]>;
  languageId?: Maybe<Scalars["uuid"]["output"]>;
  lastLogin?: Maybe<Scalars["timestamptz"]["output"]>;
  lastSeenNotificationTimestamp?: Maybe<Scalars["timestamptz"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  translationLanguageId?: Maybe<Scalars["uuid"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
  visibility?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type OpenbookAuthUserMinFields = {
  connectionsCircleId?: Maybe<Scalars["uuid"]["output"]>;
  dateJoined?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  identity?: Maybe<Scalars["String"]["output"]>;
  inviteCount?: Maybe<Scalars["smallint"]["output"]>;
  languageId?: Maybe<Scalars["uuid"]["output"]>;
  lastLogin?: Maybe<Scalars["timestamptz"]["output"]>;
  lastSeenNotificationTimestamp?: Maybe<Scalars["timestamptz"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  translationLanguageId?: Maybe<Scalars["uuid"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
  visibility?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "openbook_auth_user" */
export type OpenbookAuthUserMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookAuthUser>;
};

/** input type for inserting object relation for remote table "openbook_auth_user" */
export type OpenbookAuthUserObjRelInsertInput = {
  data: OpenbookAuthUserInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookAuthUserOnConflict>;
};

/** on_conflict condition type for table "openbook_auth_user" */
export type OpenbookAuthUserOnConflict = {
  constraint: OpenbookAuthUserConstraint;
  updateColumns?: Array<OpenbookAuthUserUpdateColumn>;
  where?: InputMaybe<OpenbookAuthUserBoolExp>;
};

/** Ordering options when selecting data from "openbook_auth_user". */
export type OpenbookAuthUserOrderBy = {
  areGuidelinesAccepted?: InputMaybe<OrderBy>;
  connectionsCircleId?: InputMaybe<OrderBy>;
  createdSpacesAggregate?: InputMaybe<OpenbookCommunitiesCommunityAggregateOrderBy>;
  dateJoined?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  identity?: InputMaybe<OrderBy>;
  inviteCount?: InputMaybe<OrderBy>;
  isActive?: InputMaybe<OrderBy>;
  isDeleted?: InputMaybe<OrderBy>;
  isEmailVerified?: InputMaybe<OrderBy>;
  isModerator?: InputMaybe<OrderBy>;
  isStaff?: InputMaybe<OrderBy>;
  isSuperuser?: InputMaybe<OrderBy>;
  languageId?: InputMaybe<OrderBy>;
  lastLogin?: InputMaybe<OrderBy>;
  lastSeenNotificationTimestamp?: InputMaybe<OrderBy>;
  password?: InputMaybe<OrderBy>;
  postsAggregate?: InputMaybe<OpenbookPostsPostAggregateOrderBy>;
  profile?: InputMaybe<OpenbookAuthUserprofileOrderBy>;
  translationLanguageId?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
  visibility?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_auth_user */
export type OpenbookAuthUserPkColumnsInput = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "openbook_auth_user" */
export type OpenbookAuthUserSelectColumn =
  /** column name */
  | "areGuidelinesAccepted"
  /** column name */
  | "connectionsCircleId"
  /** column name */
  | "dateJoined"
  /** column name */
  | "email"
  /** column name */
  | "id"
  /** column name */
  | "identity"
  /** column name */
  | "inviteCount"
  /** column name */
  | "isActive"
  /** column name */
  | "isDeleted"
  /** column name */
  | "isEmailVerified"
  /** column name */
  | "isModerator"
  /** column name */
  | "isStaff"
  /** column name */
  | "isSuperuser"
  /** column name */
  | "languageId"
  /** column name */
  | "lastLogin"
  /** column name */
  | "lastSeenNotificationTimestamp"
  /** column name */
  | "password"
  /** column name */
  | "translationLanguageId"
  /** column name */
  | "username"
  /** column name */
  | "visibility";

/** input type for updating data in table "openbook_auth_user" */
export type OpenbookAuthUserSetInput = {
  areGuidelinesAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  connectionsCircleId?: InputMaybe<Scalars["uuid"]["input"]>;
  dateJoined?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  identity?: InputMaybe<Scalars["String"]["input"]>;
  inviteCount?: InputMaybe<Scalars["smallint"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isEmailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  isModerator?: InputMaybe<Scalars["Boolean"]["input"]>;
  isStaff?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSuperuser?: InputMaybe<Scalars["Boolean"]["input"]>;
  languageId?: InputMaybe<Scalars["uuid"]["input"]>;
  lastLogin?: InputMaybe<Scalars["timestamptz"]["input"]>;
  lastSeenNotificationTimestamp?: InputMaybe<Scalars["timestamptz"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  translationLanguageId?: InputMaybe<Scalars["uuid"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  visibility?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type OpenbookAuthUserStddevFields = {
  inviteCount?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevPop on columns */
export type OpenbookAuthUserStddevPopFields = {
  inviteCount?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevSamp on columns */
export type OpenbookAuthUserStddevSampFields = {
  inviteCount?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "openbook_auth_user" */
export type OpenbookAuthUserStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookAuthUserStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookAuthUserStreamCursorValueInput = {
  areGuidelinesAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  connectionsCircleId?: InputMaybe<Scalars["uuid"]["input"]>;
  dateJoined?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  identity?: InputMaybe<Scalars["String"]["input"]>;
  inviteCount?: InputMaybe<Scalars["smallint"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isEmailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  isModerator?: InputMaybe<Scalars["Boolean"]["input"]>;
  isStaff?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSuperuser?: InputMaybe<Scalars["Boolean"]["input"]>;
  languageId?: InputMaybe<Scalars["uuid"]["input"]>;
  lastLogin?: InputMaybe<Scalars["timestamptz"]["input"]>;
  lastSeenNotificationTimestamp?: InputMaybe<Scalars["timestamptz"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  translationLanguageId?: InputMaybe<Scalars["uuid"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  visibility?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type OpenbookAuthUserSumFields = {
  inviteCount?: Maybe<Scalars["smallint"]["output"]>;
};

/** update columns of table "openbook_auth_user" */
export type OpenbookAuthUserUpdateColumn =
  /** column name */
  | "areGuidelinesAccepted"
  /** column name */
  | "connectionsCircleId"
  /** column name */
  | "dateJoined"
  /** column name */
  | "email"
  /** column name */
  | "id"
  /** column name */
  | "identity"
  /** column name */
  | "inviteCount"
  /** column name */
  | "isActive"
  /** column name */
  | "isDeleted"
  /** column name */
  | "isEmailVerified"
  /** column name */
  | "isModerator"
  /** column name */
  | "isStaff"
  /** column name */
  | "isSuperuser"
  /** column name */
  | "languageId"
  /** column name */
  | "lastLogin"
  /** column name */
  | "lastSeenNotificationTimestamp"
  /** column name */
  | "password"
  /** column name */
  | "translationLanguageId"
  /** column name */
  | "username"
  /** column name */
  | "visibility";

export type OpenbookAuthUserUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OpenbookAuthUserIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookAuthUserSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookAuthUserBoolExp;
};

/** aggregate varPop on columns */
export type OpenbookAuthUserVarPopFields = {
  inviteCount?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate varSamp on columns */
export type OpenbookAuthUserVarSampFields = {
  inviteCount?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type OpenbookAuthUserVarianceFields = {
  inviteCount?: Maybe<Scalars["Float"]["output"]>;
};

/** columns and relationships of "openbook_auth_userprofile" */
export type OpenbookAuthUserprofile = {
  aboutMe?: Maybe<Scalars["String"]["output"]>;
  avatar?: Maybe<Scalars["String"]["output"]>;
  avatarBlurhash?: Maybe<Scalars["String"]["output"]>;
  communityPostsVisible: Scalars["Boolean"]["output"];
  cover?: Maybe<Scalars["String"]["output"]>;
  coverBlurhash?: Maybe<Scalars["String"]["output"]>;
  engagementLevel?: Maybe<Scalars["String"]["output"]>;
  followersCountVisible: Scalars["Boolean"]["output"];
  geolocation?: Maybe<Scalars["geometry"]["output"]>;
  geolocationId?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  isOfLegalAge: Scalars["Boolean"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  pronouns?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  /** An object relationship */
  user: OpenbookAuthUser;
  userId: Scalars["uuid"]["output"];
};

/** aggregated selection of "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileAggregate = {
  aggregate?: Maybe<OpenbookAuthUserprofileAggregateFields>;
  nodes: Array<OpenbookAuthUserprofile>;
};

/** aggregate fields of "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileAggregateFields = {
  count: Scalars["Int"]["output"];
  max?: Maybe<OpenbookAuthUserprofileMaxFields>;
  min?: Maybe<OpenbookAuthUserprofileMinFields>;
};

/** aggregate fields of "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookAuthUserprofileSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "openbook_auth_userprofile". All fields are combined with a logical 'AND'. */
export type OpenbookAuthUserprofileBoolExp = {
  _and?: InputMaybe<Array<OpenbookAuthUserprofileBoolExp>>;
  _not?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
  _or?: InputMaybe<Array<OpenbookAuthUserprofileBoolExp>>;
  aboutMe?: InputMaybe<StringComparisonExp>;
  avatar?: InputMaybe<StringComparisonExp>;
  avatarBlurhash?: InputMaybe<StringComparisonExp>;
  communityPostsVisible?: InputMaybe<BooleanComparisonExp>;
  cover?: InputMaybe<StringComparisonExp>;
  coverBlurhash?: InputMaybe<StringComparisonExp>;
  engagementLevel?: InputMaybe<StringComparisonExp>;
  followersCountVisible?: InputMaybe<BooleanComparisonExp>;
  geolocation?: InputMaybe<GeometryComparisonExp>;
  geolocationId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isOfLegalAge?: InputMaybe<BooleanComparisonExp>;
  lastName?: InputMaybe<StringComparisonExp>;
  location?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pronouns?: InputMaybe<StringComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<OpenbookAuthUserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileConstraint =
  /** unique or primary key constraint on columns "id" */
  | "openbook_auth_userprofile_pkey"
  /** unique or primary key constraint on columns "user_id" */
  | "openbook_auth_userprofile_user_id_key";

/** input type for inserting data into table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileInsertInput = {
  aboutMe?: InputMaybe<Scalars["String"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  avatarBlurhash?: InputMaybe<Scalars["String"]["input"]>;
  communityPostsVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  cover?: InputMaybe<Scalars["String"]["input"]>;
  coverBlurhash?: InputMaybe<Scalars["String"]["input"]>;
  engagementLevel?: InputMaybe<Scalars["String"]["input"]>;
  followersCountVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  geolocation?: InputMaybe<Scalars["geometry"]["input"]>;
  geolocationId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isOfLegalAge?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  pronouns?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type OpenbookAuthUserprofileMaxFields = {
  aboutMe?: Maybe<Scalars["String"]["output"]>;
  avatar?: Maybe<Scalars["String"]["output"]>;
  avatarBlurhash?: Maybe<Scalars["String"]["output"]>;
  cover?: Maybe<Scalars["String"]["output"]>;
  coverBlurhash?: Maybe<Scalars["String"]["output"]>;
  engagementLevel?: Maybe<Scalars["String"]["output"]>;
  geolocationId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  pronouns?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type OpenbookAuthUserprofileMinFields = {
  aboutMe?: Maybe<Scalars["String"]["output"]>;
  avatar?: Maybe<Scalars["String"]["output"]>;
  avatarBlurhash?: Maybe<Scalars["String"]["output"]>;
  cover?: Maybe<Scalars["String"]["output"]>;
  coverBlurhash?: Maybe<Scalars["String"]["output"]>;
  engagementLevel?: Maybe<Scalars["String"]["output"]>;
  geolocationId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  pronouns?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookAuthUserprofile>;
};

/** input type for inserting object relation for remote table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileObjRelInsertInput = {
  data: OpenbookAuthUserprofileInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookAuthUserprofileOnConflict>;
};

/** on_conflict condition type for table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileOnConflict = {
  constraint: OpenbookAuthUserprofileConstraint;
  updateColumns?: Array<OpenbookAuthUserprofileUpdateColumn>;
  where?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
};

/** Ordering options when selecting data from "openbook_auth_userprofile". */
export type OpenbookAuthUserprofileOrderBy = {
  aboutMe?: InputMaybe<OrderBy>;
  avatar?: InputMaybe<OrderBy>;
  avatarBlurhash?: InputMaybe<OrderBy>;
  communityPostsVisible?: InputMaybe<OrderBy>;
  cover?: InputMaybe<OrderBy>;
  coverBlurhash?: InputMaybe<OrderBy>;
  engagementLevel?: InputMaybe<OrderBy>;
  followersCountVisible?: InputMaybe<OrderBy>;
  geolocation?: InputMaybe<OrderBy>;
  geolocationId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isOfLegalAge?: InputMaybe<OrderBy>;
  lastName?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pronouns?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  user?: InputMaybe<OpenbookAuthUserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_auth_userprofile */
export type OpenbookAuthUserprofilePkColumnsInput = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileSelectColumn =
  /** column name */
  | "aboutMe"
  /** column name */
  | "avatar"
  /** column name */
  | "avatarBlurhash"
  /** column name */
  | "communityPostsVisible"
  /** column name */
  | "cover"
  /** column name */
  | "coverBlurhash"
  /** column name */
  | "engagementLevel"
  /** column name */
  | "followersCountVisible"
  /** column name */
  | "geolocation"
  /** column name */
  | "geolocationId"
  /** column name */
  | "id"
  /** column name */
  | "isOfLegalAge"
  /** column name */
  | "lastName"
  /** column name */
  | "location"
  /** column name */
  | "name"
  /** column name */
  | "pronouns"
  /** column name */
  | "url"
  /** column name */
  | "userId";

/** input type for updating data in table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileSetInput = {
  aboutMe?: InputMaybe<Scalars["String"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  avatarBlurhash?: InputMaybe<Scalars["String"]["input"]>;
  communityPostsVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  cover?: InputMaybe<Scalars["String"]["input"]>;
  coverBlurhash?: InputMaybe<Scalars["String"]["input"]>;
  engagementLevel?: InputMaybe<Scalars["String"]["input"]>;
  followersCountVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  geolocation?: InputMaybe<Scalars["geometry"]["input"]>;
  geolocationId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isOfLegalAge?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  pronouns?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookAuthUserprofileStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookAuthUserprofileStreamCursorValueInput = {
  aboutMe?: InputMaybe<Scalars["String"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  avatarBlurhash?: InputMaybe<Scalars["String"]["input"]>;
  communityPostsVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  cover?: InputMaybe<Scalars["String"]["input"]>;
  coverBlurhash?: InputMaybe<Scalars["String"]["input"]>;
  engagementLevel?: InputMaybe<Scalars["String"]["input"]>;
  followersCountVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  geolocation?: InputMaybe<Scalars["geometry"]["input"]>;
  geolocationId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isOfLegalAge?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  pronouns?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileUpdateColumn =
  /** column name */
  | "aboutMe"
  /** column name */
  | "avatar"
  /** column name */
  | "avatarBlurhash"
  /** column name */
  | "communityPostsVisible"
  /** column name */
  | "cover"
  /** column name */
  | "coverBlurhash"
  /** column name */
  | "engagementLevel"
  /** column name */
  | "followersCountVisible"
  /** column name */
  | "geolocation"
  /** column name */
  | "geolocationId"
  /** column name */
  | "id"
  /** column name */
  | "isOfLegalAge"
  /** column name */
  | "lastName"
  /** column name */
  | "location"
  /** column name */
  | "name"
  /** column name */
  | "pronouns"
  /** column name */
  | "url"
  /** column name */
  | "userId";

export type OpenbookAuthUserprofileUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookAuthUserprofileSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookAuthUserprofileBoolExp;
};

/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunity = {
  avatar?: Maybe<Scalars["String"]["output"]>;
  avatarBlurhash?: Maybe<Scalars["String"]["output"]>;
  color?: Maybe<Scalars["String"]["output"]>;
  contactDescription?: Maybe<Scalars["String"]["output"]>;
  contactEmail?: Maybe<Scalars["String"]["output"]>;
  contactPhone?: Maybe<Scalars["String"]["output"]>;
  cover?: Maybe<Scalars["String"]["output"]>;
  coverBlurhash?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["timestamptz"]["output"];
  /** An object relationship */
  creator?: Maybe<OpenbookAuthUser>;
  creatorId?: Maybe<Scalars["uuid"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  geolocation?: Maybe<Scalars["geometry"]["output"]>;
  id: Scalars["uuid"]["output"];
  invitesEnabled: Scalars["Boolean"]["output"];
  isDeleted: Scalars["Boolean"]["output"];
  location?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  /** An array relationship */
  posts: Array<OpenbookPostsPost>;
  /** An aggregate relationship */
  postsAggregate: OpenbookPostsPostAggregate;
  rules?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
  userAdjective?: Maybe<Scalars["String"]["output"]>;
  usersAdjective?: Maybe<Scalars["String"]["output"]>;
};

/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityPostsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};

/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityPostsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};

/** aggregated selection of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityAggregate = {
  aggregate?: Maybe<OpenbookCommunitiesCommunityAggregateFields>;
  nodes: Array<OpenbookCommunitiesCommunity>;
};

export type OpenbookCommunitiesCommunityAggregateBoolExp = {
  bool_and?: InputMaybe<OpenbookCommunitiesCommunityAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<OpenbookCommunitiesCommunityAggregateBoolExpBool_Or>;
  count?: InputMaybe<OpenbookCommunitiesCommunityAggregateBoolExpCount>;
};

/** aggregate fields of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityAggregateFields = {
  count: Scalars["Int"]["output"];
  max?: Maybe<OpenbookCommunitiesCommunityMaxFields>;
  min?: Maybe<OpenbookCommunitiesCommunityMinFields>;
};

/** aggregate fields of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OpenbookCommunitiesCommunityMaxOrderBy>;
  min?: InputMaybe<OpenbookCommunitiesCommunityMinOrderBy>;
};

/** input type for inserting array relation for remote table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityArrRelInsertInput = {
  data: Array<OpenbookCommunitiesCommunityInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookCommunitiesCommunityOnConflict>;
};

/** Boolean expression to filter rows from the table "openbook_communities_community". All fields are combined with a logical 'AND'. */
export type OpenbookCommunitiesCommunityBoolExp = {
  _and?: InputMaybe<Array<OpenbookCommunitiesCommunityBoolExp>>;
  _not?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  _or?: InputMaybe<Array<OpenbookCommunitiesCommunityBoolExp>>;
  avatar?: InputMaybe<StringComparisonExp>;
  avatarBlurhash?: InputMaybe<StringComparisonExp>;
  color?: InputMaybe<StringComparisonExp>;
  contactDescription?: InputMaybe<StringComparisonExp>;
  contactEmail?: InputMaybe<StringComparisonExp>;
  contactPhone?: InputMaybe<StringComparisonExp>;
  cover?: InputMaybe<StringComparisonExp>;
  coverBlurhash?: InputMaybe<StringComparisonExp>;
  created?: InputMaybe<TimestamptzComparisonExp>;
  creator?: InputMaybe<OpenbookAuthUserBoolExp>;
  creatorId?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  geolocation?: InputMaybe<GeometryComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  invitesEnabled?: InputMaybe<BooleanComparisonExp>;
  isDeleted?: InputMaybe<BooleanComparisonExp>;
  location?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  posts?: InputMaybe<OpenbookPostsPostBoolExp>;
  postsAggregate?: InputMaybe<OpenbookPostsPostAggregateBoolExp>;
  rules?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  userAdjective?: InputMaybe<StringComparisonExp>;
  usersAdjective?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityConstraint =
  /** unique or primary key constraint on columns "name" */
  | "openbook_communities_community_name_key"
  /** unique or primary key constraint on columns "id" */
  | "openbook_communities_community_pkey";

/** input type for inserting data into table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityInsertInput = {
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  avatarBlurhash?: InputMaybe<Scalars["String"]["input"]>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  contactDescription?: InputMaybe<Scalars["String"]["input"]>;
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactPhone?: InputMaybe<Scalars["String"]["input"]>;
  cover?: InputMaybe<Scalars["String"]["input"]>;
  coverBlurhash?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["timestamptz"]["input"]>;
  creator?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  creatorId?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  geolocation?: InputMaybe<Scalars["geometry"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  invitesEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  posts?: InputMaybe<OpenbookPostsPostArrRelInsertInput>;
  rules?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  userAdjective?: InputMaybe<Scalars["String"]["input"]>;
  usersAdjective?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type OpenbookCommunitiesCommunityMaxFields = {
  avatar?: Maybe<Scalars["String"]["output"]>;
  avatarBlurhash?: Maybe<Scalars["String"]["output"]>;
  color?: Maybe<Scalars["String"]["output"]>;
  contactDescription?: Maybe<Scalars["String"]["output"]>;
  contactEmail?: Maybe<Scalars["String"]["output"]>;
  contactPhone?: Maybe<Scalars["String"]["output"]>;
  cover?: Maybe<Scalars["String"]["output"]>;
  coverBlurhash?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["timestamptz"]["output"]>;
  creatorId?: Maybe<Scalars["uuid"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  rules?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  userAdjective?: Maybe<Scalars["String"]["output"]>;
  usersAdjective?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityMaxOrderBy = {
  avatar?: InputMaybe<OrderBy>;
  avatarBlurhash?: InputMaybe<OrderBy>;
  color?: InputMaybe<OrderBy>;
  contactDescription?: InputMaybe<OrderBy>;
  contactEmail?: InputMaybe<OrderBy>;
  contactPhone?: InputMaybe<OrderBy>;
  cover?: InputMaybe<OrderBy>;
  coverBlurhash?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  rules?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  userAdjective?: InputMaybe<OrderBy>;
  usersAdjective?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OpenbookCommunitiesCommunityMinFields = {
  avatar?: Maybe<Scalars["String"]["output"]>;
  avatarBlurhash?: Maybe<Scalars["String"]["output"]>;
  color?: Maybe<Scalars["String"]["output"]>;
  contactDescription?: Maybe<Scalars["String"]["output"]>;
  contactEmail?: Maybe<Scalars["String"]["output"]>;
  contactPhone?: Maybe<Scalars["String"]["output"]>;
  cover?: Maybe<Scalars["String"]["output"]>;
  coverBlurhash?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["timestamptz"]["output"]>;
  creatorId?: Maybe<Scalars["uuid"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  rules?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  userAdjective?: Maybe<Scalars["String"]["output"]>;
  usersAdjective?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityMinOrderBy = {
  avatar?: InputMaybe<OrderBy>;
  avatarBlurhash?: InputMaybe<OrderBy>;
  color?: InputMaybe<OrderBy>;
  contactDescription?: InputMaybe<OrderBy>;
  contactEmail?: InputMaybe<OrderBy>;
  contactPhone?: InputMaybe<OrderBy>;
  cover?: InputMaybe<OrderBy>;
  coverBlurhash?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  rules?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  userAdjective?: InputMaybe<OrderBy>;
  usersAdjective?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookCommunitiesCommunity>;
};

/** input type for inserting object relation for remote table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityObjRelInsertInput = {
  data: OpenbookCommunitiesCommunityInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookCommunitiesCommunityOnConflict>;
};

/** on_conflict condition type for table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityOnConflict = {
  constraint: OpenbookCommunitiesCommunityConstraint;
  updateColumns?: Array<OpenbookCommunitiesCommunityUpdateColumn>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};

/** Ordering options when selecting data from "openbook_communities_community". */
export type OpenbookCommunitiesCommunityOrderBy = {
  avatar?: InputMaybe<OrderBy>;
  avatarBlurhash?: InputMaybe<OrderBy>;
  color?: InputMaybe<OrderBy>;
  contactDescription?: InputMaybe<OrderBy>;
  contactEmail?: InputMaybe<OrderBy>;
  contactPhone?: InputMaybe<OrderBy>;
  cover?: InputMaybe<OrderBy>;
  coverBlurhash?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  creator?: InputMaybe<OpenbookAuthUserOrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  geolocation?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  invitesEnabled?: InputMaybe<OrderBy>;
  isDeleted?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  postsAggregate?: InputMaybe<OpenbookPostsPostAggregateOrderBy>;
  rules?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  userAdjective?: InputMaybe<OrderBy>;
  usersAdjective?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_communities_community */
export type OpenbookCommunitiesCommunityPkColumnsInput = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "openbook_communities_community" */
export type OpenbookCommunitiesCommunitySelectColumn =
  /** column name */
  | "avatar"
  /** column name */
  | "avatarBlurhash"
  /** column name */
  | "color"
  /** column name */
  | "contactDescription"
  /** column name */
  | "contactEmail"
  /** column name */
  | "contactPhone"
  /** column name */
  | "cover"
  /** column name */
  | "coverBlurhash"
  /** column name */
  | "created"
  /** column name */
  | "creatorId"
  /** column name */
  | "description"
  /** column name */
  | "geolocation"
  /** column name */
  | "id"
  /** column name */
  | "invitesEnabled"
  /** column name */
  | "isDeleted"
  /** column name */
  | "location"
  /** column name */
  | "name"
  /** column name */
  | "rules"
  /** column name */
  | "title"
  /** column name */
  | "type"
  /** column name */
  | "userAdjective"
  /** column name */
  | "usersAdjective";

/** select "openbookCommunitiesCommunityAggregateBoolExpBool_andArgumentsColumns" columns of table "openbook_communities_community" */
export type OpenbookCommunitiesCommunitySelectColumnOpenbookCommunitiesCommunityAggregateBoolExpBool_AndArgumentsColumns =
  /** column name */
  | "invitesEnabled"
  /** column name */
  | "isDeleted";

/** select "openbookCommunitiesCommunityAggregateBoolExpBool_orArgumentsColumns" columns of table "openbook_communities_community" */
export type OpenbookCommunitiesCommunitySelectColumnOpenbookCommunitiesCommunityAggregateBoolExpBool_OrArgumentsColumns =
  /** column name */
  | "invitesEnabled"
  /** column name */
  | "isDeleted";

/** input type for updating data in table "openbook_communities_community" */
export type OpenbookCommunitiesCommunitySetInput = {
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  avatarBlurhash?: InputMaybe<Scalars["String"]["input"]>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  contactDescription?: InputMaybe<Scalars["String"]["input"]>;
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactPhone?: InputMaybe<Scalars["String"]["input"]>;
  cover?: InputMaybe<Scalars["String"]["input"]>;
  coverBlurhash?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["timestamptz"]["input"]>;
  creatorId?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  geolocation?: InputMaybe<Scalars["geometry"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  invitesEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  rules?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  userAdjective?: InputMaybe<Scalars["String"]["input"]>;
  usersAdjective?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookCommunitiesCommunityStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookCommunitiesCommunityStreamCursorValueInput = {
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  avatarBlurhash?: InputMaybe<Scalars["String"]["input"]>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  contactDescription?: InputMaybe<Scalars["String"]["input"]>;
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactPhone?: InputMaybe<Scalars["String"]["input"]>;
  cover?: InputMaybe<Scalars["String"]["input"]>;
  coverBlurhash?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["timestamptz"]["input"]>;
  creatorId?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  geolocation?: InputMaybe<Scalars["geometry"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  invitesEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  rules?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  userAdjective?: InputMaybe<Scalars["String"]["input"]>;
  usersAdjective?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityUpdateColumn =
  /** column name */
  | "avatar"
  /** column name */
  | "avatarBlurhash"
  /** column name */
  | "color"
  /** column name */
  | "contactDescription"
  /** column name */
  | "contactEmail"
  /** column name */
  | "contactPhone"
  /** column name */
  | "cover"
  /** column name */
  | "coverBlurhash"
  /** column name */
  | "created"
  /** column name */
  | "creatorId"
  /** column name */
  | "description"
  /** column name */
  | "geolocation"
  /** column name */
  | "id"
  /** column name */
  | "invitesEnabled"
  /** column name */
  | "isDeleted"
  /** column name */
  | "location"
  /** column name */
  | "name"
  /** column name */
  | "rules"
  /** column name */
  | "title"
  /** column name */
  | "type"
  /** column name */
  | "userAdjective"
  /** column name */
  | "usersAdjective";

export type OpenbookCommunitiesCommunityUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookCommunitiesCommunitySetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookCommunitiesCommunityBoolExp;
};

/** columns and relationships of "openbook_posts_post" */
export type OpenbookPostsPost = {
  /** An object relationship */
  author: OpenbookAuthUser;
  commentsEnabled: Scalars["Boolean"]["output"];
  communityId?: Maybe<Scalars["uuid"]["output"]>;
  created: Scalars["timestamptz"]["output"];
  creatorId: Scalars["uuid"]["output"];
  id: Scalars["uuid"]["output"];
  inspirationPostCategoryId?: Maybe<Scalars["uuid"]["output"]>;
  isClosed: Scalars["Boolean"]["output"];
  isDeleted: Scalars["Boolean"]["output"];
  isEdited: Scalars["Boolean"]["output"];
  isPublic: Scalars["Boolean"]["output"];
  languageId?: Maybe<Scalars["uuid"]["output"]>;
  modified: Scalars["timestamptz"]["output"];
  publicReactions: Scalars["Boolean"]["output"];
  /** An object relationship */
  space?: Maybe<OpenbookCommunitiesCommunity>;
  status: Scalars["String"]["output"];
  text?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "openbook_posts_post" */
export type OpenbookPostsPostAggregate = {
  aggregate?: Maybe<OpenbookPostsPostAggregateFields>;
  nodes: Array<OpenbookPostsPost>;
};

export type OpenbookPostsPostAggregateBoolExp = {
  bool_and?: InputMaybe<OpenbookPostsPostAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<OpenbookPostsPostAggregateBoolExpBool_Or>;
  count?: InputMaybe<OpenbookPostsPostAggregateBoolExpCount>;
};

/** aggregate fields of "openbook_posts_post" */
export type OpenbookPostsPostAggregateFields = {
  count: Scalars["Int"]["output"];
  max?: Maybe<OpenbookPostsPostMaxFields>;
  min?: Maybe<OpenbookPostsPostMinFields>;
};

/** aggregate fields of "openbook_posts_post" */
export type OpenbookPostsPostAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "openbook_posts_post" */
export type OpenbookPostsPostAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OpenbookPostsPostMaxOrderBy>;
  min?: InputMaybe<OpenbookPostsPostMinOrderBy>;
};

/** input type for inserting array relation for remote table "openbook_posts_post" */
export type OpenbookPostsPostArrRelInsertInput = {
  data: Array<OpenbookPostsPostInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookPostsPostOnConflict>;
};

/** Boolean expression to filter rows from the table "openbook_posts_post". All fields are combined with a logical 'AND'. */
export type OpenbookPostsPostBoolExp = {
  _and?: InputMaybe<Array<OpenbookPostsPostBoolExp>>;
  _not?: InputMaybe<OpenbookPostsPostBoolExp>;
  _or?: InputMaybe<Array<OpenbookPostsPostBoolExp>>;
  author?: InputMaybe<OpenbookAuthUserBoolExp>;
  commentsEnabled?: InputMaybe<BooleanComparisonExp>;
  communityId?: InputMaybe<UuidComparisonExp>;
  created?: InputMaybe<TimestamptzComparisonExp>;
  creatorId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  inspirationPostCategoryId?: InputMaybe<UuidComparisonExp>;
  isClosed?: InputMaybe<BooleanComparisonExp>;
  isDeleted?: InputMaybe<BooleanComparisonExp>;
  isEdited?: InputMaybe<BooleanComparisonExp>;
  isPublic?: InputMaybe<BooleanComparisonExp>;
  languageId?: InputMaybe<UuidComparisonExp>;
  modified?: InputMaybe<TimestamptzComparisonExp>;
  publicReactions?: InputMaybe<BooleanComparisonExp>;
  space?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  status?: InputMaybe<StringComparisonExp>;
  text?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_posts_post" */
export type OpenbookPostsPostConstraint =
  /** unique or primary key constraint on columns "id" */
  "openbook_posts_post_pkey";

/** input type for inserting data into table "openbook_posts_post" */
export type OpenbookPostsPostInsertInput = {
  author?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  commentsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  communityId?: InputMaybe<Scalars["uuid"]["input"]>;
  created?: InputMaybe<Scalars["timestamptz"]["input"]>;
  creatorId?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  inspirationPostCategoryId?: InputMaybe<Scalars["uuid"]["input"]>;
  isClosed?: InputMaybe<Scalars["Boolean"]["input"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isEdited?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPublic?: InputMaybe<Scalars["Boolean"]["input"]>;
  languageId?: InputMaybe<Scalars["uuid"]["input"]>;
  modified?: InputMaybe<Scalars["timestamptz"]["input"]>;
  publicReactions?: InputMaybe<Scalars["Boolean"]["input"]>;
  space?: InputMaybe<OpenbookCommunitiesCommunityObjRelInsertInput>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type OpenbookPostsPostMaxFields = {
  communityId?: Maybe<Scalars["uuid"]["output"]>;
  created?: Maybe<Scalars["timestamptz"]["output"]>;
  creatorId?: Maybe<Scalars["uuid"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  inspirationPostCategoryId?: Maybe<Scalars["uuid"]["output"]>;
  languageId?: Maybe<Scalars["uuid"]["output"]>;
  modified?: Maybe<Scalars["timestamptz"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "openbook_posts_post" */
export type OpenbookPostsPostMaxOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  inspirationPostCategoryId?: InputMaybe<OrderBy>;
  languageId?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OpenbookPostsPostMinFields = {
  communityId?: Maybe<Scalars["uuid"]["output"]>;
  created?: Maybe<Scalars["timestamptz"]["output"]>;
  creatorId?: Maybe<Scalars["uuid"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  inspirationPostCategoryId?: Maybe<Scalars["uuid"]["output"]>;
  languageId?: Maybe<Scalars["uuid"]["output"]>;
  modified?: Maybe<Scalars["timestamptz"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "openbook_posts_post" */
export type OpenbookPostsPostMinOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  inspirationPostCategoryId?: InputMaybe<OrderBy>;
  languageId?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "openbook_posts_post" */
export type OpenbookPostsPostMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookPostsPost>;
};

/** on_conflict condition type for table "openbook_posts_post" */
export type OpenbookPostsPostOnConflict = {
  constraint: OpenbookPostsPostConstraint;
  updateColumns?: Array<OpenbookPostsPostUpdateColumn>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};

/** Ordering options when selecting data from "openbook_posts_post". */
export type OpenbookPostsPostOrderBy = {
  author?: InputMaybe<OpenbookAuthUserOrderBy>;
  commentsEnabled?: InputMaybe<OrderBy>;
  communityId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  inspirationPostCategoryId?: InputMaybe<OrderBy>;
  isClosed?: InputMaybe<OrderBy>;
  isDeleted?: InputMaybe<OrderBy>;
  isEdited?: InputMaybe<OrderBy>;
  isPublic?: InputMaybe<OrderBy>;
  languageId?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  publicReactions?: InputMaybe<OrderBy>;
  space?: InputMaybe<OpenbookCommunitiesCommunityOrderBy>;
  status?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_posts_post */
export type OpenbookPostsPostPkColumnsInput = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "openbook_posts_post" */
export type OpenbookPostsPostSelectColumn =
  /** column name */
  | "commentsEnabled"
  /** column name */
  | "communityId"
  /** column name */
  | "created"
  /** column name */
  | "creatorId"
  /** column name */
  | "id"
  /** column name */
  | "inspirationPostCategoryId"
  /** column name */
  | "isClosed"
  /** column name */
  | "isDeleted"
  /** column name */
  | "isEdited"
  /** column name */
  | "isPublic"
  /** column name */
  | "languageId"
  /** column name */
  | "modified"
  /** column name */
  | "publicReactions"
  /** column name */
  | "status"
  /** column name */
  | "text"
  /** column name */
  | "title";

/** select "openbookPostsPostAggregateBoolExpBool_andArgumentsColumns" columns of table "openbook_posts_post" */
export type OpenbookPostsPostSelectColumnOpenbookPostsPostAggregateBoolExpBool_AndArgumentsColumns =
  /** column name */
  | "commentsEnabled"
  /** column name */
  | "isClosed"
  /** column name */
  | "isDeleted"
  /** column name */
  | "isEdited"
  /** column name */
  | "isPublic"
  /** column name */
  | "publicReactions";

/** select "openbookPostsPostAggregateBoolExpBool_orArgumentsColumns" columns of table "openbook_posts_post" */
export type OpenbookPostsPostSelectColumnOpenbookPostsPostAggregateBoolExpBool_OrArgumentsColumns =
  /** column name */
  | "commentsEnabled"
  /** column name */
  | "isClosed"
  /** column name */
  | "isDeleted"
  /** column name */
  | "isEdited"
  /** column name */
  | "isPublic"
  /** column name */
  | "publicReactions";

/** input type for updating data in table "openbook_posts_post" */
export type OpenbookPostsPostSetInput = {
  commentsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  communityId?: InputMaybe<Scalars["uuid"]["input"]>;
  created?: InputMaybe<Scalars["timestamptz"]["input"]>;
  creatorId?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  inspirationPostCategoryId?: InputMaybe<Scalars["uuid"]["input"]>;
  isClosed?: InputMaybe<Scalars["Boolean"]["input"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isEdited?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPublic?: InputMaybe<Scalars["Boolean"]["input"]>;
  languageId?: InputMaybe<Scalars["uuid"]["input"]>;
  modified?: InputMaybe<Scalars["timestamptz"]["input"]>;
  publicReactions?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "openbook_posts_post" */
export type OpenbookPostsPostStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookPostsPostStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookPostsPostStreamCursorValueInput = {
  commentsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  communityId?: InputMaybe<Scalars["uuid"]["input"]>;
  created?: InputMaybe<Scalars["timestamptz"]["input"]>;
  creatorId?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  inspirationPostCategoryId?: InputMaybe<Scalars["uuid"]["input"]>;
  isClosed?: InputMaybe<Scalars["Boolean"]["input"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isEdited?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPublic?: InputMaybe<Scalars["Boolean"]["input"]>;
  languageId?: InputMaybe<Scalars["uuid"]["input"]>;
  modified?: InputMaybe<Scalars["timestamptz"]["input"]>;
  publicReactions?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "openbook_posts_post" */
export type OpenbookPostsPostUpdateColumn =
  /** column name */
  | "commentsEnabled"
  /** column name */
  | "communityId"
  /** column name */
  | "created"
  /** column name */
  | "creatorId"
  /** column name */
  | "id"
  /** column name */
  | "inspirationPostCategoryId"
  /** column name */
  | "isClosed"
  /** column name */
  | "isDeleted"
  /** column name */
  | "isEdited"
  /** column name */
  | "isPublic"
  /** column name */
  | "languageId"
  /** column name */
  | "modified"
  /** column name */
  | "publicReactions"
  /** column name */
  | "status"
  /** column name */
  | "text"
  /** column name */
  | "title";

export type OpenbookPostsPostUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookPostsPostSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookPostsPostBoolExp;
};

/** columns and relationships of "openbook_posts_postcomment" */
export type OpenbookPostsPostcomment = {
  /** An array relationship */
  childComments: Array<OpenbookPostsPostcomment>;
  /** An aggregate relationship */
  childCommentsAggregate: OpenbookPostsPostcommentAggregate;
  commentableId: Scalars["uuid"]["output"];
  commentableTypeId: Scalars["Int"]["output"];
  /** An object relationship */
  commenter: OpenbookAuthUser;
  commenterId: Scalars["uuid"]["output"];
  created: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  isDeleted: Scalars["Boolean"]["output"];
  isEdited: Scalars["Boolean"]["output"];
  languageId?: Maybe<Scalars["uuid"]["output"]>;
  modified: Scalars["timestamptz"]["output"];
  /** An object relationship */
  parentComment?: Maybe<OpenbookPostsPostcomment>;
  parentCommentId?: Maybe<Scalars["uuid"]["output"]>;
  text: Scalars["String"]["output"];
};

/** columns and relationships of "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentChildCommentsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostcommentOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};

/** columns and relationships of "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentChildCommentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostcommentOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};

/** aggregated selection of "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentAggregate = {
  aggregate?: Maybe<OpenbookPostsPostcommentAggregateFields>;
  nodes: Array<OpenbookPostsPostcomment>;
};

export type OpenbookPostsPostcommentAggregateBoolExp = {
  bool_and?: InputMaybe<OpenbookPostsPostcommentAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<OpenbookPostsPostcommentAggregateBoolExpBool_Or>;
  count?: InputMaybe<OpenbookPostsPostcommentAggregateBoolExpCount>;
};

/** aggregate fields of "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentAggregateFields = {
  avg?: Maybe<OpenbookPostsPostcommentAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<OpenbookPostsPostcommentMaxFields>;
  min?: Maybe<OpenbookPostsPostcommentMinFields>;
  stddev?: Maybe<OpenbookPostsPostcommentStddevFields>;
  stddevPop?: Maybe<OpenbookPostsPostcommentStddevPopFields>;
  stddevSamp?: Maybe<OpenbookPostsPostcommentStddevSampFields>;
  sum?: Maybe<OpenbookPostsPostcommentSumFields>;
  varPop?: Maybe<OpenbookPostsPostcommentVarPopFields>;
  varSamp?: Maybe<OpenbookPostsPostcommentVarSampFields>;
  variance?: Maybe<OpenbookPostsPostcommentVarianceFields>;
};

/** aggregate fields of "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentAggregateOrderBy = {
  avg?: InputMaybe<OpenbookPostsPostcommentAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OpenbookPostsPostcommentMaxOrderBy>;
  min?: InputMaybe<OpenbookPostsPostcommentMinOrderBy>;
  stddev?: InputMaybe<OpenbookPostsPostcommentStddevOrderBy>;
  stddevPop?: InputMaybe<OpenbookPostsPostcommentStddevPopOrderBy>;
  stddevSamp?: InputMaybe<OpenbookPostsPostcommentStddevSampOrderBy>;
  sum?: InputMaybe<OpenbookPostsPostcommentSumOrderBy>;
  varPop?: InputMaybe<OpenbookPostsPostcommentVarPopOrderBy>;
  varSamp?: InputMaybe<OpenbookPostsPostcommentVarSampOrderBy>;
  variance?: InputMaybe<OpenbookPostsPostcommentVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentArrRelInsertInput = {
  data: Array<OpenbookPostsPostcommentInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookPostsPostcommentOnConflict>;
};

/** aggregate avg on columns */
export type OpenbookPostsPostcommentAvgFields = {
  commentableTypeId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentAvgOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "openbook_posts_postcomment". All fields are combined with a logical 'AND'. */
export type OpenbookPostsPostcommentBoolExp = {
  _and?: InputMaybe<Array<OpenbookPostsPostcommentBoolExp>>;
  _not?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
  _or?: InputMaybe<Array<OpenbookPostsPostcommentBoolExp>>;
  childComments?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
  childCommentsAggregate?: InputMaybe<OpenbookPostsPostcommentAggregateBoolExp>;
  commentableId?: InputMaybe<UuidComparisonExp>;
  commentableTypeId?: InputMaybe<IntComparisonExp>;
  commenter?: InputMaybe<OpenbookAuthUserBoolExp>;
  commenterId?: InputMaybe<UuidComparisonExp>;
  created?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isDeleted?: InputMaybe<BooleanComparisonExp>;
  isEdited?: InputMaybe<BooleanComparisonExp>;
  languageId?: InputMaybe<UuidComparisonExp>;
  modified?: InputMaybe<TimestamptzComparisonExp>;
  parentComment?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
  parentCommentId?: InputMaybe<UuidComparisonExp>;
  text?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentConstraint =
  /** unique or primary key constraint on columns "id" */
  "openbook_posts_postcomment_pkey";

/** input type for incrementing numeric columns in table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentIncInput = {
  commentableTypeId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentInsertInput = {
  childComments?: InputMaybe<OpenbookPostsPostcommentArrRelInsertInput>;
  commentableId?: InputMaybe<Scalars["uuid"]["input"]>;
  commentableTypeId?: InputMaybe<Scalars["Int"]["input"]>;
  commenter?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  commenterId?: InputMaybe<Scalars["uuid"]["input"]>;
  created?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isEdited?: InputMaybe<Scalars["Boolean"]["input"]>;
  languageId?: InputMaybe<Scalars["uuid"]["input"]>;
  modified?: InputMaybe<Scalars["timestamptz"]["input"]>;
  parentComment?: InputMaybe<OpenbookPostsPostcommentObjRelInsertInput>;
  parentCommentId?: InputMaybe<Scalars["uuid"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type OpenbookPostsPostcommentMaxFields = {
  commentableId?: Maybe<Scalars["uuid"]["output"]>;
  commentableTypeId?: Maybe<Scalars["Int"]["output"]>;
  commenterId?: Maybe<Scalars["uuid"]["output"]>;
  created?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  languageId?: Maybe<Scalars["uuid"]["output"]>;
  modified?: Maybe<Scalars["timestamptz"]["output"]>;
  parentCommentId?: Maybe<Scalars["uuid"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentMaxOrderBy = {
  commentableId?: InputMaybe<OrderBy>;
  commentableTypeId?: InputMaybe<OrderBy>;
  commenterId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  languageId?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  parentCommentId?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OpenbookPostsPostcommentMinFields = {
  commentableId?: Maybe<Scalars["uuid"]["output"]>;
  commentableTypeId?: Maybe<Scalars["Int"]["output"]>;
  commenterId?: Maybe<Scalars["uuid"]["output"]>;
  created?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  languageId?: Maybe<Scalars["uuid"]["output"]>;
  modified?: Maybe<Scalars["timestamptz"]["output"]>;
  parentCommentId?: Maybe<Scalars["uuid"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentMinOrderBy = {
  commentableId?: InputMaybe<OrderBy>;
  commentableTypeId?: InputMaybe<OrderBy>;
  commenterId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  languageId?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  parentCommentId?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookPostsPostcomment>;
};

/** input type for inserting object relation for remote table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentObjRelInsertInput = {
  data: OpenbookPostsPostcommentInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookPostsPostcommentOnConflict>;
};

/** on_conflict condition type for table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentOnConflict = {
  constraint: OpenbookPostsPostcommentConstraint;
  updateColumns?: Array<OpenbookPostsPostcommentUpdateColumn>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};

/** Ordering options when selecting data from "openbook_posts_postcomment". */
export type OpenbookPostsPostcommentOrderBy = {
  childCommentsAggregate?: InputMaybe<OpenbookPostsPostcommentAggregateOrderBy>;
  commentableId?: InputMaybe<OrderBy>;
  commentableTypeId?: InputMaybe<OrderBy>;
  commenter?: InputMaybe<OpenbookAuthUserOrderBy>;
  commenterId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isDeleted?: InputMaybe<OrderBy>;
  isEdited?: InputMaybe<OrderBy>;
  languageId?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  parentComment?: InputMaybe<OpenbookPostsPostcommentOrderBy>;
  parentCommentId?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_posts_postcomment */
export type OpenbookPostsPostcommentPkColumnsInput = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentSelectColumn =
  /** column name */
  | "commentableId"
  /** column name */
  | "commentableTypeId"
  /** column name */
  | "commenterId"
  /** column name */
  | "created"
  /** column name */
  | "id"
  /** column name */
  | "isDeleted"
  /** column name */
  | "isEdited"
  /** column name */
  | "languageId"
  /** column name */
  | "modified"
  /** column name */
  | "parentCommentId"
  /** column name */
  | "text";

/** select "openbookPostsPostcommentAggregateBoolExpBool_andArgumentsColumns" columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentSelectColumnOpenbookPostsPostcommentAggregateBoolExpBool_AndArgumentsColumns =
  /** column name */
  | "isDeleted"
  /** column name */
  | "isEdited";

/** select "openbookPostsPostcommentAggregateBoolExpBool_orArgumentsColumns" columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentSelectColumnOpenbookPostsPostcommentAggregateBoolExpBool_OrArgumentsColumns =
  /** column name */
  | "isDeleted"
  /** column name */
  | "isEdited";

/** input type for updating data in table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentSetInput = {
  commentableId?: InputMaybe<Scalars["uuid"]["input"]>;
  commentableTypeId?: InputMaybe<Scalars["Int"]["input"]>;
  commenterId?: InputMaybe<Scalars["uuid"]["input"]>;
  created?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isEdited?: InputMaybe<Scalars["Boolean"]["input"]>;
  languageId?: InputMaybe<Scalars["uuid"]["input"]>;
  modified?: InputMaybe<Scalars["timestamptz"]["input"]>;
  parentCommentId?: InputMaybe<Scalars["uuid"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type OpenbookPostsPostcommentStddevFields = {
  commentableTypeId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentStddevOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type OpenbookPostsPostcommentStddevPopFields = {
  commentableTypeId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentStddevPopOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type OpenbookPostsPostcommentStddevSampFields = {
  commentableTypeId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentStddevSampOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookPostsPostcommentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookPostsPostcommentStreamCursorValueInput = {
  commentableId?: InputMaybe<Scalars["uuid"]["input"]>;
  commentableTypeId?: InputMaybe<Scalars["Int"]["input"]>;
  commenterId?: InputMaybe<Scalars["uuid"]["input"]>;
  created?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isEdited?: InputMaybe<Scalars["Boolean"]["input"]>;
  languageId?: InputMaybe<Scalars["uuid"]["input"]>;
  modified?: InputMaybe<Scalars["timestamptz"]["input"]>;
  parentCommentId?: InputMaybe<Scalars["uuid"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type OpenbookPostsPostcommentSumFields = {
  commentableTypeId?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentSumOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** update columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentUpdateColumn =
  /** column name */
  | "commentableId"
  /** column name */
  | "commentableTypeId"
  /** column name */
  | "commenterId"
  /** column name */
  | "created"
  /** column name */
  | "id"
  /** column name */
  | "isDeleted"
  /** column name */
  | "isEdited"
  /** column name */
  | "languageId"
  /** column name */
  | "modified"
  /** column name */
  | "parentCommentId"
  /** column name */
  | "text";

export type OpenbookPostsPostcommentUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OpenbookPostsPostcommentIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookPostsPostcommentSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookPostsPostcommentBoolExp;
};

/** aggregate varPop on columns */
export type OpenbookPostsPostcommentVarPopFields = {
  commentableTypeId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentVarPopOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type OpenbookPostsPostcommentVarSampFields = {
  commentableTypeId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentVarSampOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type OpenbookPostsPostcommentVarianceFields = {
  commentableTypeId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentVarianceOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** column ordering options */
export type OrderBy =
  /** in ascending order, nulls last */
  | "ASC"
  /** in ascending order, nulls first */
  | "ASC_NULLS_FIRST"
  /** in ascending order, nulls last */
  | "ASC_NULLS_LAST"
  /** in descending order, nulls first */
  | "DESC"
  /** in descending order, nulls first */
  | "DESC_NULLS_FIRST"
  /** in descending order, nulls last */
  | "DESC_NULLS_LAST";

export type Report = {
  contentId: Scalars["UUID"]["output"];
  contentType: ContentType;
  createdAt: Scalars["DateTime"]["output"];
  details: Scalars["String"]["output"];
  id: Scalars["UUID"]["output"];
  reportedPost?: Maybe<OpenbookPostsPost>;
  reporter?: Maybe<OpenbookAuthUser>;
  reporterId: Scalars["UUID"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type SmallintComparisonExp = {
  _eq?: InputMaybe<Scalars["smallint"]["input"]>;
  _gt?: InputMaybe<Scalars["smallint"]["input"]>;
  _gte?: InputMaybe<Scalars["smallint"]["input"]>;
  _in?: InputMaybe<Array<Scalars["smallint"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["smallint"]["input"]>;
  _lte?: InputMaybe<Scalars["smallint"]["input"]>;
  _neq?: InputMaybe<Scalars["smallint"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["smallint"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

/** mutation root */
export type Mutation_Root = {
  createReport: Report;
  /** delete data from the table: "openbook_auth_user" */
  deleteOpenbookAuthUser?: Maybe<OpenbookAuthUserMutationResponse>;
  /** delete single row from the table: "openbook_auth_user" */
  deleteOpenbookAuthUserByPk?: Maybe<OpenbookAuthUser>;
  /** delete data from the table: "openbook_auth_userprofile" */
  deleteOpenbookAuthUserprofile?: Maybe<OpenbookAuthUserprofileMutationResponse>;
  /** delete single row from the table: "openbook_auth_userprofile" */
  deleteOpenbookAuthUserprofileByPk?: Maybe<OpenbookAuthUserprofile>;
  /** delete data from the table: "openbook_communities_community" */
  deleteOpenbookCommunitiesCommunity?: Maybe<OpenbookCommunitiesCommunityMutationResponse>;
  /** delete single row from the table: "openbook_communities_community" */
  deleteOpenbookCommunitiesCommunityByPk?: Maybe<OpenbookCommunitiesCommunity>;
  /** delete data from the table: "openbook_posts_post" */
  deleteOpenbookPostsPost?: Maybe<OpenbookPostsPostMutationResponse>;
  /** delete single row from the table: "openbook_posts_post" */
  deleteOpenbookPostsPostByPk?: Maybe<OpenbookPostsPost>;
  /** delete data from the table: "openbook_posts_postcomment" */
  deleteOpenbookPostsPostcomment?: Maybe<OpenbookPostsPostcommentMutationResponse>;
  /** delete single row from the table: "openbook_posts_postcomment" */
  deleteOpenbookPostsPostcommentByPk?: Maybe<OpenbookPostsPostcomment>;
  /** insert data into the table: "openbook_auth_user" */
  insertOpenbookAuthUser?: Maybe<OpenbookAuthUserMutationResponse>;
  /** insert a single row into the table: "openbook_auth_user" */
  insertOpenbookAuthUserOne?: Maybe<OpenbookAuthUser>;
  /** insert data into the table: "openbook_auth_userprofile" */
  insertOpenbookAuthUserprofile?: Maybe<OpenbookAuthUserprofileMutationResponse>;
  /** insert a single row into the table: "openbook_auth_userprofile" */
  insertOpenbookAuthUserprofileOne?: Maybe<OpenbookAuthUserprofile>;
  /** insert data into the table: "openbook_communities_community" */
  insertOpenbookCommunitiesCommunity?: Maybe<OpenbookCommunitiesCommunityMutationResponse>;
  /** insert a single row into the table: "openbook_communities_community" */
  insertOpenbookCommunitiesCommunityOne?: Maybe<OpenbookCommunitiesCommunity>;
  /** insert data into the table: "openbook_posts_post" */
  insertOpenbookPostsPost?: Maybe<OpenbookPostsPostMutationResponse>;
  /** insert a single row into the table: "openbook_posts_post" */
  insertOpenbookPostsPostOne?: Maybe<OpenbookPostsPost>;
  /** insert data into the table: "openbook_posts_postcomment" */
  insertOpenbookPostsPostcomment?: Maybe<OpenbookPostsPostcommentMutationResponse>;
  /** insert a single row into the table: "openbook_posts_postcomment" */
  insertOpenbookPostsPostcommentOne?: Maybe<OpenbookPostsPostcomment>;
  /** update data of the table: "openbook_auth_user" */
  updateOpenbookAuthUser?: Maybe<OpenbookAuthUserMutationResponse>;
  /** update single row of the table: "openbook_auth_user" */
  updateOpenbookAuthUserByPk?: Maybe<OpenbookAuthUser>;
  /** update multiples rows of table: "openbook_auth_user" */
  updateOpenbookAuthUserMany?: Maybe<
    Array<Maybe<OpenbookAuthUserMutationResponse>>
  >;
  /** update data of the table: "openbook_auth_userprofile" */
  updateOpenbookAuthUserprofile?: Maybe<OpenbookAuthUserprofileMutationResponse>;
  /** update single row of the table: "openbook_auth_userprofile" */
  updateOpenbookAuthUserprofileByPk?: Maybe<OpenbookAuthUserprofile>;
  /** update multiples rows of table: "openbook_auth_userprofile" */
  updateOpenbookAuthUserprofileMany?: Maybe<
    Array<Maybe<OpenbookAuthUserprofileMutationResponse>>
  >;
  /** update data of the table: "openbook_communities_community" */
  updateOpenbookCommunitiesCommunity?: Maybe<OpenbookCommunitiesCommunityMutationResponse>;
  /** update single row of the table: "openbook_communities_community" */
  updateOpenbookCommunitiesCommunityByPk?: Maybe<OpenbookCommunitiesCommunity>;
  /** update multiples rows of table: "openbook_communities_community" */
  updateOpenbookCommunitiesCommunityMany?: Maybe<
    Array<Maybe<OpenbookCommunitiesCommunityMutationResponse>>
  >;
  /** update data of the table: "openbook_posts_post" */
  updateOpenbookPostsPost?: Maybe<OpenbookPostsPostMutationResponse>;
  /** update single row of the table: "openbook_posts_post" */
  updateOpenbookPostsPostByPk?: Maybe<OpenbookPostsPost>;
  /** update multiples rows of table: "openbook_posts_post" */
  updateOpenbookPostsPostMany?: Maybe<
    Array<Maybe<OpenbookPostsPostMutationResponse>>
  >;
  /** update data of the table: "openbook_posts_postcomment" */
  updateOpenbookPostsPostcomment?: Maybe<OpenbookPostsPostcommentMutationResponse>;
  /** update single row of the table: "openbook_posts_postcomment" */
  updateOpenbookPostsPostcommentByPk?: Maybe<OpenbookPostsPostcomment>;
  /** update multiples rows of table: "openbook_posts_postcomment" */
  updateOpenbookPostsPostcommentMany?: Maybe<
    Array<Maybe<OpenbookPostsPostcommentMutationResponse>>
  >;
};

/** mutation root */
export type Mutation_RootCreateReportArgs = {
  report: CreateReport;
};

/** mutation root */
export type Mutation_RootDeleteOpenbookAuthUserArgs = {
  where: OpenbookAuthUserBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteOpenbookAuthUserByPkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteOpenbookAuthUserprofileArgs = {
  where: OpenbookAuthUserprofileBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteOpenbookAuthUserprofileByPkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesCommunityArgs = {
  where: OpenbookCommunitiesCommunityBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesCommunityByPkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteOpenbookPostsPostArgs = {
  where: OpenbookPostsPostBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteOpenbookPostsPostByPkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteOpenbookPostsPostcommentArgs = {
  where: OpenbookPostsPostcommentBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteOpenbookPostsPostcommentByPkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootInsertOpenbookAuthUserArgs = {
  objects: Array<OpenbookAuthUserInsertInput>;
  onConflict?: InputMaybe<OpenbookAuthUserOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertOpenbookAuthUserOneArgs = {
  object: OpenbookAuthUserInsertInput;
  onConflict?: InputMaybe<OpenbookAuthUserOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertOpenbookAuthUserprofileArgs = {
  objects: Array<OpenbookAuthUserprofileInsertInput>;
  onConflict?: InputMaybe<OpenbookAuthUserprofileOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertOpenbookAuthUserprofileOneArgs = {
  object: OpenbookAuthUserprofileInsertInput;
  onConflict?: InputMaybe<OpenbookAuthUserprofileOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertOpenbookCommunitiesCommunityArgs = {
  objects: Array<OpenbookCommunitiesCommunityInsertInput>;
  onConflict?: InputMaybe<OpenbookCommunitiesCommunityOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertOpenbookCommunitiesCommunityOneArgs = {
  object: OpenbookCommunitiesCommunityInsertInput;
  onConflict?: InputMaybe<OpenbookCommunitiesCommunityOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertOpenbookPostsPostArgs = {
  objects: Array<OpenbookPostsPostInsertInput>;
  onConflict?: InputMaybe<OpenbookPostsPostOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertOpenbookPostsPostOneArgs = {
  object: OpenbookPostsPostInsertInput;
  onConflict?: InputMaybe<OpenbookPostsPostOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertOpenbookPostsPostcommentArgs = {
  objects: Array<OpenbookPostsPostcommentInsertInput>;
  onConflict?: InputMaybe<OpenbookPostsPostcommentOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertOpenbookPostsPostcommentOneArgs = {
  object: OpenbookPostsPostcommentInsertInput;
  onConflict?: InputMaybe<OpenbookPostsPostcommentOnConflict>;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookAuthUserArgs = {
  _inc?: InputMaybe<OpenbookAuthUserIncInput>;
  _set?: InputMaybe<OpenbookAuthUserSetInput>;
  where: OpenbookAuthUserBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookAuthUserByPkArgs = {
  _inc?: InputMaybe<OpenbookAuthUserIncInput>;
  _set?: InputMaybe<OpenbookAuthUserSetInput>;
  pkColumns: OpenbookAuthUserPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookAuthUserManyArgs = {
  updates: Array<OpenbookAuthUserUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookAuthUserprofileArgs = {
  _set?: InputMaybe<OpenbookAuthUserprofileSetInput>;
  where: OpenbookAuthUserprofileBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookAuthUserprofileByPkArgs = {
  _set?: InputMaybe<OpenbookAuthUserprofileSetInput>;
  pkColumns: OpenbookAuthUserprofilePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookAuthUserprofileManyArgs = {
  updates: Array<OpenbookAuthUserprofileUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesCommunityArgs = {
  _set?: InputMaybe<OpenbookCommunitiesCommunitySetInput>;
  where: OpenbookCommunitiesCommunityBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesCommunityByPkArgs = {
  _set?: InputMaybe<OpenbookCommunitiesCommunitySetInput>;
  pkColumns: OpenbookCommunitiesCommunityPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesCommunityManyArgs = {
  updates: Array<OpenbookCommunitiesCommunityUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookPostsPostArgs = {
  _set?: InputMaybe<OpenbookPostsPostSetInput>;
  where: OpenbookPostsPostBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookPostsPostByPkArgs = {
  _set?: InputMaybe<OpenbookPostsPostSetInput>;
  pkColumns: OpenbookPostsPostPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookPostsPostManyArgs = {
  updates: Array<OpenbookPostsPostUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookPostsPostcommentArgs = {
  _inc?: InputMaybe<OpenbookPostsPostcommentIncInput>;
  _set?: InputMaybe<OpenbookPostsPostcommentSetInput>;
  where: OpenbookPostsPostcommentBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookPostsPostcommentByPkArgs = {
  _inc?: InputMaybe<OpenbookPostsPostcommentIncInput>;
  _set?: InputMaybe<OpenbookPostsPostcommentSetInput>;
  pkColumns: OpenbookPostsPostcommentPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateOpenbookPostsPostcommentManyArgs = {
  updates: Array<OpenbookPostsPostcommentUpdates>;
};

export type OpenbookCommunitiesCommunityAggregateBoolExpBool_And = {
  arguments: OpenbookCommunitiesCommunitySelectColumnOpenbookCommunitiesCommunityAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookCommunitiesCommunityAggregateBoolExpBool_Or = {
  arguments: OpenbookCommunitiesCommunitySelectColumnOpenbookCommunitiesCommunityAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookCommunitiesCommunityAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  predicate: IntComparisonExp;
};

export type OpenbookPostsPostAggregateBoolExpBool_And = {
  arguments: OpenbookPostsPostSelectColumnOpenbookPostsPostAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<OpenbookPostsPostBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookPostsPostAggregateBoolExpBool_Or = {
  arguments: OpenbookPostsPostSelectColumnOpenbookPostsPostAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<OpenbookPostsPostBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookPostsPostAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<OpenbookPostsPostBoolExp>;
  predicate: IntComparisonExp;
};

export type OpenbookPostsPostcommentAggregateBoolExpBool_And = {
  arguments: OpenbookPostsPostcommentSelectColumnOpenbookPostsPostcommentAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookPostsPostcommentAggregateBoolExpBool_Or = {
  arguments: OpenbookPostsPostcommentSelectColumnOpenbookPostsPostcommentAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookPostsPostcommentAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
  predicate: IntComparisonExp;
};

export type Query_Root = {
  /** fetch data from the table: "openbook_auth_user" */
  openbookAuthUser: Array<OpenbookAuthUser>;
  /** fetch aggregated fields from the table: "openbook_auth_user" */
  openbookAuthUserAggregate: OpenbookAuthUserAggregate;
  /** fetch data from the table: "openbook_auth_user" using primary key columns */
  openbookAuthUserByPk?: Maybe<OpenbookAuthUser>;
  /** fetch data from the table: "openbook_auth_userprofile" */
  openbookAuthUserprofile: Array<OpenbookAuthUserprofile>;
  /** fetch aggregated fields from the table: "openbook_auth_userprofile" */
  openbookAuthUserprofileAggregate: OpenbookAuthUserprofileAggregate;
  /** fetch data from the table: "openbook_auth_userprofile" using primary key columns */
  openbookAuthUserprofileByPk?: Maybe<OpenbookAuthUserprofile>;
  /** fetch data from the table: "openbook_communities_community" */
  openbookCommunitiesCommunity: Array<OpenbookCommunitiesCommunity>;
  /** fetch aggregated fields from the table: "openbook_communities_community" */
  openbookCommunitiesCommunityAggregate: OpenbookCommunitiesCommunityAggregate;
  /** fetch data from the table: "openbook_communities_community" using primary key columns */
  openbookCommunitiesCommunityByPk?: Maybe<OpenbookCommunitiesCommunity>;
  /** fetch data from the table: "openbook_posts_post" */
  openbookPostsPost: Array<OpenbookPostsPost>;
  /** fetch aggregated fields from the table: "openbook_posts_post" */
  openbookPostsPostAggregate: OpenbookPostsPostAggregate;
  /** fetch data from the table: "openbook_posts_post" using primary key columns */
  openbookPostsPostByPk?: Maybe<OpenbookPostsPost>;
  /** fetch data from the table: "openbook_posts_postcomment" */
  openbookPostsPostcomment: Array<OpenbookPostsPostcomment>;
  /** fetch aggregated fields from the table: "openbook_posts_postcomment" */
  openbookPostsPostcommentAggregate: OpenbookPostsPostcommentAggregate;
  /** fetch data from the table: "openbook_posts_postcomment" using primary key columns */
  openbookPostsPostcommentByPk?: Maybe<OpenbookPostsPostcomment>;
  report: Report;
  reports: Array<Report>;
};

export type Query_RootOpenbookAuthUserArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserBoolExp>;
};

export type Query_RootOpenbookAuthUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserBoolExp>;
};

export type Query_RootOpenbookAuthUserByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootOpenbookAuthUserprofileArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserprofileSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserprofileOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
};

export type Query_RootOpenbookAuthUserprofileAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserprofileSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserprofileOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
};

export type Query_RootOpenbookAuthUserprofileByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootOpenbookCommunitiesCommunityArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunityOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};

export type Query_RootOpenbookCommunitiesCommunityAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunityOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};

export type Query_RootOpenbookCommunitiesCommunityByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootOpenbookPostsPostArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};

export type Query_RootOpenbookPostsPostAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};

export type Query_RootOpenbookPostsPostByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootOpenbookPostsPostcommentArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostcommentOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};

export type Query_RootOpenbookPostsPostcommentAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostcommentOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};

export type Query_RootOpenbookPostsPostcommentByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootReportArgs = {
  id: Scalars["UUID"]["input"];
};

export type St_D_Within_Geography_Input = {
  distance: Scalars["Float"]["input"];
  from: Scalars["geography"]["input"];
  use_spheroid?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type St_D_Within_Input = {
  distance: Scalars["Float"]["input"];
  from: Scalars["geometry"]["input"];
};

export type Subscription_Root = {
  /** fetch data from the table: "openbook_auth_user" */
  openbookAuthUser: Array<OpenbookAuthUser>;
  /** fetch aggregated fields from the table: "openbook_auth_user" */
  openbookAuthUserAggregate: OpenbookAuthUserAggregate;
  /** fetch data from the table: "openbook_auth_user" using primary key columns */
  openbookAuthUserByPk?: Maybe<OpenbookAuthUser>;
  /** fetch data from the table in a streaming manner: "openbook_auth_user" */
  openbookAuthUserStream: Array<OpenbookAuthUser>;
  /** fetch data from the table: "openbook_auth_userprofile" */
  openbookAuthUserprofile: Array<OpenbookAuthUserprofile>;
  /** fetch aggregated fields from the table: "openbook_auth_userprofile" */
  openbookAuthUserprofileAggregate: OpenbookAuthUserprofileAggregate;
  /** fetch data from the table: "openbook_auth_userprofile" using primary key columns */
  openbookAuthUserprofileByPk?: Maybe<OpenbookAuthUserprofile>;
  /** fetch data from the table in a streaming manner: "openbook_auth_userprofile" */
  openbookAuthUserprofileStream: Array<OpenbookAuthUserprofile>;
  /** fetch data from the table: "openbook_communities_community" */
  openbookCommunitiesCommunity: Array<OpenbookCommunitiesCommunity>;
  /** fetch aggregated fields from the table: "openbook_communities_community" */
  openbookCommunitiesCommunityAggregate: OpenbookCommunitiesCommunityAggregate;
  /** fetch data from the table: "openbook_communities_community" using primary key columns */
  openbookCommunitiesCommunityByPk?: Maybe<OpenbookCommunitiesCommunity>;
  /** fetch data from the table in a streaming manner: "openbook_communities_community" */
  openbookCommunitiesCommunityStream: Array<OpenbookCommunitiesCommunity>;
  /** fetch data from the table: "openbook_posts_post" */
  openbookPostsPost: Array<OpenbookPostsPost>;
  /** fetch aggregated fields from the table: "openbook_posts_post" */
  openbookPostsPostAggregate: OpenbookPostsPostAggregate;
  /** fetch data from the table: "openbook_posts_post" using primary key columns */
  openbookPostsPostByPk?: Maybe<OpenbookPostsPost>;
  /** fetch data from the table in a streaming manner: "openbook_posts_post" */
  openbookPostsPostStream: Array<OpenbookPostsPost>;
  /** fetch data from the table: "openbook_posts_postcomment" */
  openbookPostsPostcomment: Array<OpenbookPostsPostcomment>;
  /** fetch aggregated fields from the table: "openbook_posts_postcomment" */
  openbookPostsPostcommentAggregate: OpenbookPostsPostcommentAggregate;
  /** fetch data from the table: "openbook_posts_postcomment" using primary key columns */
  openbookPostsPostcommentByPk?: Maybe<OpenbookPostsPostcomment>;
  /** fetch data from the table in a streaming manner: "openbook_posts_postcomment" */
  openbookPostsPostcommentStream: Array<OpenbookPostsPostcomment>;
};

export type Subscription_RootOpenbookAuthUserArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserBoolExp>;
};

export type Subscription_RootOpenbookAuthUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserBoolExp>;
};

export type Subscription_RootOpenbookAuthUserByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootOpenbookAuthUserStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<OpenbookAuthUserStreamCursorInput>>;
  where?: InputMaybe<OpenbookAuthUserBoolExp>;
};

export type Subscription_RootOpenbookAuthUserprofileArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserprofileSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserprofileOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
};

export type Subscription_RootOpenbookAuthUserprofileAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserprofileSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserprofileOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
};

export type Subscription_RootOpenbookAuthUserprofileByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootOpenbookAuthUserprofileStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<OpenbookAuthUserprofileStreamCursorInput>>;
  where?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
};

export type Subscription_RootOpenbookCommunitiesCommunityArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunityOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};

export type Subscription_RootOpenbookCommunitiesCommunityAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunityOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};

export type Subscription_RootOpenbookCommunitiesCommunityByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootOpenbookCommunitiesCommunityStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<OpenbookCommunitiesCommunityStreamCursorInput>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};

export type Subscription_RootOpenbookPostsPostArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};

export type Subscription_RootOpenbookPostsPostAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};

export type Subscription_RootOpenbookPostsPostByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootOpenbookPostsPostStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<OpenbookPostsPostStreamCursorInput>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};

export type Subscription_RootOpenbookPostsPostcommentArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostcommentOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};

export type Subscription_RootOpenbookPostsPostcommentAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostcommentOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};

export type Subscription_RootOpenbookPostsPostcommentByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootOpenbookPostsPostcommentStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<OpenbookPostsPostcommentStreamCursorInput>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};
