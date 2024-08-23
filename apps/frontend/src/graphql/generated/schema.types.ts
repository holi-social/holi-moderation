export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  JSONObject: { input: string; output: string; }
  UUID: { input: string; output: string; }
  bigint: { input: string; output: string; }
  geography: { input: string; output: string; }
  geometry: { input: string; output: string; }
  smallint: { input: string; output: string; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

export type AuthResult = {
  email: Scalars['String']['output'];
  token: Scalars['String']['output'];
  userId: Scalars['UUID']['output'];
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type ContentType =
  | 'CHAT_MESSAGE'
  | 'COMMENT'
  | 'FEED_POST'
  | 'POST'
  | 'SPACE'
  | 'SPACE_APPOINTMENT'
  | 'SPACE_LINKHUB_TOOL'
  | 'SPACE_TASK'
  | 'USER';

export type CreateUser = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: UserRole;
};

/** ordering argument of a cursor */
export type CursorOrdering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** columns and relationships of "django_content_type" */
export type DjangoContentType = {
  appLabel: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  model: Scalars['String']['output'];
};

/** aggregated selection of "django_content_type" */
export type DjangoContentTypeAggregate = {
  aggregate?: Maybe<DjangoContentTypeAggregateFields>;
  nodes: Array<DjangoContentType>;
};

/** aggregate fields of "django_content_type" */
export type DjangoContentTypeAggregateFields = {
  avg?: Maybe<DjangoContentTypeAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<DjangoContentTypeMaxFields>;
  min?: Maybe<DjangoContentTypeMinFields>;
  stddev?: Maybe<DjangoContentTypeStddevFields>;
  stddevPop?: Maybe<DjangoContentTypeStddevPopFields>;
  stddevSamp?: Maybe<DjangoContentTypeStddevSampFields>;
  sum?: Maybe<DjangoContentTypeSumFields>;
  varPop?: Maybe<DjangoContentTypeVarPopFields>;
  varSamp?: Maybe<DjangoContentTypeVarSampFields>;
  variance?: Maybe<DjangoContentTypeVarianceFields>;
};


/** aggregate fields of "django_content_type" */
export type DjangoContentTypeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DjangoContentTypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type DjangoContentTypeAvgFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "django_content_type". All fields are combined with a logical 'AND'. */
export type DjangoContentTypeBoolExp = {
  _and?: InputMaybe<Array<DjangoContentTypeBoolExp>>;
  _not?: InputMaybe<DjangoContentTypeBoolExp>;
  _or?: InputMaybe<Array<DjangoContentTypeBoolExp>>;
  appLabel?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  model?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "django_content_type" */
export type DjangoContentTypeConstraint =
  /** unique or primary key constraint on columns "app_label", "model" */
  | 'django_content_type_app_label_model_76bd3d3b_uniq'
  /** unique or primary key constraint on columns "id" */
  | 'django_content_type_pkey';

/** input type for incrementing numeric columns in table "django_content_type" */
export type DjangoContentTypeIncInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "django_content_type" */
export type DjangoContentTypeInsertInput = {
  appLabel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type DjangoContentTypeMaxFields = {
  appLabel?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  model?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type DjangoContentTypeMinFields = {
  appLabel?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  model?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "django_content_type" */
export type DjangoContentTypeMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<DjangoContentType>;
};

/** input type for inserting object relation for remote table "django_content_type" */
export type DjangoContentTypeObjRelInsertInput = {
  data: DjangoContentTypeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<DjangoContentTypeOnConflict>;
};

/** on_conflict condition type for table "django_content_type" */
export type DjangoContentTypeOnConflict = {
  constraint: DjangoContentTypeConstraint;
  updateColumns?: Array<DjangoContentTypeUpdateColumn>;
  where?: InputMaybe<DjangoContentTypeBoolExp>;
};

/** Ordering options when selecting data from "django_content_type". */
export type DjangoContentTypeOrderBy = {
  appLabel?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  model?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: django_content_type */
export type DjangoContentTypePkColumnsInput = {
  id: Scalars['Int']['input'];
};

/** select columns of table "django_content_type" */
export type DjangoContentTypeSelectColumn =
  /** column name */
  | 'appLabel'
  /** column name */
  | 'id'
  /** column name */
  | 'model';

/** input type for updating data in table "django_content_type" */
export type DjangoContentTypeSetInput = {
  appLabel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type DjangoContentTypeStddevFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type DjangoContentTypeStddevPopFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type DjangoContentTypeStddevSampFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "django_content_type" */
export type DjangoContentTypeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DjangoContentTypeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DjangoContentTypeStreamCursorValueInput = {
  appLabel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type DjangoContentTypeSumFields = {
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "django_content_type" */
export type DjangoContentTypeUpdateColumn =
  /** column name */
  | 'appLabel'
  /** column name */
  | 'id'
  /** column name */
  | 'model';

export type DjangoContentTypeUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DjangoContentTypeIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DjangoContentTypeSetInput>;
  /** filter the rows which have to be updated */
  where: DjangoContentTypeBoolExp;
};

/** aggregate varPop on columns */
export type DjangoContentTypeVarPopFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type DjangoContentTypeVarSampFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type DjangoContentTypeVarianceFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "feed_posts_feedpost" */
export type FeedPostsFeedpost = {
  categoryId?: Maybe<Scalars['uuid']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  creator?: Maybe<OpenbookAuthUser>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  description: Scalars['String']['output'];
  geolocation?: Maybe<Scalars['geometry']['output']>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  imageBlurhash?: Maybe<Scalars['String']['output']>;
  languageCode?: Maybe<Scalars['String']['output']>;
  linkPreviewId?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  priorityDuration: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  visibility: Scalars['String']['output'];
};

/** aggregated selection of "feed_posts_feedpost" */
export type FeedPostsFeedpostAggregate = {
  aggregate?: Maybe<FeedPostsFeedpostAggregateFields>;
  nodes: Array<FeedPostsFeedpost>;
};

/** aggregate fields of "feed_posts_feedpost" */
export type FeedPostsFeedpostAggregateFields = {
  avg?: Maybe<FeedPostsFeedpostAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<FeedPostsFeedpostMaxFields>;
  min?: Maybe<FeedPostsFeedpostMinFields>;
  stddev?: Maybe<FeedPostsFeedpostStddevFields>;
  stddevPop?: Maybe<FeedPostsFeedpostStddevPopFields>;
  stddevSamp?: Maybe<FeedPostsFeedpostStddevSampFields>;
  sum?: Maybe<FeedPostsFeedpostSumFields>;
  varPop?: Maybe<FeedPostsFeedpostVarPopFields>;
  varSamp?: Maybe<FeedPostsFeedpostVarSampFields>;
  variance?: Maybe<FeedPostsFeedpostVarianceFields>;
};


/** aggregate fields of "feed_posts_feedpost" */
export type FeedPostsFeedpostAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FeedPostsFeedpostSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type FeedPostsFeedpostAvgFields = {
  priorityDuration?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "feed_posts_feedpost". All fields are combined with a logical 'AND'. */
export type FeedPostsFeedpostBoolExp = {
  _and?: InputMaybe<Array<FeedPostsFeedpostBoolExp>>;
  _not?: InputMaybe<FeedPostsFeedpostBoolExp>;
  _or?: InputMaybe<Array<FeedPostsFeedpostBoolExp>>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  creator?: InputMaybe<OpenbookAuthUserBoolExp>;
  creatorId?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  geolocation?: InputMaybe<GeometryComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  image?: InputMaybe<StringComparisonExp>;
  imageBlurhash?: InputMaybe<StringComparisonExp>;
  languageCode?: InputMaybe<StringComparisonExp>;
  linkPreviewId?: InputMaybe<UuidComparisonExp>;
  location?: InputMaybe<StringComparisonExp>;
  priorityDuration?: InputMaybe<IntComparisonExp>;
  slug?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  visibility?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "feed_posts_feedpost" */
export type FeedPostsFeedpostConstraint =
  /** unique or primary key constraint on columns "id" */
  | 'feed_posts_feedpost_pkey'
  /** unique or primary key constraint on columns "slug" */
  | 'feed_posts_feedpost_slug_key';

/** input type for incrementing numeric columns in table "feed_posts_feedpost" */
export type FeedPostsFeedpostIncInput = {
  priorityDuration?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "feed_posts_feedpost" */
export type FeedPostsFeedpostInsertInput = {
  categoryId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  creator?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  imageBlurhash?: InputMaybe<Scalars['String']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  linkPreviewId?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  priorityDuration?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type FeedPostsFeedpostMaxFields = {
  categoryId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  imageBlurhash?: Maybe<Scalars['String']['output']>;
  languageCode?: Maybe<Scalars['String']['output']>;
  linkPreviewId?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  priorityDuration?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type FeedPostsFeedpostMinFields = {
  categoryId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  imageBlurhash?: Maybe<Scalars['String']['output']>;
  languageCode?: Maybe<Scalars['String']['output']>;
  linkPreviewId?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  priorityDuration?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "feed_posts_feedpost" */
export type FeedPostsFeedpostMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<FeedPostsFeedpost>;
};

/** on_conflict condition type for table "feed_posts_feedpost" */
export type FeedPostsFeedpostOnConflict = {
  constraint: FeedPostsFeedpostConstraint;
  updateColumns?: Array<FeedPostsFeedpostUpdateColumn>;
  where?: InputMaybe<FeedPostsFeedpostBoolExp>;
};

/** Ordering options when selecting data from "feed_posts_feedpost". */
export type FeedPostsFeedpostOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  creator?: InputMaybe<OpenbookAuthUserOrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  geolocation?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  imageBlurhash?: InputMaybe<OrderBy>;
  languageCode?: InputMaybe<OrderBy>;
  linkPreviewId?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  priorityDuration?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  visibility?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: feed_posts_feedpost */
export type FeedPostsFeedpostPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "feed_posts_feedpost" */
export type FeedPostsFeedpostSelectColumn =
  /** column name */
  | 'categoryId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'creatorId'
  /** column name */
  | 'description'
  /** column name */
  | 'geolocation'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'imageBlurhash'
  /** column name */
  | 'languageCode'
  /** column name */
  | 'linkPreviewId'
  /** column name */
  | 'location'
  /** column name */
  | 'priorityDuration'
  /** column name */
  | 'slug'
  /** column name */
  | 'title'
  /** column name */
  | 'visibility';

/** input type for updating data in table "feed_posts_feedpost" */
export type FeedPostsFeedpostSetInput = {
  categoryId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  imageBlurhash?: InputMaybe<Scalars['String']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  linkPreviewId?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  priorityDuration?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type FeedPostsFeedpostStddevFields = {
  priorityDuration?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type FeedPostsFeedpostStddevPopFields = {
  priorityDuration?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type FeedPostsFeedpostStddevSampFields = {
  priorityDuration?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "feed_posts_feedpost" */
export type FeedPostsFeedpostStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: FeedPostsFeedpostStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FeedPostsFeedpostStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  imageBlurhash?: InputMaybe<Scalars['String']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  linkPreviewId?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  priorityDuration?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type FeedPostsFeedpostSumFields = {
  priorityDuration?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "feed_posts_feedpost" */
export type FeedPostsFeedpostUpdateColumn =
  /** column name */
  | 'categoryId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'creatorId'
  /** column name */
  | 'description'
  /** column name */
  | 'geolocation'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'imageBlurhash'
  /** column name */
  | 'languageCode'
  /** column name */
  | 'linkPreviewId'
  /** column name */
  | 'location'
  /** column name */
  | 'priorityDuration'
  /** column name */
  | 'slug'
  /** column name */
  | 'title'
  /** column name */
  | 'visibility';

export type FeedPostsFeedpostUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FeedPostsFeedpostIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FeedPostsFeedpostSetInput>;
  /** filter the rows which have to be updated */
  where: FeedPostsFeedpostBoolExp;
};

/** aggregate varPop on columns */
export type FeedPostsFeedpostVarPopFields = {
  priorityDuration?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type FeedPostsFeedpostVarSampFields = {
  priorityDuration?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type FeedPostsFeedpostVarianceFields = {
  priorityDuration?: Maybe<Scalars['Float']['output']>;
};

export type GeographyCastExp = {
  geometry?: InputMaybe<GeometryComparisonExp>;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type GeographyComparisonExp = {
  _cast?: InputMaybe<GeographyCastExp>;
  _eq?: InputMaybe<Scalars['geography']['input']>;
  _gt?: InputMaybe<Scalars['geography']['input']>;
  _gte?: InputMaybe<Scalars['geography']['input']>;
  _in?: InputMaybe<Array<Scalars['geography']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['geography']['input']>;
  _lte?: InputMaybe<Scalars['geography']['input']>;
  _neq?: InputMaybe<Scalars['geography']['input']>;
  _nin?: InputMaybe<Array<Scalars['geography']['input']>>;
  /** is the column within a given distance from the given geography value */
  _stDWithin?: InputMaybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _stIntersects?: InputMaybe<Scalars['geography']['input']>;
};

export type GeometryCastExp = {
  geography?: InputMaybe<GeographyComparisonExp>;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type GeometryComparisonExp = {
  _cast?: InputMaybe<GeometryCastExp>;
  _eq?: InputMaybe<Scalars['geometry']['input']>;
  _gt?: InputMaybe<Scalars['geometry']['input']>;
  _gte?: InputMaybe<Scalars['geometry']['input']>;
  _in?: InputMaybe<Array<Scalars['geometry']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['geometry']['input']>;
  _lte?: InputMaybe<Scalars['geometry']['input']>;
  _neq?: InputMaybe<Scalars['geometry']['input']>;
  _nin?: InputMaybe<Array<Scalars['geometry']['input']>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st3dDWithin?: InputMaybe<St_D_Within_Input>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st3dIntersects?: InputMaybe<Scalars['geometry']['input']>;
  /** does the column contain the given geometry value */
  _stContains?: InputMaybe<Scalars['geometry']['input']>;
  /** does the column cross the given geometry value */
  _stCrosses?: InputMaybe<Scalars['geometry']['input']>;
  /** is the column within a given distance from the given geometry value */
  _stDWithin?: InputMaybe<St_D_Within_Input>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _stEquals?: InputMaybe<Scalars['geometry']['input']>;
  /** does the column spatially intersect the given geometry value */
  _stIntersects?: InputMaybe<Scalars['geometry']['input']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _stOverlaps?: InputMaybe<Scalars['geometry']['input']>;
  /** does the column have atleast one point in common with the given geometry value */
  _stTouches?: InputMaybe<Scalars['geometry']['input']>;
  /** is the column contained in the given geometry value */
  _stWithin?: InputMaybe<Scalars['geometry']['input']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** columns and relationships of "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointment = {
  created: Scalars['timestamptz']['output'];
  /** An object relationship */
  creator?: Maybe<OpenbookAuthUser>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  deletedAt?: Maybe<Scalars['timestamptz']['output']>;
  description: Scalars['String']['output'];
  endDateTime: Scalars['timestamptz']['output'];
  geolocation?: Maybe<Scalars['geometry']['output']>;
  id: Scalars['uuid']['output'];
  inviteOnly: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  location?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  locationDetails?: Maybe<OpenbookAppointmentsLocationdetails>;
  locationDetailsId?: Maybe<Scalars['uuid']['output']>;
  modified?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  participants: Array<OpenbookAppointmentsAppointmentParticipants>;
  /** An aggregate relationship */
  participantsAggregate: OpenbookAppointmentsAppointmentParticipantsAggregate;
  permission: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  /** An object relationship */
  space: OpenbookCommunitiesCommunity;
  spaceId: Scalars['uuid']['output'];
  startDateTime: Scalars['timestamptz']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnailBlurhash?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  /** An object relationship */
  videoCallLink?: Maybe<OpenbookAppointmentsVideocalllink>;
  videoCallLinkId?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentParticipantsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsBoolExp>;
};


/** columns and relationships of "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentParticipantsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsBoolExp>;
};

/** aggregated selection of "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentAggregate = {
  aggregate?: Maybe<OpenbookAppointmentsAppointmentAggregateFields>;
  nodes: Array<OpenbookAppointmentsAppointment>;
};

export type OpenbookAppointmentsAppointmentAggregateBoolExp = {
  bool_and?: InputMaybe<OpenbookAppointmentsAppointmentAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<OpenbookAppointmentsAppointmentAggregateBoolExpBool_Or>;
  count?: InputMaybe<OpenbookAppointmentsAppointmentAggregateBoolExpCount>;
};

/** aggregate fields of "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookAppointmentsAppointmentMaxFields>;
  min?: Maybe<OpenbookAppointmentsAppointmentMinFields>;
};


/** aggregate fields of "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookAppointmentsAppointmentSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OpenbookAppointmentsAppointmentMaxOrderBy>;
  min?: InputMaybe<OpenbookAppointmentsAppointmentMinOrderBy>;
};

/** input type for inserting array relation for remote table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentArrRelInsertInput = {
  data: Array<OpenbookAppointmentsAppointmentInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookAppointmentsAppointmentOnConflict>;
};

/** Boolean expression to filter rows from the table "openbook_appointments_appointment". All fields are combined with a logical 'AND'. */
export type OpenbookAppointmentsAppointmentBoolExp = {
  _and?: InputMaybe<Array<OpenbookAppointmentsAppointmentBoolExp>>;
  _not?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
  _or?: InputMaybe<Array<OpenbookAppointmentsAppointmentBoolExp>>;
  created?: InputMaybe<TimestamptzComparisonExp>;
  creator?: InputMaybe<OpenbookAuthUserBoolExp>;
  creatorId?: InputMaybe<UuidComparisonExp>;
  deletedAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  endDateTime?: InputMaybe<TimestamptzComparisonExp>;
  geolocation?: InputMaybe<GeometryComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  inviteOnly?: InputMaybe<BooleanComparisonExp>;
  isDeleted?: InputMaybe<BooleanComparisonExp>;
  location?: InputMaybe<StringComparisonExp>;
  locationDetails?: InputMaybe<OpenbookAppointmentsLocationdetailsBoolExp>;
  locationDetailsId?: InputMaybe<UuidComparisonExp>;
  modified?: InputMaybe<TimestamptzComparisonExp>;
  participants?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsBoolExp>;
  participantsAggregate?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsAggregateBoolExp>;
  permission?: InputMaybe<StringComparisonExp>;
  slug?: InputMaybe<StringComparisonExp>;
  space?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  spaceId?: InputMaybe<UuidComparisonExp>;
  startDateTime?: InputMaybe<TimestamptzComparisonExp>;
  thumbnail?: InputMaybe<StringComparisonExp>;
  thumbnailBlurhash?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  videoCallLink?: InputMaybe<OpenbookAppointmentsVideocalllinkBoolExp>;
  videoCallLinkId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentConstraint =
  /** unique or primary key constraint on columns "location_details_id" */
  | 'openbook_appointments_appointment_location_details_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'openbook_appointments_appointment_pkey'
  /** unique or primary key constraint on columns "slug" */
  | 'openbook_appointments_appointment_slug_key'
  /** unique or primary key constraint on columns "video_call_link_id" */
  | 'openbook_appointments_appointment_video_call_link_id_key';

/** input type for inserting data into table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentInsertInput = {
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  creator?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDateTime?: InputMaybe<Scalars['timestamptz']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inviteOnly?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationDetails?: InputMaybe<OpenbookAppointmentsLocationdetailsObjRelInsertInput>;
  locationDetailsId?: InputMaybe<Scalars['uuid']['input']>;
  modified?: InputMaybe<Scalars['timestamptz']['input']>;
  participants?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsArrRelInsertInput>;
  permission?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  space?: InputMaybe<OpenbookCommunitiesCommunityObjRelInsertInput>;
  spaceId?: InputMaybe<Scalars['uuid']['input']>;
  startDateTime?: InputMaybe<Scalars['timestamptz']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  thumbnailBlurhash?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  videoCallLink?: InputMaybe<OpenbookAppointmentsVideocalllinkObjRelInsertInput>;
  videoCallLinkId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type OpenbookAppointmentsAppointmentMaxFields = {
  created?: Maybe<Scalars['timestamptz']['output']>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  deletedAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDateTime?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  locationDetailsId?: Maybe<Scalars['uuid']['output']>;
  modified?: Maybe<Scalars['timestamptz']['output']>;
  permission?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  spaceId?: Maybe<Scalars['uuid']['output']>;
  startDateTime?: Maybe<Scalars['timestamptz']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnailBlurhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  videoCallLinkId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentMaxOrderBy = {
  created?: InputMaybe<OrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  deletedAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  endDateTime?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  locationDetailsId?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  permission?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  spaceId?: InputMaybe<OrderBy>;
  startDateTime?: InputMaybe<OrderBy>;
  thumbnail?: InputMaybe<OrderBy>;
  thumbnailBlurhash?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  videoCallLinkId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OpenbookAppointmentsAppointmentMinFields = {
  created?: Maybe<Scalars['timestamptz']['output']>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  deletedAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDateTime?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  locationDetailsId?: Maybe<Scalars['uuid']['output']>;
  modified?: Maybe<Scalars['timestamptz']['output']>;
  permission?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  spaceId?: Maybe<Scalars['uuid']['output']>;
  startDateTime?: Maybe<Scalars['timestamptz']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnailBlurhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  videoCallLinkId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentMinOrderBy = {
  created?: InputMaybe<OrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  deletedAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  endDateTime?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  locationDetailsId?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  permission?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  spaceId?: InputMaybe<OrderBy>;
  startDateTime?: InputMaybe<OrderBy>;
  thumbnail?: InputMaybe<OrderBy>;
  thumbnailBlurhash?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  videoCallLinkId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookAppointmentsAppointment>;
};

/** input type for inserting object relation for remote table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentObjRelInsertInput = {
  data: OpenbookAppointmentsAppointmentInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookAppointmentsAppointmentOnConflict>;
};

/** on_conflict condition type for table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentOnConflict = {
  constraint: OpenbookAppointmentsAppointmentConstraint;
  updateColumns?: Array<OpenbookAppointmentsAppointmentUpdateColumn>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
};

/** Ordering options when selecting data from "openbook_appointments_appointment". */
export type OpenbookAppointmentsAppointmentOrderBy = {
  created?: InputMaybe<OrderBy>;
  creator?: InputMaybe<OpenbookAuthUserOrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  deletedAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  endDateTime?: InputMaybe<OrderBy>;
  geolocation?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  inviteOnly?: InputMaybe<OrderBy>;
  isDeleted?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  locationDetails?: InputMaybe<OpenbookAppointmentsLocationdetailsOrderBy>;
  locationDetailsId?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  participantsAggregate?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsAggregateOrderBy>;
  permission?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  space?: InputMaybe<OpenbookCommunitiesCommunityOrderBy>;
  spaceId?: InputMaybe<OrderBy>;
  startDateTime?: InputMaybe<OrderBy>;
  thumbnail?: InputMaybe<OrderBy>;
  thumbnailBlurhash?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  videoCallLink?: InputMaybe<OpenbookAppointmentsVideocalllinkOrderBy>;
  videoCallLinkId?: InputMaybe<OrderBy>;
};

/** columns and relationships of "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipants = {
  /** An object relationship */
  appointment: OpenbookAppointmentsAppointment;
  appointmentId: Scalars['uuid']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  user: OpenbookAuthUser;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsAggregate = {
  aggregate?: Maybe<OpenbookAppointmentsAppointmentParticipantsAggregateFields>;
  nodes: Array<OpenbookAppointmentsAppointmentParticipants>;
};

export type OpenbookAppointmentsAppointmentParticipantsAggregateBoolExp = {
  count?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsAggregateBoolExpCount>;
};

/** aggregate fields of "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsAggregateFields = {
  avg?: Maybe<OpenbookAppointmentsAppointmentParticipantsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookAppointmentsAppointmentParticipantsMaxFields>;
  min?: Maybe<OpenbookAppointmentsAppointmentParticipantsMinFields>;
  stddev?: Maybe<OpenbookAppointmentsAppointmentParticipantsStddevFields>;
  stddevPop?: Maybe<OpenbookAppointmentsAppointmentParticipantsStddevPopFields>;
  stddevSamp?: Maybe<OpenbookAppointmentsAppointmentParticipantsStddevSampFields>;
  sum?: Maybe<OpenbookAppointmentsAppointmentParticipantsSumFields>;
  varPop?: Maybe<OpenbookAppointmentsAppointmentParticipantsVarPopFields>;
  varSamp?: Maybe<OpenbookAppointmentsAppointmentParticipantsVarSampFields>;
  variance?: Maybe<OpenbookAppointmentsAppointmentParticipantsVarianceFields>;
};


/** aggregate fields of "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsAggregateOrderBy = {
  avg?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsMaxOrderBy>;
  min?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsMinOrderBy>;
  stddev?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsStddevOrderBy>;
  stddevPop?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsStddevSampOrderBy>;
  sum?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsSumOrderBy>;
  varPop?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsVarPopOrderBy>;
  varSamp?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsVarSampOrderBy>;
  variance?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsArrRelInsertInput = {
  data: Array<OpenbookAppointmentsAppointmentParticipantsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsOnConflict>;
};

/** aggregate avg on columns */
export type OpenbookAppointmentsAppointmentParticipantsAvgFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "openbook_appointments_appointment_participants". All fields are combined with a logical 'AND'. */
export type OpenbookAppointmentsAppointmentParticipantsBoolExp = {
  _and?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsBoolExp>>;
  _not?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsBoolExp>;
  _or?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsBoolExp>>;
  appointment?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
  appointmentId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  user?: InputMaybe<OpenbookAuthUserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsConstraint =
  /** unique or primary key constraint on columns "appointment_id", "user_id" */
  | 'openbook_appointments_ap_appointment_id_user_id_08d39e4e_uniq'
  /** unique or primary key constraint on columns "id" */
  | 'openbook_appointments_appointment_participants_pkey';

/** input type for incrementing numeric columns in table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsInsertInput = {
  appointment?: InputMaybe<OpenbookAppointmentsAppointmentObjRelInsertInput>;
  appointmentId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  user?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type OpenbookAppointmentsAppointmentParticipantsMaxFields = {
  appointmentId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsMaxOrderBy = {
  appointmentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OpenbookAppointmentsAppointmentParticipantsMinFields = {
  appointmentId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsMinOrderBy = {
  appointmentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookAppointmentsAppointmentParticipants>;
};

/** on_conflict condition type for table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsOnConflict = {
  constraint: OpenbookAppointmentsAppointmentParticipantsConstraint;
  updateColumns?: Array<OpenbookAppointmentsAppointmentParticipantsUpdateColumn>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsBoolExp>;
};

/** Ordering options when selecting data from "openbook_appointments_appointment_participants". */
export type OpenbookAppointmentsAppointmentParticipantsOrderBy = {
  appointment?: InputMaybe<OpenbookAppointmentsAppointmentOrderBy>;
  appointmentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user?: InputMaybe<OpenbookAuthUserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_appointments_appointment_participants */
export type OpenbookAppointmentsAppointmentParticipantsPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsSelectColumn =
  /** column name */
  | 'appointmentId'
  /** column name */
  | 'id'
  /** column name */
  | 'userId';

/** input type for updating data in table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsSetInput = {
  appointmentId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type OpenbookAppointmentsAppointmentParticipantsStddevFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type OpenbookAppointmentsAppointmentParticipantsStddevPopFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type OpenbookAppointmentsAppointmentParticipantsStddevSampFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookAppointmentsAppointmentParticipantsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookAppointmentsAppointmentParticipantsStreamCursorValueInput = {
  appointmentId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type OpenbookAppointmentsAppointmentParticipantsSumFields = {
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsSumOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** update columns of table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsUpdateColumn =
  /** column name */
  | 'appointmentId'
  /** column name */
  | 'id'
  /** column name */
  | 'userId';

export type OpenbookAppointmentsAppointmentParticipantsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookAppointmentsAppointmentParticipantsBoolExp;
};

/** aggregate varPop on columns */
export type OpenbookAppointmentsAppointmentParticipantsVarPopFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type OpenbookAppointmentsAppointmentParticipantsVarSampFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type OpenbookAppointmentsAppointmentParticipantsVarianceFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "openbook_appointments_appointment_participants" */
export type OpenbookAppointmentsAppointmentParticipantsVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_appointments_appointment */
export type OpenbookAppointmentsAppointmentPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentSelectColumn =
  /** column name */
  | 'created'
  /** column name */
  | 'creatorId'
  /** column name */
  | 'deletedAt'
  /** column name */
  | 'description'
  /** column name */
  | 'endDateTime'
  /** column name */
  | 'geolocation'
  /** column name */
  | 'id'
  /** column name */
  | 'inviteOnly'
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'location'
  /** column name */
  | 'locationDetailsId'
  /** column name */
  | 'modified'
  /** column name */
  | 'permission'
  /** column name */
  | 'slug'
  /** column name */
  | 'spaceId'
  /** column name */
  | 'startDateTime'
  /** column name */
  | 'thumbnail'
  /** column name */
  | 'thumbnailBlurhash'
  /** column name */
  | 'title'
  /** column name */
  | 'videoCallLinkId';

/** select "openbookAppointmentsAppointmentAggregateBoolExpBool_andArgumentsColumns" columns of table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentSelectColumnOpenbookAppointmentsAppointmentAggregateBoolExpBool_AndArgumentsColumns =
  /** column name */
  | 'inviteOnly'
  /** column name */
  | 'isDeleted';

/** select "openbookAppointmentsAppointmentAggregateBoolExpBool_orArgumentsColumns" columns of table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentSelectColumnOpenbookAppointmentsAppointmentAggregateBoolExpBool_OrArgumentsColumns =
  /** column name */
  | 'inviteOnly'
  /** column name */
  | 'isDeleted';

/** input type for updating data in table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentSetInput = {
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDateTime?: InputMaybe<Scalars['timestamptz']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inviteOnly?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationDetailsId?: InputMaybe<Scalars['uuid']['input']>;
  modified?: InputMaybe<Scalars['timestamptz']['input']>;
  permission?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  spaceId?: InputMaybe<Scalars['uuid']['input']>;
  startDateTime?: InputMaybe<Scalars['timestamptz']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  thumbnailBlurhash?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  videoCallLinkId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookAppointmentsAppointmentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookAppointmentsAppointmentStreamCursorValueInput = {
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDateTime?: InputMaybe<Scalars['timestamptz']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inviteOnly?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationDetailsId?: InputMaybe<Scalars['uuid']['input']>;
  modified?: InputMaybe<Scalars['timestamptz']['input']>;
  permission?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  spaceId?: InputMaybe<Scalars['uuid']['input']>;
  startDateTime?: InputMaybe<Scalars['timestamptz']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  thumbnailBlurhash?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  videoCallLinkId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "openbook_appointments_appointment" */
export type OpenbookAppointmentsAppointmentUpdateColumn =
  /** column name */
  | 'created'
  /** column name */
  | 'creatorId'
  /** column name */
  | 'deletedAt'
  /** column name */
  | 'description'
  /** column name */
  | 'endDateTime'
  /** column name */
  | 'geolocation'
  /** column name */
  | 'id'
  /** column name */
  | 'inviteOnly'
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'location'
  /** column name */
  | 'locationDetailsId'
  /** column name */
  | 'modified'
  /** column name */
  | 'permission'
  /** column name */
  | 'slug'
  /** column name */
  | 'spaceId'
  /** column name */
  | 'startDateTime'
  /** column name */
  | 'thumbnail'
  /** column name */
  | 'thumbnailBlurhash'
  /** column name */
  | 'title'
  /** column name */
  | 'videoCallLinkId';

export type OpenbookAppointmentsAppointmentUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookAppointmentsAppointmentSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookAppointmentsAppointmentBoolExp;
};

/** columns and relationships of "openbook_appointments_locationdetails" */
export type OpenbookAppointmentsLocationdetails = {
  /** An object relationship */
  appointment?: Maybe<OpenbookAppointmentsAppointment>;
  city?: Maybe<Scalars['String']['output']>;
  completeAddress?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  geolocation?: Maybe<Scalars['geometry']['output']>;
  id: Scalars['uuid']['output'];
  state?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "openbook_appointments_locationdetails" */
export type OpenbookAppointmentsLocationdetailsAggregate = {
  aggregate?: Maybe<OpenbookAppointmentsLocationdetailsAggregateFields>;
  nodes: Array<OpenbookAppointmentsLocationdetails>;
};

/** aggregate fields of "openbook_appointments_locationdetails" */
export type OpenbookAppointmentsLocationdetailsAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookAppointmentsLocationdetailsMaxFields>;
  min?: Maybe<OpenbookAppointmentsLocationdetailsMinFields>;
};


/** aggregate fields of "openbook_appointments_locationdetails" */
export type OpenbookAppointmentsLocationdetailsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookAppointmentsLocationdetailsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "openbook_appointments_locationdetails". All fields are combined with a logical 'AND'. */
export type OpenbookAppointmentsLocationdetailsBoolExp = {
  _and?: InputMaybe<Array<OpenbookAppointmentsLocationdetailsBoolExp>>;
  _not?: InputMaybe<OpenbookAppointmentsLocationdetailsBoolExp>;
  _or?: InputMaybe<Array<OpenbookAppointmentsLocationdetailsBoolExp>>;
  appointment?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
  city?: InputMaybe<StringComparisonExp>;
  completeAddress?: InputMaybe<StringComparisonExp>;
  country?: InputMaybe<StringComparisonExp>;
  geolocation?: InputMaybe<GeometryComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  state?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_appointments_locationdetails" */
export type OpenbookAppointmentsLocationdetailsConstraint =
  /** unique or primary key constraint on columns "id" */
  | 'openbook_appointments_locationdetails_pkey';

/** input type for inserting data into table "openbook_appointments_locationdetails" */
export type OpenbookAppointmentsLocationdetailsInsertInput = {
  appointment?: InputMaybe<OpenbookAppointmentsAppointmentObjRelInsertInput>;
  city?: InputMaybe<Scalars['String']['input']>;
  completeAddress?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type OpenbookAppointmentsLocationdetailsMaxFields = {
  city?: Maybe<Scalars['String']['output']>;
  completeAddress?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type OpenbookAppointmentsLocationdetailsMinFields = {
  city?: Maybe<Scalars['String']['output']>;
  completeAddress?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "openbook_appointments_locationdetails" */
export type OpenbookAppointmentsLocationdetailsMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookAppointmentsLocationdetails>;
};

/** input type for inserting object relation for remote table "openbook_appointments_locationdetails" */
export type OpenbookAppointmentsLocationdetailsObjRelInsertInput = {
  data: OpenbookAppointmentsLocationdetailsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookAppointmentsLocationdetailsOnConflict>;
};

/** on_conflict condition type for table "openbook_appointments_locationdetails" */
export type OpenbookAppointmentsLocationdetailsOnConflict = {
  constraint: OpenbookAppointmentsLocationdetailsConstraint;
  updateColumns?: Array<OpenbookAppointmentsLocationdetailsUpdateColumn>;
  where?: InputMaybe<OpenbookAppointmentsLocationdetailsBoolExp>;
};

/** Ordering options when selecting data from "openbook_appointments_locationdetails". */
export type OpenbookAppointmentsLocationdetailsOrderBy = {
  appointment?: InputMaybe<OpenbookAppointmentsAppointmentOrderBy>;
  city?: InputMaybe<OrderBy>;
  completeAddress?: InputMaybe<OrderBy>;
  country?: InputMaybe<OrderBy>;
  geolocation?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  state?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_appointments_locationdetails */
export type OpenbookAppointmentsLocationdetailsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_appointments_locationdetails" */
export type OpenbookAppointmentsLocationdetailsSelectColumn =
  /** column name */
  | 'city'
  /** column name */
  | 'completeAddress'
  /** column name */
  | 'country'
  /** column name */
  | 'geolocation'
  /** column name */
  | 'id'
  /** column name */
  | 'state';

/** input type for updating data in table "openbook_appointments_locationdetails" */
export type OpenbookAppointmentsLocationdetailsSetInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  completeAddress?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "openbook_appointments_locationdetails" */
export type OpenbookAppointmentsLocationdetailsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookAppointmentsLocationdetailsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookAppointmentsLocationdetailsStreamCursorValueInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  completeAddress?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "openbook_appointments_locationdetails" */
export type OpenbookAppointmentsLocationdetailsUpdateColumn =
  /** column name */
  | 'city'
  /** column name */
  | 'completeAddress'
  /** column name */
  | 'country'
  /** column name */
  | 'geolocation'
  /** column name */
  | 'id'
  /** column name */
  | 'state';

export type OpenbookAppointmentsLocationdetailsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookAppointmentsLocationdetailsSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookAppointmentsLocationdetailsBoolExp;
};

/** columns and relationships of "openbook_appointments_videocalllink" */
export type OpenbookAppointmentsVideocalllink = {
  additionalInfo?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  appointment?: Maybe<OpenbookAppointmentsAppointment>;
  id: Scalars['uuid']['output'];
  url: Scalars['String']['output'];
};

/** aggregated selection of "openbook_appointments_videocalllink" */
export type OpenbookAppointmentsVideocalllinkAggregate = {
  aggregate?: Maybe<OpenbookAppointmentsVideocalllinkAggregateFields>;
  nodes: Array<OpenbookAppointmentsVideocalllink>;
};

/** aggregate fields of "openbook_appointments_videocalllink" */
export type OpenbookAppointmentsVideocalllinkAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookAppointmentsVideocalllinkMaxFields>;
  min?: Maybe<OpenbookAppointmentsVideocalllinkMinFields>;
};


/** aggregate fields of "openbook_appointments_videocalllink" */
export type OpenbookAppointmentsVideocalllinkAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookAppointmentsVideocalllinkSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "openbook_appointments_videocalllink". All fields are combined with a logical 'AND'. */
export type OpenbookAppointmentsVideocalllinkBoolExp = {
  _and?: InputMaybe<Array<OpenbookAppointmentsVideocalllinkBoolExp>>;
  _not?: InputMaybe<OpenbookAppointmentsVideocalllinkBoolExp>;
  _or?: InputMaybe<Array<OpenbookAppointmentsVideocalllinkBoolExp>>;
  additionalInfo?: InputMaybe<StringComparisonExp>;
  appointment?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_appointments_videocalllink" */
export type OpenbookAppointmentsVideocalllinkConstraint =
  /** unique or primary key constraint on columns "id" */
  | 'openbook_appointments_videocalllink_pkey';

/** input type for inserting data into table "openbook_appointments_videocalllink" */
export type OpenbookAppointmentsVideocalllinkInsertInput = {
  additionalInfo?: InputMaybe<Scalars['String']['input']>;
  appointment?: InputMaybe<OpenbookAppointmentsAppointmentObjRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type OpenbookAppointmentsVideocalllinkMaxFields = {
  additionalInfo?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type OpenbookAppointmentsVideocalllinkMinFields = {
  additionalInfo?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "openbook_appointments_videocalllink" */
export type OpenbookAppointmentsVideocalllinkMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookAppointmentsVideocalllink>;
};

/** input type for inserting object relation for remote table "openbook_appointments_videocalllink" */
export type OpenbookAppointmentsVideocalllinkObjRelInsertInput = {
  data: OpenbookAppointmentsVideocalllinkInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookAppointmentsVideocalllinkOnConflict>;
};

/** on_conflict condition type for table "openbook_appointments_videocalllink" */
export type OpenbookAppointmentsVideocalllinkOnConflict = {
  constraint: OpenbookAppointmentsVideocalllinkConstraint;
  updateColumns?: Array<OpenbookAppointmentsVideocalllinkUpdateColumn>;
  where?: InputMaybe<OpenbookAppointmentsVideocalllinkBoolExp>;
};

/** Ordering options when selecting data from "openbook_appointments_videocalllink". */
export type OpenbookAppointmentsVideocalllinkOrderBy = {
  additionalInfo?: InputMaybe<OrderBy>;
  appointment?: InputMaybe<OpenbookAppointmentsAppointmentOrderBy>;
  id?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_appointments_videocalllink */
export type OpenbookAppointmentsVideocalllinkPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_appointments_videocalllink" */
export type OpenbookAppointmentsVideocalllinkSelectColumn =
  /** column name */
  | 'additionalInfo'
  /** column name */
  | 'id'
  /** column name */
  | 'url';

/** input type for updating data in table "openbook_appointments_videocalllink" */
export type OpenbookAppointmentsVideocalllinkSetInput = {
  additionalInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "openbook_appointments_videocalllink" */
export type OpenbookAppointmentsVideocalllinkStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookAppointmentsVideocalllinkStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookAppointmentsVideocalllinkStreamCursorValueInput = {
  additionalInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "openbook_appointments_videocalllink" */
export type OpenbookAppointmentsVideocalllinkUpdateColumn =
  /** column name */
  | 'additionalInfo'
  /** column name */
  | 'id'
  /** column name */
  | 'url';

export type OpenbookAppointmentsVideocalllinkUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookAppointmentsVideocalllinkSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookAppointmentsVideocalllinkBoolExp;
};

/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUser = {
  areGuidelinesAccepted: Scalars['Boolean']['output'];
  /** An array relationship */
  comments: Array<OpenbookPostsPostcomment>;
  /** An aggregate relationship */
  commentsAggregate: OpenbookPostsPostcommentAggregate;
  connectionsCircleId?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  createdAppointments: Array<OpenbookAppointmentsAppointment>;
  /** An aggregate relationship */
  createdAppointmentsAggregate: OpenbookAppointmentsAppointmentAggregate;
  /** An array relationship */
  createdLinkhubTools: Array<OpenbookCommunitiesCollaborationtool>;
  /** An aggregate relationship */
  createdLinkhubToolsAggregate: OpenbookCommunitiesCollaborationtoolAggregate;
  /** An array relationship */
  createdSpaces: Array<OpenbookCommunitiesCommunity>;
  /** An aggregate relationship */
  createdSpacesAggregate: OpenbookCommunitiesCommunityAggregate;
  /** An array relationship */
  createdTasks: Array<OpenbookCommunitiesTask>;
  /** An aggregate relationship */
  createdTasksAggregate: OpenbookCommunitiesTaskAggregate;
  dateJoined: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  identity?: Maybe<Scalars['String']['output']>;
  inviteCount: Scalars['smallint']['output'];
  isActive: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isEmployee: Scalars['Boolean']['output'];
  isModerator: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  isSuperuser: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  languageId?: Maybe<Scalars['uuid']['output']>;
  lastLogin?: Maybe<Scalars['timestamptz']['output']>;
  lastSeenNotificationTimestamp?: Maybe<Scalars['timestamptz']['output']>;
  password: Scalars['String']['output'];
  /** An array relationship */
  posts: Array<OpenbookPostsPost>;
  /** An aggregate relationship */
  postsAggregate: OpenbookPostsPostAggregate;
  /** An object relationship */
  profile?: Maybe<OpenbookAuthUserprofile>;
  role?: Maybe<Scalars['String']['output']>;
  trackingConsentAnalytics?: Maybe<Scalars['Boolean']['output']>;
  trackingConsentPersonalization?: Maybe<Scalars['Boolean']['output']>;
  translationLanguageId?: Maybe<Scalars['uuid']['output']>;
  username: Scalars['String']['output'];
  visibility: Scalars['String']['output'];
};


/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserCommentsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostcommentOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};


/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserCommentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostcommentOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};


/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserCreatedAppointmentsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
};


/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserCreatedAppointmentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
};


/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserCreatedLinkhubToolsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
};


/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserCreatedLinkhubToolsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
};


/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserCreatedSpacesArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunityOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};


/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserCreatedSpacesAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunityOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};


/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserCreatedTasksArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
};


/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserCreatedTasksAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
};


/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserPostsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};


/** columns and relationships of "openbook_auth_user" */
export type OpenbookAuthUserPostsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type OpenbookAuthUserAvgFields = {
  inviteCount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "openbook_auth_user". All fields are combined with a logical 'AND'. */
export type OpenbookAuthUserBoolExp = {
  _and?: InputMaybe<Array<OpenbookAuthUserBoolExp>>;
  _not?: InputMaybe<OpenbookAuthUserBoolExp>;
  _or?: InputMaybe<Array<OpenbookAuthUserBoolExp>>;
  areGuidelinesAccepted?: InputMaybe<BooleanComparisonExp>;
  comments?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
  commentsAggregate?: InputMaybe<OpenbookPostsPostcommentAggregateBoolExp>;
  connectionsCircleId?: InputMaybe<UuidComparisonExp>;
  createdAppointments?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
  createdAppointmentsAggregate?: InputMaybe<OpenbookAppointmentsAppointmentAggregateBoolExp>;
  createdLinkhubTools?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
  createdLinkhubToolsAggregate?: InputMaybe<OpenbookCommunitiesCollaborationtoolAggregateBoolExp>;
  createdSpaces?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  createdSpacesAggregate?: InputMaybe<OpenbookCommunitiesCommunityAggregateBoolExp>;
  createdTasks?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
  createdTasksAggregate?: InputMaybe<OpenbookCommunitiesTaskAggregateBoolExp>;
  dateJoined?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  identity?: InputMaybe<StringComparisonExp>;
  inviteCount?: InputMaybe<SmallintComparisonExp>;
  isActive?: InputMaybe<BooleanComparisonExp>;
  isDeleted?: InputMaybe<BooleanComparisonExp>;
  isEmailVerified?: InputMaybe<BooleanComparisonExp>;
  isEmployee?: InputMaybe<BooleanComparisonExp>;
  isModerator?: InputMaybe<BooleanComparisonExp>;
  isStaff?: InputMaybe<BooleanComparisonExp>;
  isSuperuser?: InputMaybe<BooleanComparisonExp>;
  isVerified?: InputMaybe<BooleanComparisonExp>;
  languageId?: InputMaybe<UuidComparisonExp>;
  lastLogin?: InputMaybe<TimestamptzComparisonExp>;
  lastSeenNotificationTimestamp?: InputMaybe<TimestamptzComparisonExp>;
  password?: InputMaybe<StringComparisonExp>;
  posts?: InputMaybe<OpenbookPostsPostBoolExp>;
  postsAggregate?: InputMaybe<OpenbookPostsPostAggregateBoolExp>;
  profile?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
  role?: InputMaybe<StringComparisonExp>;
  trackingConsentAnalytics?: InputMaybe<BooleanComparisonExp>;
  trackingConsentPersonalization?: InputMaybe<BooleanComparisonExp>;
  translationLanguageId?: InputMaybe<UuidComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
  visibility?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_auth_user" */
export type OpenbookAuthUserConstraint =
  /** unique or primary key constraint on columns "email" */
  | 'openbook_auth_user_email_539766fb_uniq'
  /** unique or primary key constraint on columns "identity" */
  | 'openbook_auth_user_identity_key'
  /** unique or primary key constraint on columns "id" */
  | 'openbook_auth_user_pkey'
  /** unique or primary key constraint on columns "username" */
  | 'openbook_auth_user_username_9c72c677_uniq';

/** input type for incrementing numeric columns in table "openbook_auth_user" */
export type OpenbookAuthUserIncInput = {
  inviteCount?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "openbook_auth_user" */
export type OpenbookAuthUserInsertInput = {
  areGuidelinesAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  comments?: InputMaybe<OpenbookPostsPostcommentArrRelInsertInput>;
  connectionsCircleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAppointments?: InputMaybe<OpenbookAppointmentsAppointmentArrRelInsertInput>;
  createdLinkhubTools?: InputMaybe<OpenbookCommunitiesCollaborationtoolArrRelInsertInput>;
  createdSpaces?: InputMaybe<OpenbookCommunitiesCommunityArrRelInsertInput>;
  createdTasks?: InputMaybe<OpenbookCommunitiesTaskArrRelInsertInput>;
  dateJoined?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  inviteCount?: InputMaybe<Scalars['smallint']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isEmployee?: InputMaybe<Scalars['Boolean']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperuser?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  languageId?: InputMaybe<Scalars['uuid']['input']>;
  lastLogin?: InputMaybe<Scalars['timestamptz']['input']>;
  lastSeenNotificationTimestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<OpenbookPostsPostArrRelInsertInput>;
  profile?: InputMaybe<OpenbookAuthUserprofileObjRelInsertInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  trackingConsentAnalytics?: InputMaybe<Scalars['Boolean']['input']>;
  trackingConsentPersonalization?: InputMaybe<Scalars['Boolean']['input']>;
  translationLanguageId?: InputMaybe<Scalars['uuid']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type OpenbookAuthUserMaxFields = {
  connectionsCircleId?: Maybe<Scalars['uuid']['output']>;
  dateJoined?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  inviteCount?: Maybe<Scalars['smallint']['output']>;
  languageId?: Maybe<Scalars['uuid']['output']>;
  lastLogin?: Maybe<Scalars['timestamptz']['output']>;
  lastSeenNotificationTimestamp?: Maybe<Scalars['timestamptz']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  translationLanguageId?: Maybe<Scalars['uuid']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type OpenbookAuthUserMinFields = {
  connectionsCircleId?: Maybe<Scalars['uuid']['output']>;
  dateJoined?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  inviteCount?: Maybe<Scalars['smallint']['output']>;
  languageId?: Maybe<Scalars['uuid']['output']>;
  lastLogin?: Maybe<Scalars['timestamptz']['output']>;
  lastSeenNotificationTimestamp?: Maybe<Scalars['timestamptz']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  translationLanguageId?: Maybe<Scalars['uuid']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "openbook_auth_user" */
export type OpenbookAuthUserMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
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
  commentsAggregate?: InputMaybe<OpenbookPostsPostcommentAggregateOrderBy>;
  connectionsCircleId?: InputMaybe<OrderBy>;
  createdAppointmentsAggregate?: InputMaybe<OpenbookAppointmentsAppointmentAggregateOrderBy>;
  createdLinkhubToolsAggregate?: InputMaybe<OpenbookCommunitiesCollaborationtoolAggregateOrderBy>;
  createdSpacesAggregate?: InputMaybe<OpenbookCommunitiesCommunityAggregateOrderBy>;
  createdTasksAggregate?: InputMaybe<OpenbookCommunitiesTaskAggregateOrderBy>;
  dateJoined?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  identity?: InputMaybe<OrderBy>;
  inviteCount?: InputMaybe<OrderBy>;
  isActive?: InputMaybe<OrderBy>;
  isDeleted?: InputMaybe<OrderBy>;
  isEmailVerified?: InputMaybe<OrderBy>;
  isEmployee?: InputMaybe<OrderBy>;
  isModerator?: InputMaybe<OrderBy>;
  isStaff?: InputMaybe<OrderBy>;
  isSuperuser?: InputMaybe<OrderBy>;
  isVerified?: InputMaybe<OrderBy>;
  languageId?: InputMaybe<OrderBy>;
  lastLogin?: InputMaybe<OrderBy>;
  lastSeenNotificationTimestamp?: InputMaybe<OrderBy>;
  password?: InputMaybe<OrderBy>;
  postsAggregate?: InputMaybe<OpenbookPostsPostAggregateOrderBy>;
  profile?: InputMaybe<OpenbookAuthUserprofileOrderBy>;
  role?: InputMaybe<OrderBy>;
  trackingConsentAnalytics?: InputMaybe<OrderBy>;
  trackingConsentPersonalization?: InputMaybe<OrderBy>;
  translationLanguageId?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
  visibility?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_auth_user */
export type OpenbookAuthUserPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_auth_user" */
export type OpenbookAuthUserSelectColumn =
  /** column name */
  | 'areGuidelinesAccepted'
  /** column name */
  | 'connectionsCircleId'
  /** column name */
  | 'dateJoined'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'identity'
  /** column name */
  | 'inviteCount'
  /** column name */
  | 'isActive'
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'isEmailVerified'
  /** column name */
  | 'isEmployee'
  /** column name */
  | 'isModerator'
  /** column name */
  | 'isStaff'
  /** column name */
  | 'isSuperuser'
  /** column name */
  | 'isVerified'
  /** column name */
  | 'languageId'
  /** column name */
  | 'lastLogin'
  /** column name */
  | 'lastSeenNotificationTimestamp'
  /** column name */
  | 'password'
  /** column name */
  | 'role'
  /** column name */
  | 'trackingConsentAnalytics'
  /** column name */
  | 'trackingConsentPersonalization'
  /** column name */
  | 'translationLanguageId'
  /** column name */
  | 'username'
  /** column name */
  | 'visibility';

/** input type for updating data in table "openbook_auth_user" */
export type OpenbookAuthUserSetInput = {
  areGuidelinesAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  connectionsCircleId?: InputMaybe<Scalars['uuid']['input']>;
  dateJoined?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  inviteCount?: InputMaybe<Scalars['smallint']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isEmployee?: InputMaybe<Scalars['Boolean']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperuser?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  languageId?: InputMaybe<Scalars['uuid']['input']>;
  lastLogin?: InputMaybe<Scalars['timestamptz']['input']>;
  lastSeenNotificationTimestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  trackingConsentAnalytics?: InputMaybe<Scalars['Boolean']['input']>;
  trackingConsentPersonalization?: InputMaybe<Scalars['Boolean']['input']>;
  translationLanguageId?: InputMaybe<Scalars['uuid']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type OpenbookAuthUserStddevFields = {
  inviteCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type OpenbookAuthUserStddevPopFields = {
  inviteCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type OpenbookAuthUserStddevSampFields = {
  inviteCount?: Maybe<Scalars['Float']['output']>;
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
  areGuidelinesAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  connectionsCircleId?: InputMaybe<Scalars['uuid']['input']>;
  dateJoined?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  inviteCount?: InputMaybe<Scalars['smallint']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isEmployee?: InputMaybe<Scalars['Boolean']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperuser?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  languageId?: InputMaybe<Scalars['uuid']['input']>;
  lastLogin?: InputMaybe<Scalars['timestamptz']['input']>;
  lastSeenNotificationTimestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  trackingConsentAnalytics?: InputMaybe<Scalars['Boolean']['input']>;
  trackingConsentPersonalization?: InputMaybe<Scalars['Boolean']['input']>;
  translationLanguageId?: InputMaybe<Scalars['uuid']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type OpenbookAuthUserSumFields = {
  inviteCount?: Maybe<Scalars['smallint']['output']>;
};

/** update columns of table "openbook_auth_user" */
export type OpenbookAuthUserUpdateColumn =
  /** column name */
  | 'areGuidelinesAccepted'
  /** column name */
  | 'connectionsCircleId'
  /** column name */
  | 'dateJoined'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'identity'
  /** column name */
  | 'inviteCount'
  /** column name */
  | 'isActive'
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'isEmailVerified'
  /** column name */
  | 'isEmployee'
  /** column name */
  | 'isModerator'
  /** column name */
  | 'isStaff'
  /** column name */
  | 'isSuperuser'
  /** column name */
  | 'isVerified'
  /** column name */
  | 'languageId'
  /** column name */
  | 'lastLogin'
  /** column name */
  | 'lastSeenNotificationTimestamp'
  /** column name */
  | 'password'
  /** column name */
  | 'role'
  /** column name */
  | 'trackingConsentAnalytics'
  /** column name */
  | 'trackingConsentPersonalization'
  /** column name */
  | 'translationLanguageId'
  /** column name */
  | 'username'
  /** column name */
  | 'visibility';

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
  inviteCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type OpenbookAuthUserVarSampFields = {
  inviteCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type OpenbookAuthUserVarianceFields = {
  inviteCount?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "openbook_auth_userprofile" */
export type OpenbookAuthUserprofile = {
  aboutMe?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  avatarBlurhash?: Maybe<Scalars['String']['output']>;
  communityPostsVisible: Scalars['Boolean']['output'];
  cover?: Maybe<Scalars['String']['output']>;
  coverBlurhash?: Maybe<Scalars['String']['output']>;
  engagementLevel?: Maybe<Scalars['String']['output']>;
  followersCountVisible: Scalars['Boolean']['output'];
  geolocation?: Maybe<Scalars['geometry']['output']>;
  geolocationId?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  isOfLegalAge: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user: OpenbookAuthUser;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileAggregate = {
  aggregate?: Maybe<OpenbookAuthUserprofileAggregateFields>;
  nodes: Array<OpenbookAuthUserprofile>;
};

/** aggregate fields of "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookAuthUserprofileMaxFields>;
  min?: Maybe<OpenbookAuthUserprofileMinFields>;
};


/** aggregate fields of "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookAuthUserprofileSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  | 'openbook_auth_userprofile_pkey'
  /** unique or primary key constraint on columns "user_id" */
  | 'openbook_auth_userprofile_user_id_key';

/** input type for inserting data into table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileInsertInput = {
  aboutMe?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatarBlurhash?: InputMaybe<Scalars['String']['input']>;
  communityPostsVisible?: InputMaybe<Scalars['Boolean']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  coverBlurhash?: InputMaybe<Scalars['String']['input']>;
  engagementLevel?: InputMaybe<Scalars['String']['input']>;
  followersCountVisible?: InputMaybe<Scalars['Boolean']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  geolocationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isOfLegalAge?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type OpenbookAuthUserprofileMaxFields = {
  aboutMe?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  avatarBlurhash?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  coverBlurhash?: Maybe<Scalars['String']['output']>;
  engagementLevel?: Maybe<Scalars['String']['output']>;
  geolocationId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type OpenbookAuthUserprofileMinFields = {
  aboutMe?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  avatarBlurhash?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  coverBlurhash?: Maybe<Scalars['String']['output']>;
  engagementLevel?: Maybe<Scalars['String']['output']>;
  geolocationId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
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
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileSelectColumn =
  /** column name */
  | 'aboutMe'
  /** column name */
  | 'avatar'
  /** column name */
  | 'avatarBlurhash'
  /** column name */
  | 'communityPostsVisible'
  /** column name */
  | 'cover'
  /** column name */
  | 'coverBlurhash'
  /** column name */
  | 'engagementLevel'
  /** column name */
  | 'followersCountVisible'
  /** column name */
  | 'geolocation'
  /** column name */
  | 'geolocationId'
  /** column name */
  | 'id'
  /** column name */
  | 'isOfLegalAge'
  /** column name */
  | 'lastName'
  /** column name */
  | 'location'
  /** column name */
  | 'name'
  /** column name */
  | 'pronouns'
  /** column name */
  | 'url'
  /** column name */
  | 'userId';

/** input type for updating data in table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileSetInput = {
  aboutMe?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatarBlurhash?: InputMaybe<Scalars['String']['input']>;
  communityPostsVisible?: InputMaybe<Scalars['Boolean']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  coverBlurhash?: InputMaybe<Scalars['String']['input']>;
  engagementLevel?: InputMaybe<Scalars['String']['input']>;
  followersCountVisible?: InputMaybe<Scalars['Boolean']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  geolocationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isOfLegalAge?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
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
  aboutMe?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatarBlurhash?: InputMaybe<Scalars['String']['input']>;
  communityPostsVisible?: InputMaybe<Scalars['Boolean']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  coverBlurhash?: InputMaybe<Scalars['String']['input']>;
  engagementLevel?: InputMaybe<Scalars['String']['input']>;
  followersCountVisible?: InputMaybe<Scalars['Boolean']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  geolocationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isOfLegalAge?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "openbook_auth_userprofile" */
export type OpenbookAuthUserprofileUpdateColumn =
  /** column name */
  | 'aboutMe'
  /** column name */
  | 'avatar'
  /** column name */
  | 'avatarBlurhash'
  /** column name */
  | 'communityPostsVisible'
  /** column name */
  | 'cover'
  /** column name */
  | 'coverBlurhash'
  /** column name */
  | 'engagementLevel'
  /** column name */
  | 'followersCountVisible'
  /** column name */
  | 'geolocation'
  /** column name */
  | 'geolocationId'
  /** column name */
  | 'id'
  /** column name */
  | 'isOfLegalAge'
  /** column name */
  | 'lastName'
  /** column name */
  | 'location'
  /** column name */
  | 'name'
  /** column name */
  | 'pronouns'
  /** column name */
  | 'url'
  /** column name */
  | 'userId';

export type OpenbookAuthUserprofileUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookAuthUserprofileSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookAuthUserprofileBoolExp;
};

/** columns and relationships of "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtool = {
  collectionType: Scalars['String']['output'];
  communityId: Scalars['uuid']['output'];
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  creator?: Maybe<OpenbookAuthUser>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domain: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  space: OpenbookCommunitiesCommunity;
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnailBlurhash?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** aggregated selection of "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolAggregate = {
  aggregate?: Maybe<OpenbookCommunitiesCollaborationtoolAggregateFields>;
  nodes: Array<OpenbookCommunitiesCollaborationtool>;
};

export type OpenbookCommunitiesCollaborationtoolAggregateBoolExp = {
  count?: InputMaybe<OpenbookCommunitiesCollaborationtoolAggregateBoolExpCount>;
};

/** aggregate fields of "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookCommunitiesCollaborationtoolMaxFields>;
  min?: Maybe<OpenbookCommunitiesCollaborationtoolMinFields>;
};


/** aggregate fields of "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OpenbookCommunitiesCollaborationtoolMaxOrderBy>;
  min?: InputMaybe<OpenbookCommunitiesCollaborationtoolMinOrderBy>;
};

/** input type for inserting array relation for remote table "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolArrRelInsertInput = {
  data: Array<OpenbookCommunitiesCollaborationtoolInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookCommunitiesCollaborationtoolOnConflict>;
};

/** Boolean expression to filter rows from the table "openbook_communities_collaborationtool". All fields are combined with a logical 'AND'. */
export type OpenbookCommunitiesCollaborationtoolBoolExp = {
  _and?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolBoolExp>>;
  _not?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
  _or?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolBoolExp>>;
  collectionType?: InputMaybe<StringComparisonExp>;
  communityId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  creator?: InputMaybe<OpenbookAuthUserBoolExp>;
  creatorId?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  domain?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  space?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  thumbnail?: InputMaybe<StringComparisonExp>;
  thumbnailBlurhash?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolConstraint =
  /** unique or primary key constraint on columns "id" */
  | 'openbook_communities_collaborationtool_pkey';

/** input type for inserting data into table "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolInsertInput = {
  collectionType?: InputMaybe<Scalars['String']['input']>;
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  creator?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  space?: InputMaybe<OpenbookCommunitiesCommunityObjRelInsertInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  thumbnailBlurhash?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type OpenbookCommunitiesCollaborationtoolMaxFields = {
  collectionType?: Maybe<Scalars['String']['output']>;
  communityId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnailBlurhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolMaxOrderBy = {
  collectionType?: InputMaybe<OrderBy>;
  communityId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  domain?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  thumbnail?: InputMaybe<OrderBy>;
  thumbnailBlurhash?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OpenbookCommunitiesCollaborationtoolMinFields = {
  collectionType?: Maybe<Scalars['String']['output']>;
  communityId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnailBlurhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolMinOrderBy = {
  collectionType?: InputMaybe<OrderBy>;
  communityId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  domain?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  thumbnail?: InputMaybe<OrderBy>;
  thumbnailBlurhash?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookCommunitiesCollaborationtool>;
};

/** on_conflict condition type for table "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolOnConflict = {
  constraint: OpenbookCommunitiesCollaborationtoolConstraint;
  updateColumns?: Array<OpenbookCommunitiesCollaborationtoolUpdateColumn>;
  where?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
};

/** Ordering options when selecting data from "openbook_communities_collaborationtool". */
export type OpenbookCommunitiesCollaborationtoolOrderBy = {
  collectionType?: InputMaybe<OrderBy>;
  communityId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  creator?: InputMaybe<OpenbookAuthUserOrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  domain?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  space?: InputMaybe<OpenbookCommunitiesCommunityOrderBy>;
  thumbnail?: InputMaybe<OrderBy>;
  thumbnailBlurhash?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_communities_collaborationtool */
export type OpenbookCommunitiesCollaborationtoolPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolSelectColumn =
  /** column name */
  | 'collectionType'
  /** column name */
  | 'communityId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'creatorId'
  /** column name */
  | 'description'
  /** column name */
  | 'domain'
  /** column name */
  | 'id'
  /** column name */
  | 'thumbnail'
  /** column name */
  | 'thumbnailBlurhash'
  /** column name */
  | 'title'
  /** column name */
  | 'url';

/** input type for updating data in table "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolSetInput = {
  collectionType?: InputMaybe<Scalars['String']['input']>;
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  thumbnailBlurhash?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookCommunitiesCollaborationtoolStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookCommunitiesCollaborationtoolStreamCursorValueInput = {
  collectionType?: InputMaybe<Scalars['String']['input']>;
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  thumbnailBlurhash?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "openbook_communities_collaborationtool" */
export type OpenbookCommunitiesCollaborationtoolUpdateColumn =
  /** column name */
  | 'collectionType'
  /** column name */
  | 'communityId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'creatorId'
  /** column name */
  | 'description'
  /** column name */
  | 'domain'
  /** column name */
  | 'id'
  /** column name */
  | 'thumbnail'
  /** column name */
  | 'thumbnailBlurhash'
  /** column name */
  | 'title'
  /** column name */
  | 'url';

export type OpenbookCommunitiesCollaborationtoolUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookCommunitiesCollaborationtoolSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookCommunitiesCollaborationtoolBoolExp;
};

/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunity = {
  /** An array relationship */
  appointments: Array<OpenbookAppointmentsAppointment>;
  /** An aggregate relationship */
  appointmentsAggregate: OpenbookAppointmentsAppointmentAggregate;
  avatar?: Maybe<Scalars['String']['output']>;
  avatarBlurhash?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  contactDescription?: Maybe<Scalars['String']['output']>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactPhone?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  coverBlurhash?: Maybe<Scalars['String']['output']>;
  created: Scalars['timestamptz']['output'];
  /** An object relationship */
  creator?: Maybe<OpenbookAuthUser>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  externalLinks: Array<OpenbookCommunitiesExternallink>;
  /** An aggregate relationship */
  externalLinksAggregate: OpenbookCommunitiesExternallinkAggregate;
  geolocation?: Maybe<Scalars['geometry']['output']>;
  id: Scalars['uuid']['output'];
  invitesEnabled: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  /** An array relationship */
  linkhubTools: Array<OpenbookCommunitiesCollaborationtool>;
  /** An aggregate relationship */
  linkhubToolsAggregate: OpenbookCommunitiesCollaborationtoolAggregate;
  location?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  members: Array<OpenbookCommunitiesCommunitymembership>;
  /** An aggregate relationship */
  membersAggregate: OpenbookCommunitiesCommunitymembershipAggregate;
  name: Scalars['String']['output'];
  /** An array relationship */
  onboardingSteps: Array<OpenbookCommunitiesOnboardingstep>;
  /** An aggregate relationship */
  onboardingStepsAggregate: OpenbookCommunitiesOnboardingstepAggregate;
  /** An array relationship */
  posts: Array<OpenbookPostsPost>;
  /** An aggregate relationship */
  postsAggregate: OpenbookPostsPostAggregate;
  rules?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  tasks: Array<OpenbookCommunitiesTask>;
  /** An aggregate relationship */
  tasksAggregate: OpenbookCommunitiesTaskAggregate;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  userAdjective?: Maybe<Scalars['String']['output']>;
  usersAdjective?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityAppointmentsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityAppointmentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityExternalLinksArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesExternallinkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesExternallinkOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesExternallinkBoolExp>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityExternalLinksAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesExternallinkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesExternallinkOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesExternallinkBoolExp>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityLinkhubToolsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityLinkhubToolsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityMembersArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunitymembershipBoolExp>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityMembersAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunitymembershipBoolExp>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityOnboardingStepsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesOnboardingstepBoolExp>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityOnboardingStepsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesOnboardingstepBoolExp>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityPostsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityPostsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityTasksArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
};


/** columns and relationships of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityTasksAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
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
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookCommunitiesCommunityMaxFields>;
  min?: Maybe<OpenbookCommunitiesCommunityMinFields>;
};


/** aggregate fields of "openbook_communities_community" */
export type OpenbookCommunitiesCommunityAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  appointments?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
  appointmentsAggregate?: InputMaybe<OpenbookAppointmentsAppointmentAggregateBoolExp>;
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
  externalLinks?: InputMaybe<OpenbookCommunitiesExternallinkBoolExp>;
  externalLinksAggregate?: InputMaybe<OpenbookCommunitiesExternallinkAggregateBoolExp>;
  geolocation?: InputMaybe<GeometryComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  invitesEnabled?: InputMaybe<BooleanComparisonExp>;
  isDeleted?: InputMaybe<BooleanComparisonExp>;
  linkhubTools?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
  linkhubToolsAggregate?: InputMaybe<OpenbookCommunitiesCollaborationtoolAggregateBoolExp>;
  location?: InputMaybe<StringComparisonExp>;
  members?: InputMaybe<OpenbookCommunitiesCommunitymembershipBoolExp>;
  membersAggregate?: InputMaybe<OpenbookCommunitiesCommunitymembershipAggregateBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  onboardingSteps?: InputMaybe<OpenbookCommunitiesOnboardingstepBoolExp>;
  onboardingStepsAggregate?: InputMaybe<OpenbookCommunitiesOnboardingstepAggregateBoolExp>;
  posts?: InputMaybe<OpenbookPostsPostBoolExp>;
  postsAggregate?: InputMaybe<OpenbookPostsPostAggregateBoolExp>;
  rules?: InputMaybe<StringComparisonExp>;
  tasks?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
  tasksAggregate?: InputMaybe<OpenbookCommunitiesTaskAggregateBoolExp>;
  title?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  userAdjective?: InputMaybe<StringComparisonExp>;
  usersAdjective?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityConstraint =
  /** unique or primary key constraint on columns "name" */
  | 'openbook_communities_community_name_key'
  /** unique or primary key constraint on columns "id" */
  | 'openbook_communities_community_pkey';

/** input type for inserting data into table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityInsertInput = {
  appointments?: InputMaybe<OpenbookAppointmentsAppointmentArrRelInsertInput>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatarBlurhash?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  contactDescription?: InputMaybe<Scalars['String']['input']>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  contactPhone?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  coverBlurhash?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  creator?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  externalLinks?: InputMaybe<OpenbookCommunitiesExternallinkArrRelInsertInput>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  linkhubTools?: InputMaybe<OpenbookCommunitiesCollaborationtoolArrRelInsertInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<OpenbookCommunitiesCommunitymembershipArrRelInsertInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  onboardingSteps?: InputMaybe<OpenbookCommunitiesOnboardingstepArrRelInsertInput>;
  posts?: InputMaybe<OpenbookPostsPostArrRelInsertInput>;
  rules?: InputMaybe<Scalars['String']['input']>;
  tasks?: InputMaybe<OpenbookCommunitiesTaskArrRelInsertInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userAdjective?: InputMaybe<Scalars['String']['input']>;
  usersAdjective?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type OpenbookCommunitiesCommunityMaxFields = {
  avatar?: Maybe<Scalars['String']['output']>;
  avatarBlurhash?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  contactDescription?: Maybe<Scalars['String']['output']>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactPhone?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  coverBlurhash?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['timestamptz']['output']>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rules?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userAdjective?: Maybe<Scalars['String']['output']>;
  usersAdjective?: Maybe<Scalars['String']['output']>;
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
  avatar?: Maybe<Scalars['String']['output']>;
  avatarBlurhash?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  contactDescription?: Maybe<Scalars['String']['output']>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactPhone?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  coverBlurhash?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['timestamptz']['output']>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rules?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userAdjective?: Maybe<Scalars['String']['output']>;
  usersAdjective?: Maybe<Scalars['String']['output']>;
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
  affectedRows: Scalars['Int']['output'];
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
  appointmentsAggregate?: InputMaybe<OpenbookAppointmentsAppointmentAggregateOrderBy>;
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
  externalLinksAggregate?: InputMaybe<OpenbookCommunitiesExternallinkAggregateOrderBy>;
  geolocation?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  invitesEnabled?: InputMaybe<OrderBy>;
  isDeleted?: InputMaybe<OrderBy>;
  linkhubToolsAggregate?: InputMaybe<OpenbookCommunitiesCollaborationtoolAggregateOrderBy>;
  location?: InputMaybe<OrderBy>;
  membersAggregate?: InputMaybe<OpenbookCommunitiesCommunitymembershipAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  onboardingStepsAggregate?: InputMaybe<OpenbookCommunitiesOnboardingstepAggregateOrderBy>;
  postsAggregate?: InputMaybe<OpenbookPostsPostAggregateOrderBy>;
  rules?: InputMaybe<OrderBy>;
  tasksAggregate?: InputMaybe<OpenbookCommunitiesTaskAggregateOrderBy>;
  title?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  userAdjective?: InputMaybe<OrderBy>;
  usersAdjective?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_communities_community */
export type OpenbookCommunitiesCommunityPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_communities_community" */
export type OpenbookCommunitiesCommunitySelectColumn =
  /** column name */
  | 'avatar'
  /** column name */
  | 'avatarBlurhash'
  /** column name */
  | 'color'
  /** column name */
  | 'contactDescription'
  /** column name */
  | 'contactEmail'
  /** column name */
  | 'contactPhone'
  /** column name */
  | 'cover'
  /** column name */
  | 'coverBlurhash'
  /** column name */
  | 'created'
  /** column name */
  | 'creatorId'
  /** column name */
  | 'description'
  /** column name */
  | 'geolocation'
  /** column name */
  | 'id'
  /** column name */
  | 'invitesEnabled'
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'location'
  /** column name */
  | 'name'
  /** column name */
  | 'rules'
  /** column name */
  | 'title'
  /** column name */
  | 'type'
  /** column name */
  | 'userAdjective'
  /** column name */
  | 'usersAdjective';

/** select "openbookCommunitiesCommunityAggregateBoolExpBool_andArgumentsColumns" columns of table "openbook_communities_community" */
export type OpenbookCommunitiesCommunitySelectColumnOpenbookCommunitiesCommunityAggregateBoolExpBool_AndArgumentsColumns =
  /** column name */
  | 'invitesEnabled'
  /** column name */
  | 'isDeleted';

/** select "openbookCommunitiesCommunityAggregateBoolExpBool_orArgumentsColumns" columns of table "openbook_communities_community" */
export type OpenbookCommunitiesCommunitySelectColumnOpenbookCommunitiesCommunityAggregateBoolExpBool_OrArgumentsColumns =
  /** column name */
  | 'invitesEnabled'
  /** column name */
  | 'isDeleted';

/** input type for updating data in table "openbook_communities_community" */
export type OpenbookCommunitiesCommunitySetInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatarBlurhash?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  contactDescription?: InputMaybe<Scalars['String']['input']>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  contactPhone?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  coverBlurhash?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rules?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userAdjective?: InputMaybe<Scalars['String']['input']>;
  usersAdjective?: InputMaybe<Scalars['String']['input']>;
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
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatarBlurhash?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  contactDescription?: InputMaybe<Scalars['String']['input']>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  contactPhone?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  coverBlurhash?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rules?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userAdjective?: InputMaybe<Scalars['String']['input']>;
  usersAdjective?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "openbook_communities_community" */
export type OpenbookCommunitiesCommunityUpdateColumn =
  /** column name */
  | 'avatar'
  /** column name */
  | 'avatarBlurhash'
  /** column name */
  | 'color'
  /** column name */
  | 'contactDescription'
  /** column name */
  | 'contactEmail'
  /** column name */
  | 'contactPhone'
  /** column name */
  | 'cover'
  /** column name */
  | 'coverBlurhash'
  /** column name */
  | 'created'
  /** column name */
  | 'creatorId'
  /** column name */
  | 'description'
  /** column name */
  | 'geolocation'
  /** column name */
  | 'id'
  /** column name */
  | 'invitesEnabled'
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'location'
  /** column name */
  | 'name'
  /** column name */
  | 'rules'
  /** column name */
  | 'title'
  /** column name */
  | 'type'
  /** column name */
  | 'userAdjective'
  /** column name */
  | 'usersAdjective';

export type OpenbookCommunitiesCommunityUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookCommunitiesCommunitySetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookCommunitiesCommunityBoolExp;
};

/** columns and relationships of "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembership = {
  communityId: Scalars['uuid']['output'];
  created: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  isAdministrator: Scalars['Boolean']['output'];
  isModerator: Scalars['Boolean']['output'];
  /** An object relationship */
  space: OpenbookCommunitiesCommunity;
  /** An object relationship */
  user: OpenbookAuthUser;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipAggregate = {
  aggregate?: Maybe<OpenbookCommunitiesCommunitymembershipAggregateFields>;
  nodes: Array<OpenbookCommunitiesCommunitymembership>;
};

export type OpenbookCommunitiesCommunitymembershipAggregateBoolExp = {
  bool_and?: InputMaybe<OpenbookCommunitiesCommunitymembershipAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<OpenbookCommunitiesCommunitymembershipAggregateBoolExpBool_Or>;
  count?: InputMaybe<OpenbookCommunitiesCommunitymembershipAggregateBoolExpCount>;
};

/** aggregate fields of "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookCommunitiesCommunitymembershipMaxFields>;
  min?: Maybe<OpenbookCommunitiesCommunitymembershipMinFields>;
};


/** aggregate fields of "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OpenbookCommunitiesCommunitymembershipMaxOrderBy>;
  min?: InputMaybe<OpenbookCommunitiesCommunitymembershipMinOrderBy>;
};

/** input type for inserting array relation for remote table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipArrRelInsertInput = {
  data: Array<OpenbookCommunitiesCommunitymembershipInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookCommunitiesCommunitymembershipOnConflict>;
};

/** Boolean expression to filter rows from the table "openbook_communities_communitymembership". All fields are combined with a logical 'AND'. */
export type OpenbookCommunitiesCommunitymembershipBoolExp = {
  _and?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipBoolExp>>;
  _not?: InputMaybe<OpenbookCommunitiesCommunitymembershipBoolExp>;
  _or?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipBoolExp>>;
  communityId?: InputMaybe<UuidComparisonExp>;
  created?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isAdministrator?: InputMaybe<BooleanComparisonExp>;
  isModerator?: InputMaybe<BooleanComparisonExp>;
  space?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  user?: InputMaybe<OpenbookAuthUserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipConstraint =
  /** unique or primary key constraint on columns "community_id", "user_id" */
  | 'openbook_communities_com_user_id_community_id_80ab28ad_uniq'
  /** unique or primary key constraint on columns "id" */
  | 'openbook_communities_communitymembership_pkey';

/** input type for inserting data into table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipInsertInput = {
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAdministrator?: InputMaybe<Scalars['Boolean']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  space?: InputMaybe<OpenbookCommunitiesCommunityObjRelInsertInput>;
  user?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type OpenbookCommunitiesCommunitymembershipMaxFields = {
  communityId?: Maybe<Scalars['uuid']['output']>;
  created?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipMaxOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OpenbookCommunitiesCommunitymembershipMinFields = {
  communityId?: Maybe<Scalars['uuid']['output']>;
  created?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipMinOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookCommunitiesCommunitymembership>;
};

/** on_conflict condition type for table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipOnConflict = {
  constraint: OpenbookCommunitiesCommunitymembershipConstraint;
  updateColumns?: Array<OpenbookCommunitiesCommunitymembershipUpdateColumn>;
  where?: InputMaybe<OpenbookCommunitiesCommunitymembershipBoolExp>;
};

/** Ordering options when selecting data from "openbook_communities_communitymembership". */
export type OpenbookCommunitiesCommunitymembershipOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isAdministrator?: InputMaybe<OrderBy>;
  isModerator?: InputMaybe<OrderBy>;
  space?: InputMaybe<OpenbookCommunitiesCommunityOrderBy>;
  user?: InputMaybe<OpenbookAuthUserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_communities_communitymembership */
export type OpenbookCommunitiesCommunitymembershipPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipSelectColumn =
  /** column name */
  | 'communityId'
  /** column name */
  | 'created'
  /** column name */
  | 'id'
  /** column name */
  | 'isAdministrator'
  /** column name */
  | 'isModerator'
  /** column name */
  | 'userId';

/** select "openbookCommunitiesCommunitymembershipAggregateBoolExpBool_andArgumentsColumns" columns of table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipSelectColumnOpenbookCommunitiesCommunitymembershipAggregateBoolExpBool_AndArgumentsColumns =
  /** column name */
  | 'isAdministrator'
  /** column name */
  | 'isModerator';

/** select "openbookCommunitiesCommunitymembershipAggregateBoolExpBool_orArgumentsColumns" columns of table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipSelectColumnOpenbookCommunitiesCommunitymembershipAggregateBoolExpBool_OrArgumentsColumns =
  /** column name */
  | 'isAdministrator'
  /** column name */
  | 'isModerator';

/** input type for updating data in table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipSetInput = {
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAdministrator?: InputMaybe<Scalars['Boolean']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookCommunitiesCommunitymembershipStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookCommunitiesCommunitymembershipStreamCursorValueInput = {
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAdministrator?: InputMaybe<Scalars['Boolean']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "openbook_communities_communitymembership" */
export type OpenbookCommunitiesCommunitymembershipUpdateColumn =
  /** column name */
  | 'communityId'
  /** column name */
  | 'created'
  /** column name */
  | 'id'
  /** column name */
  | 'isAdministrator'
  /** column name */
  | 'isModerator'
  /** column name */
  | 'userId';

export type OpenbookCommunitiesCommunitymembershipUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookCommunitiesCommunitymembershipSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookCommunitiesCommunitymembershipBoolExp;
};

/** columns and relationships of "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallink = {
  communityId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  space: OpenbookCommunitiesCommunity;
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** aggregated selection of "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkAggregate = {
  aggregate?: Maybe<OpenbookCommunitiesExternallinkAggregateFields>;
  nodes: Array<OpenbookCommunitiesExternallink>;
};

export type OpenbookCommunitiesExternallinkAggregateBoolExp = {
  count?: InputMaybe<OpenbookCommunitiesExternallinkAggregateBoolExpCount>;
};

/** aggregate fields of "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookCommunitiesExternallinkMaxFields>;
  min?: Maybe<OpenbookCommunitiesExternallinkMinFields>;
};


/** aggregate fields of "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookCommunitiesExternallinkSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OpenbookCommunitiesExternallinkMaxOrderBy>;
  min?: InputMaybe<OpenbookCommunitiesExternallinkMinOrderBy>;
};

/** input type for inserting array relation for remote table "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkArrRelInsertInput = {
  data: Array<OpenbookCommunitiesExternallinkInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookCommunitiesExternallinkOnConflict>;
};

/** Boolean expression to filter rows from the table "openbook_communities_externallink". All fields are combined with a logical 'AND'. */
export type OpenbookCommunitiesExternallinkBoolExp = {
  _and?: InputMaybe<Array<OpenbookCommunitiesExternallinkBoolExp>>;
  _not?: InputMaybe<OpenbookCommunitiesExternallinkBoolExp>;
  _or?: InputMaybe<Array<OpenbookCommunitiesExternallinkBoolExp>>;
  communityId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  space?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  type?: InputMaybe<StringComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkConstraint =
  /** unique or primary key constraint on columns "id" */
  | 'openbook_communities_externallink_pkey';

/** input type for inserting data into table "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkInsertInput = {
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  space?: InputMaybe<OpenbookCommunitiesCommunityObjRelInsertInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type OpenbookCommunitiesExternallinkMaxFields = {
  communityId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkMaxOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OpenbookCommunitiesExternallinkMinFields = {
  communityId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkMinOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookCommunitiesExternallink>;
};

/** on_conflict condition type for table "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkOnConflict = {
  constraint: OpenbookCommunitiesExternallinkConstraint;
  updateColumns?: Array<OpenbookCommunitiesExternallinkUpdateColumn>;
  where?: InputMaybe<OpenbookCommunitiesExternallinkBoolExp>;
};

/** Ordering options when selecting data from "openbook_communities_externallink". */
export type OpenbookCommunitiesExternallinkOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  space?: InputMaybe<OpenbookCommunitiesCommunityOrderBy>;
  type?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_communities_externallink */
export type OpenbookCommunitiesExternallinkPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkSelectColumn =
  /** column name */
  | 'communityId'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'type'
  /** column name */
  | 'url';

/** input type for updating data in table "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkSetInput = {
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookCommunitiesExternallinkStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookCommunitiesExternallinkStreamCursorValueInput = {
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "openbook_communities_externallink" */
export type OpenbookCommunitiesExternallinkUpdateColumn =
  /** column name */
  | 'communityId'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'type'
  /** column name */
  | 'url';

export type OpenbookCommunitiesExternallinkUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookCommunitiesExternallinkSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookCommunitiesExternallinkBoolExp;
};

/** columns and relationships of "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstep = {
  communityId: Scalars['uuid']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  space: OpenbookCommunitiesCommunity;
  stepNumber: Scalars['smallint']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepAggregate = {
  aggregate?: Maybe<OpenbookCommunitiesOnboardingstepAggregateFields>;
  nodes: Array<OpenbookCommunitiesOnboardingstep>;
};

export type OpenbookCommunitiesOnboardingstepAggregateBoolExp = {
  count?: InputMaybe<OpenbookCommunitiesOnboardingstepAggregateBoolExpCount>;
};

/** aggregate fields of "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepAggregateFields = {
  avg?: Maybe<OpenbookCommunitiesOnboardingstepAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookCommunitiesOnboardingstepMaxFields>;
  min?: Maybe<OpenbookCommunitiesOnboardingstepMinFields>;
  stddev?: Maybe<OpenbookCommunitiesOnboardingstepStddevFields>;
  stddevPop?: Maybe<OpenbookCommunitiesOnboardingstepStddevPopFields>;
  stddevSamp?: Maybe<OpenbookCommunitiesOnboardingstepStddevSampFields>;
  sum?: Maybe<OpenbookCommunitiesOnboardingstepSumFields>;
  varPop?: Maybe<OpenbookCommunitiesOnboardingstepVarPopFields>;
  varSamp?: Maybe<OpenbookCommunitiesOnboardingstepVarSampFields>;
  variance?: Maybe<OpenbookCommunitiesOnboardingstepVarianceFields>;
};


/** aggregate fields of "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepAggregateOrderBy = {
  avg?: InputMaybe<OpenbookCommunitiesOnboardingstepAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OpenbookCommunitiesOnboardingstepMaxOrderBy>;
  min?: InputMaybe<OpenbookCommunitiesOnboardingstepMinOrderBy>;
  stddev?: InputMaybe<OpenbookCommunitiesOnboardingstepStddevOrderBy>;
  stddevPop?: InputMaybe<OpenbookCommunitiesOnboardingstepStddevPopOrderBy>;
  stddevSamp?: InputMaybe<OpenbookCommunitiesOnboardingstepStddevSampOrderBy>;
  sum?: InputMaybe<OpenbookCommunitiesOnboardingstepSumOrderBy>;
  varPop?: InputMaybe<OpenbookCommunitiesOnboardingstepVarPopOrderBy>;
  varSamp?: InputMaybe<OpenbookCommunitiesOnboardingstepVarSampOrderBy>;
  variance?: InputMaybe<OpenbookCommunitiesOnboardingstepVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepArrRelInsertInput = {
  data: Array<OpenbookCommunitiesOnboardingstepInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookCommunitiesOnboardingstepOnConflict>;
};

/** aggregate avg on columns */
export type OpenbookCommunitiesOnboardingstepAvgFields = {
  stepNumber?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepAvgOrderBy = {
  stepNumber?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "openbook_communities_onboardingstep". All fields are combined with a logical 'AND'. */
export type OpenbookCommunitiesOnboardingstepBoolExp = {
  _and?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepBoolExp>>;
  _not?: InputMaybe<OpenbookCommunitiesOnboardingstepBoolExp>;
  _or?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepBoolExp>>;
  communityId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  space?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  stepNumber?: InputMaybe<SmallintComparisonExp>;
  text?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepConstraint =
  /** unique or primary key constraint on columns "community_id", "step_number" */
  | 'openbook_communities_onb_community_id_step_number_bb526f9e_uniq'
  /** unique or primary key constraint on columns "id" */
  | 'openbook_communities_onboardingstep_pkey';

/** input type for incrementing numeric columns in table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepIncInput = {
  stepNumber?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepInsertInput = {
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  space?: InputMaybe<OpenbookCommunitiesCommunityObjRelInsertInput>;
  stepNumber?: InputMaybe<Scalars['smallint']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type OpenbookCommunitiesOnboardingstepMaxFields = {
  communityId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  stepNumber?: Maybe<Scalars['smallint']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepMaxOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stepNumber?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OpenbookCommunitiesOnboardingstepMinFields = {
  communityId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  stepNumber?: Maybe<Scalars['smallint']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepMinOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stepNumber?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookCommunitiesOnboardingstep>;
};

/** on_conflict condition type for table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepOnConflict = {
  constraint: OpenbookCommunitiesOnboardingstepConstraint;
  updateColumns?: Array<OpenbookCommunitiesOnboardingstepUpdateColumn>;
  where?: InputMaybe<OpenbookCommunitiesOnboardingstepBoolExp>;
};

/** Ordering options when selecting data from "openbook_communities_onboardingstep". */
export type OpenbookCommunitiesOnboardingstepOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  space?: InputMaybe<OpenbookCommunitiesCommunityOrderBy>;
  stepNumber?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_communities_onboardingstep */
export type OpenbookCommunitiesOnboardingstepPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepSelectColumn =
  /** column name */
  | 'communityId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'stepNumber'
  /** column name */
  | 'text';

/** input type for updating data in table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepSetInput = {
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  stepNumber?: InputMaybe<Scalars['smallint']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type OpenbookCommunitiesOnboardingstepStddevFields = {
  stepNumber?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepStddevOrderBy = {
  stepNumber?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type OpenbookCommunitiesOnboardingstepStddevPopFields = {
  stepNumber?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepStddevPopOrderBy = {
  stepNumber?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type OpenbookCommunitiesOnboardingstepStddevSampFields = {
  stepNumber?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepStddevSampOrderBy = {
  stepNumber?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookCommunitiesOnboardingstepStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookCommunitiesOnboardingstepStreamCursorValueInput = {
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  stepNumber?: InputMaybe<Scalars['smallint']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type OpenbookCommunitiesOnboardingstepSumFields = {
  stepNumber?: Maybe<Scalars['smallint']['output']>;
};

/** order by sum() on columns of table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepSumOrderBy = {
  stepNumber?: InputMaybe<OrderBy>;
};

/** update columns of table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepUpdateColumn =
  /** column name */
  | 'communityId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'stepNumber'
  /** column name */
  | 'text';

export type OpenbookCommunitiesOnboardingstepUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OpenbookCommunitiesOnboardingstepIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookCommunitiesOnboardingstepSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookCommunitiesOnboardingstepBoolExp;
};

/** aggregate varPop on columns */
export type OpenbookCommunitiesOnboardingstepVarPopFields = {
  stepNumber?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepVarPopOrderBy = {
  stepNumber?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type OpenbookCommunitiesOnboardingstepVarSampFields = {
  stepNumber?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepVarSampOrderBy = {
  stepNumber?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type OpenbookCommunitiesOnboardingstepVarianceFields = {
  stepNumber?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "openbook_communities_onboardingstep" */
export type OpenbookCommunitiesOnboardingstepVarianceOrderBy = {
  stepNumber?: InputMaybe<OrderBy>;
};

/** columns and relationships of "openbook_communities_task" */
export type OpenbookCommunitiesTask = {
  communityId: Scalars['uuid']['output'];
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactPhone?: Maybe<Scalars['String']['output']>;
  created: Scalars['timestamptz']['output'];
  /** An object relationship */
  creator?: Maybe<OpenbookAuthUser>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  deletedAt?: Maybe<Scalars['timestamptz']['output']>;
  description: Scalars['String']['output'];
  geolocation?: Maybe<Scalars['geometry']['output']>;
  id: Scalars['uuid']['output'];
  location?: Maybe<Scalars['String']['output']>;
  locationType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  regularity: Scalars['String']['output'];
  /** An array relationship */
  skills: Array<OpenbookCommunitiesTaskSkills>;
  /** An aggregate relationship */
  skillsAggregate: OpenbookCommunitiesTaskSkillsAggregate;
  slotsAvailable: Scalars['Int']['output'];
  slotsTaken: Scalars['Int']['output'];
  /** An object relationship */
  space: OpenbookCommunitiesCommunity;
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnailBlurhash?: Maybe<Scalars['String']['output']>;
  visibility: Scalars['String']['output'];
};


/** columns and relationships of "openbook_communities_task" */
export type OpenbookCommunitiesTaskSkillsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskSkillsBoolExp>;
};


/** columns and relationships of "openbook_communities_task" */
export type OpenbookCommunitiesTaskSkillsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskSkillsBoolExp>;
};

/** aggregated selection of "openbook_communities_task" */
export type OpenbookCommunitiesTaskAggregate = {
  aggregate?: Maybe<OpenbookCommunitiesTaskAggregateFields>;
  nodes: Array<OpenbookCommunitiesTask>;
};

export type OpenbookCommunitiesTaskAggregateBoolExp = {
  count?: InputMaybe<OpenbookCommunitiesTaskAggregateBoolExpCount>;
};

/** aggregate fields of "openbook_communities_task" */
export type OpenbookCommunitiesTaskAggregateFields = {
  avg?: Maybe<OpenbookCommunitiesTaskAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookCommunitiesTaskMaxFields>;
  min?: Maybe<OpenbookCommunitiesTaskMinFields>;
  stddev?: Maybe<OpenbookCommunitiesTaskStddevFields>;
  stddevPop?: Maybe<OpenbookCommunitiesTaskStddevPopFields>;
  stddevSamp?: Maybe<OpenbookCommunitiesTaskStddevSampFields>;
  sum?: Maybe<OpenbookCommunitiesTaskSumFields>;
  varPop?: Maybe<OpenbookCommunitiesTaskVarPopFields>;
  varSamp?: Maybe<OpenbookCommunitiesTaskVarSampFields>;
  variance?: Maybe<OpenbookCommunitiesTaskVarianceFields>;
};


/** aggregate fields of "openbook_communities_task" */
export type OpenbookCommunitiesTaskAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookCommunitiesTaskSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "openbook_communities_task" */
export type OpenbookCommunitiesTaskAggregateOrderBy = {
  avg?: InputMaybe<OpenbookCommunitiesTaskAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OpenbookCommunitiesTaskMaxOrderBy>;
  min?: InputMaybe<OpenbookCommunitiesTaskMinOrderBy>;
  stddev?: InputMaybe<OpenbookCommunitiesTaskStddevOrderBy>;
  stddevPop?: InputMaybe<OpenbookCommunitiesTaskStddevPopOrderBy>;
  stddevSamp?: InputMaybe<OpenbookCommunitiesTaskStddevSampOrderBy>;
  sum?: InputMaybe<OpenbookCommunitiesTaskSumOrderBy>;
  varPop?: InputMaybe<OpenbookCommunitiesTaskVarPopOrderBy>;
  varSamp?: InputMaybe<OpenbookCommunitiesTaskVarSampOrderBy>;
  variance?: InputMaybe<OpenbookCommunitiesTaskVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "openbook_communities_task" */
export type OpenbookCommunitiesTaskArrRelInsertInput = {
  data: Array<OpenbookCommunitiesTaskInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookCommunitiesTaskOnConflict>;
};

/** aggregate avg on columns */
export type OpenbookCommunitiesTaskAvgFields = {
  slotsAvailable?: Maybe<Scalars['Float']['output']>;
  slotsTaken?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "openbook_communities_task" */
export type OpenbookCommunitiesTaskAvgOrderBy = {
  slotsAvailable?: InputMaybe<OrderBy>;
  slotsTaken?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "openbook_communities_task". All fields are combined with a logical 'AND'. */
export type OpenbookCommunitiesTaskBoolExp = {
  _and?: InputMaybe<Array<OpenbookCommunitiesTaskBoolExp>>;
  _not?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
  _or?: InputMaybe<Array<OpenbookCommunitiesTaskBoolExp>>;
  communityId?: InputMaybe<UuidComparisonExp>;
  contactEmail?: InputMaybe<StringComparisonExp>;
  contactPhone?: InputMaybe<StringComparisonExp>;
  created?: InputMaybe<TimestamptzComparisonExp>;
  creator?: InputMaybe<OpenbookAuthUserBoolExp>;
  creatorId?: InputMaybe<UuidComparisonExp>;
  deletedAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  geolocation?: InputMaybe<GeometryComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  location?: InputMaybe<StringComparisonExp>;
  locationType?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  regularity?: InputMaybe<StringComparisonExp>;
  skills?: InputMaybe<OpenbookCommunitiesTaskSkillsBoolExp>;
  skillsAggregate?: InputMaybe<OpenbookCommunitiesTaskSkillsAggregateBoolExp>;
  slotsAvailable?: InputMaybe<IntComparisonExp>;
  slotsTaken?: InputMaybe<IntComparisonExp>;
  space?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  thumbnail?: InputMaybe<StringComparisonExp>;
  thumbnailBlurhash?: InputMaybe<StringComparisonExp>;
  visibility?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_communities_task" */
export type OpenbookCommunitiesTaskConstraint =
  /** unique or primary key constraint on columns "id" */
  | 'openbook_communities_task_pkey';

/** input type for incrementing numeric columns in table "openbook_communities_task" */
export type OpenbookCommunitiesTaskIncInput = {
  slotsAvailable?: InputMaybe<Scalars['Int']['input']>;
  slotsTaken?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "openbook_communities_task" */
export type OpenbookCommunitiesTaskInsertInput = {
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  contactPhone?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  creator?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  regularity?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<OpenbookCommunitiesTaskSkillsArrRelInsertInput>;
  slotsAvailable?: InputMaybe<Scalars['Int']['input']>;
  slotsTaken?: InputMaybe<Scalars['Int']['input']>;
  space?: InputMaybe<OpenbookCommunitiesCommunityObjRelInsertInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  thumbnailBlurhash?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type OpenbookCommunitiesTaskMaxFields = {
  communityId?: Maybe<Scalars['uuid']['output']>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactPhone?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['timestamptz']['output']>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  deletedAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  locationType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  regularity?: Maybe<Scalars['String']['output']>;
  slotsAvailable?: Maybe<Scalars['Int']['output']>;
  slotsTaken?: Maybe<Scalars['Int']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnailBlurhash?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "openbook_communities_task" */
export type OpenbookCommunitiesTaskMaxOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  contactEmail?: InputMaybe<OrderBy>;
  contactPhone?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  deletedAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  locationType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  regularity?: InputMaybe<OrderBy>;
  slotsAvailable?: InputMaybe<OrderBy>;
  slotsTaken?: InputMaybe<OrderBy>;
  thumbnail?: InputMaybe<OrderBy>;
  thumbnailBlurhash?: InputMaybe<OrderBy>;
  visibility?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OpenbookCommunitiesTaskMinFields = {
  communityId?: Maybe<Scalars['uuid']['output']>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactPhone?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['timestamptz']['output']>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  deletedAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  locationType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  regularity?: Maybe<Scalars['String']['output']>;
  slotsAvailable?: Maybe<Scalars['Int']['output']>;
  slotsTaken?: Maybe<Scalars['Int']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnailBlurhash?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "openbook_communities_task" */
export type OpenbookCommunitiesTaskMinOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  contactEmail?: InputMaybe<OrderBy>;
  contactPhone?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  deletedAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  locationType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  regularity?: InputMaybe<OrderBy>;
  slotsAvailable?: InputMaybe<OrderBy>;
  slotsTaken?: InputMaybe<OrderBy>;
  thumbnail?: InputMaybe<OrderBy>;
  thumbnailBlurhash?: InputMaybe<OrderBy>;
  visibility?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "openbook_communities_task" */
export type OpenbookCommunitiesTaskMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookCommunitiesTask>;
};

/** on_conflict condition type for table "openbook_communities_task" */
export type OpenbookCommunitiesTaskOnConflict = {
  constraint: OpenbookCommunitiesTaskConstraint;
  updateColumns?: Array<OpenbookCommunitiesTaskUpdateColumn>;
  where?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
};

/** Ordering options when selecting data from "openbook_communities_task". */
export type OpenbookCommunitiesTaskOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  contactEmail?: InputMaybe<OrderBy>;
  contactPhone?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  creator?: InputMaybe<OpenbookAuthUserOrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  deletedAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  geolocation?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  locationType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  regularity?: InputMaybe<OrderBy>;
  skillsAggregate?: InputMaybe<OpenbookCommunitiesTaskSkillsAggregateOrderBy>;
  slotsAvailable?: InputMaybe<OrderBy>;
  slotsTaken?: InputMaybe<OrderBy>;
  space?: InputMaybe<OpenbookCommunitiesCommunityOrderBy>;
  thumbnail?: InputMaybe<OrderBy>;
  thumbnailBlurhash?: InputMaybe<OrderBy>;
  visibility?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_communities_task */
export type OpenbookCommunitiesTaskPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_communities_task" */
export type OpenbookCommunitiesTaskSelectColumn =
  /** column name */
  | 'communityId'
  /** column name */
  | 'contactEmail'
  /** column name */
  | 'contactPhone'
  /** column name */
  | 'created'
  /** column name */
  | 'creatorId'
  /** column name */
  | 'deletedAt'
  /** column name */
  | 'description'
  /** column name */
  | 'geolocation'
  /** column name */
  | 'id'
  /** column name */
  | 'location'
  /** column name */
  | 'locationType'
  /** column name */
  | 'name'
  /** column name */
  | 'regularity'
  /** column name */
  | 'slotsAvailable'
  /** column name */
  | 'slotsTaken'
  /** column name */
  | 'thumbnail'
  /** column name */
  | 'thumbnailBlurhash'
  /** column name */
  | 'visibility';

/** input type for updating data in table "openbook_communities_task" */
export type OpenbookCommunitiesTaskSetInput = {
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  contactPhone?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  regularity?: InputMaybe<Scalars['String']['input']>;
  slotsAvailable?: InputMaybe<Scalars['Int']['input']>;
  slotsTaken?: InputMaybe<Scalars['Int']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  thumbnailBlurhash?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkills = {
  id: Scalars['bigint']['output'];
  /** An object relationship */
  skill: OpenbookTermsSkill;
  skillId: Scalars['uuid']['output'];
  taskId: Scalars['uuid']['output'];
};

/** aggregated selection of "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsAggregate = {
  aggregate?: Maybe<OpenbookCommunitiesTaskSkillsAggregateFields>;
  nodes: Array<OpenbookCommunitiesTaskSkills>;
};

export type OpenbookCommunitiesTaskSkillsAggregateBoolExp = {
  count?: InputMaybe<OpenbookCommunitiesTaskSkillsAggregateBoolExpCount>;
};

/** aggregate fields of "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsAggregateFields = {
  avg?: Maybe<OpenbookCommunitiesTaskSkillsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookCommunitiesTaskSkillsMaxFields>;
  min?: Maybe<OpenbookCommunitiesTaskSkillsMinFields>;
  stddev?: Maybe<OpenbookCommunitiesTaskSkillsStddevFields>;
  stddevPop?: Maybe<OpenbookCommunitiesTaskSkillsStddevPopFields>;
  stddevSamp?: Maybe<OpenbookCommunitiesTaskSkillsStddevSampFields>;
  sum?: Maybe<OpenbookCommunitiesTaskSkillsSumFields>;
  varPop?: Maybe<OpenbookCommunitiesTaskSkillsVarPopFields>;
  varSamp?: Maybe<OpenbookCommunitiesTaskSkillsVarSampFields>;
  variance?: Maybe<OpenbookCommunitiesTaskSkillsVarianceFields>;
};


/** aggregate fields of "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsAggregateOrderBy = {
  avg?: InputMaybe<OpenbookCommunitiesTaskSkillsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OpenbookCommunitiesTaskSkillsMaxOrderBy>;
  min?: InputMaybe<OpenbookCommunitiesTaskSkillsMinOrderBy>;
  stddev?: InputMaybe<OpenbookCommunitiesTaskSkillsStddevOrderBy>;
  stddevPop?: InputMaybe<OpenbookCommunitiesTaskSkillsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<OpenbookCommunitiesTaskSkillsStddevSampOrderBy>;
  sum?: InputMaybe<OpenbookCommunitiesTaskSkillsSumOrderBy>;
  varPop?: InputMaybe<OpenbookCommunitiesTaskSkillsVarPopOrderBy>;
  varSamp?: InputMaybe<OpenbookCommunitiesTaskSkillsVarSampOrderBy>;
  variance?: InputMaybe<OpenbookCommunitiesTaskSkillsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsArrRelInsertInput = {
  data: Array<OpenbookCommunitiesTaskSkillsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookCommunitiesTaskSkillsOnConflict>;
};

/** aggregate avg on columns */
export type OpenbookCommunitiesTaskSkillsAvgFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "openbook_communities_task_skills". All fields are combined with a logical 'AND'. */
export type OpenbookCommunitiesTaskSkillsBoolExp = {
  _and?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsBoolExp>>;
  _not?: InputMaybe<OpenbookCommunitiesTaskSkillsBoolExp>;
  _or?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsBoolExp>>;
  id?: InputMaybe<BigintComparisonExp>;
  skill?: InputMaybe<OpenbookTermsSkillBoolExp>;
  skillId?: InputMaybe<UuidComparisonExp>;
  taskId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsConstraint =
  /** unique or primary key constraint on columns "id" */
  | 'openbook_communities_task_skills_pkey'
  /** unique or primary key constraint on columns "task_id", "skill_id" */
  | 'openbook_communities_task_skills_task_id_skill_id_a0abe98d_uniq';

/** input type for incrementing numeric columns in table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsInsertInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  skill?: InputMaybe<OpenbookTermsSkillObjRelInsertInput>;
  skillId?: InputMaybe<Scalars['uuid']['input']>;
  taskId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type OpenbookCommunitiesTaskSkillsMaxFields = {
  id?: Maybe<Scalars['bigint']['output']>;
  skillId?: Maybe<Scalars['uuid']['output']>;
  taskId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsMaxOrderBy = {
  id?: InputMaybe<OrderBy>;
  skillId?: InputMaybe<OrderBy>;
  taskId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OpenbookCommunitiesTaskSkillsMinFields = {
  id?: Maybe<Scalars['bigint']['output']>;
  skillId?: Maybe<Scalars['uuid']['output']>;
  taskId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsMinOrderBy = {
  id?: InputMaybe<OrderBy>;
  skillId?: InputMaybe<OrderBy>;
  taskId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookCommunitiesTaskSkills>;
};

/** on_conflict condition type for table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsOnConflict = {
  constraint: OpenbookCommunitiesTaskSkillsConstraint;
  updateColumns?: Array<OpenbookCommunitiesTaskSkillsUpdateColumn>;
  where?: InputMaybe<OpenbookCommunitiesTaskSkillsBoolExp>;
};

/** Ordering options when selecting data from "openbook_communities_task_skills". */
export type OpenbookCommunitiesTaskSkillsOrderBy = {
  id?: InputMaybe<OrderBy>;
  skill?: InputMaybe<OpenbookTermsSkillOrderBy>;
  skillId?: InputMaybe<OrderBy>;
  taskId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_communities_task_skills */
export type OpenbookCommunitiesTaskSkillsPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsSelectColumn =
  /** column name */
  | 'id'
  /** column name */
  | 'skillId'
  /** column name */
  | 'taskId';

/** input type for updating data in table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsSetInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  skillId?: InputMaybe<Scalars['uuid']['input']>;
  taskId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type OpenbookCommunitiesTaskSkillsStddevFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type OpenbookCommunitiesTaskSkillsStddevPopFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type OpenbookCommunitiesTaskSkillsStddevSampFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookCommunitiesTaskSkillsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookCommunitiesTaskSkillsStreamCursorValueInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  skillId?: InputMaybe<Scalars['uuid']['input']>;
  taskId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type OpenbookCommunitiesTaskSkillsSumFields = {
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsSumOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** update columns of table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsUpdateColumn =
  /** column name */
  | 'id'
  /** column name */
  | 'skillId'
  /** column name */
  | 'taskId';

export type OpenbookCommunitiesTaskSkillsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OpenbookCommunitiesTaskSkillsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookCommunitiesTaskSkillsSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookCommunitiesTaskSkillsBoolExp;
};

/** aggregate varPop on columns */
export type OpenbookCommunitiesTaskSkillsVarPopFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type OpenbookCommunitiesTaskSkillsVarSampFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type OpenbookCommunitiesTaskSkillsVarianceFields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "openbook_communities_task_skills" */
export type OpenbookCommunitiesTaskSkillsVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddev on columns */
export type OpenbookCommunitiesTaskStddevFields = {
  slotsAvailable?: Maybe<Scalars['Float']['output']>;
  slotsTaken?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "openbook_communities_task" */
export type OpenbookCommunitiesTaskStddevOrderBy = {
  slotsAvailable?: InputMaybe<OrderBy>;
  slotsTaken?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type OpenbookCommunitiesTaskStddevPopFields = {
  slotsAvailable?: Maybe<Scalars['Float']['output']>;
  slotsTaken?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "openbook_communities_task" */
export type OpenbookCommunitiesTaskStddevPopOrderBy = {
  slotsAvailable?: InputMaybe<OrderBy>;
  slotsTaken?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type OpenbookCommunitiesTaskStddevSampFields = {
  slotsAvailable?: Maybe<Scalars['Float']['output']>;
  slotsTaken?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "openbook_communities_task" */
export type OpenbookCommunitiesTaskStddevSampOrderBy = {
  slotsAvailable?: InputMaybe<OrderBy>;
  slotsTaken?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "openbook_communities_task" */
export type OpenbookCommunitiesTaskStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookCommunitiesTaskStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookCommunitiesTaskStreamCursorValueInput = {
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  contactPhone?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geolocation?: InputMaybe<Scalars['geometry']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  regularity?: InputMaybe<Scalars['String']['input']>;
  slotsAvailable?: InputMaybe<Scalars['Int']['input']>;
  slotsTaken?: InputMaybe<Scalars['Int']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  thumbnailBlurhash?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type OpenbookCommunitiesTaskSumFields = {
  slotsAvailable?: Maybe<Scalars['Int']['output']>;
  slotsTaken?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "openbook_communities_task" */
export type OpenbookCommunitiesTaskSumOrderBy = {
  slotsAvailable?: InputMaybe<OrderBy>;
  slotsTaken?: InputMaybe<OrderBy>;
};

/** update columns of table "openbook_communities_task" */
export type OpenbookCommunitiesTaskUpdateColumn =
  /** column name */
  | 'communityId'
  /** column name */
  | 'contactEmail'
  /** column name */
  | 'contactPhone'
  /** column name */
  | 'created'
  /** column name */
  | 'creatorId'
  /** column name */
  | 'deletedAt'
  /** column name */
  | 'description'
  /** column name */
  | 'geolocation'
  /** column name */
  | 'id'
  /** column name */
  | 'location'
  /** column name */
  | 'locationType'
  /** column name */
  | 'name'
  /** column name */
  | 'regularity'
  /** column name */
  | 'slotsAvailable'
  /** column name */
  | 'slotsTaken'
  /** column name */
  | 'thumbnail'
  /** column name */
  | 'thumbnailBlurhash'
  /** column name */
  | 'visibility';

export type OpenbookCommunitiesTaskUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OpenbookCommunitiesTaskIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookCommunitiesTaskSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookCommunitiesTaskBoolExp;
};

/** aggregate varPop on columns */
export type OpenbookCommunitiesTaskVarPopFields = {
  slotsAvailable?: Maybe<Scalars['Float']['output']>;
  slotsTaken?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "openbook_communities_task" */
export type OpenbookCommunitiesTaskVarPopOrderBy = {
  slotsAvailable?: InputMaybe<OrderBy>;
  slotsTaken?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type OpenbookCommunitiesTaskVarSampFields = {
  slotsAvailable?: Maybe<Scalars['Float']['output']>;
  slotsTaken?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "openbook_communities_task" */
export type OpenbookCommunitiesTaskVarSampOrderBy = {
  slotsAvailable?: InputMaybe<OrderBy>;
  slotsTaken?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type OpenbookCommunitiesTaskVarianceFields = {
  slotsAvailable?: Maybe<Scalars['Float']['output']>;
  slotsTaken?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "openbook_communities_task" */
export type OpenbookCommunitiesTaskVarianceOrderBy = {
  slotsAvailable?: InputMaybe<OrderBy>;
  slotsTaken?: InputMaybe<OrderBy>;
};

/** columns and relationships of "openbook_posts_post" */
export type OpenbookPostsPost = {
  /** An object relationship */
  author: OpenbookAuthUser;
  commentsEnabled: Scalars['Boolean']['output'];
  communityId?: Maybe<Scalars['uuid']['output']>;
  created: Scalars['timestamptz']['output'];
  creatorId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  inspirationPostCategoryId?: Maybe<Scalars['uuid']['output']>;
  isClosed: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isEdited: Scalars['Boolean']['output'];
  isPublic: Scalars['Boolean']['output'];
  languageCode?: Maybe<Scalars['String']['output']>;
  modified: Scalars['timestamptz']['output'];
  publicReactions: Scalars['Boolean']['output'];
  /** An object relationship */
  space?: Maybe<OpenbookCommunitiesCommunity>;
  status: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
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
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookPostsPostMaxFields>;
  min?: Maybe<OpenbookPostsPostMinFields>;
};


/** aggregate fields of "openbook_posts_post" */
export type OpenbookPostsPostAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  languageCode?: InputMaybe<StringComparisonExp>;
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
  | 'openbook_posts_post_pkey';

/** input type for inserting data into table "openbook_posts_post" */
export type OpenbookPostsPostInsertInput = {
  author?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  commentsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inspirationPostCategoryId?: InputMaybe<Scalars['uuid']['input']>;
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isEdited?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['timestamptz']['input']>;
  publicReactions?: InputMaybe<Scalars['Boolean']['input']>;
  space?: InputMaybe<OpenbookCommunitiesCommunityObjRelInsertInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type OpenbookPostsPostMaxFields = {
  communityId?: Maybe<Scalars['uuid']['output']>;
  created?: Maybe<Scalars['timestamptz']['output']>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  inspirationPostCategoryId?: Maybe<Scalars['uuid']['output']>;
  languageCode?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['timestamptz']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "openbook_posts_post" */
export type OpenbookPostsPostMaxOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  inspirationPostCategoryId?: InputMaybe<OrderBy>;
  languageCode?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OpenbookPostsPostMinFields = {
  communityId?: Maybe<Scalars['uuid']['output']>;
  created?: Maybe<Scalars['timestamptz']['output']>;
  creatorId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  inspirationPostCategoryId?: Maybe<Scalars['uuid']['output']>;
  languageCode?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['timestamptz']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "openbook_posts_post" */
export type OpenbookPostsPostMinOrderBy = {
  communityId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  creatorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  inspirationPostCategoryId?: InputMaybe<OrderBy>;
  languageCode?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "openbook_posts_post" */
export type OpenbookPostsPostMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
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
  languageCode?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  publicReactions?: InputMaybe<OrderBy>;
  space?: InputMaybe<OpenbookCommunitiesCommunityOrderBy>;
  status?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_posts_post */
export type OpenbookPostsPostPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_posts_post" */
export type OpenbookPostsPostSelectColumn =
  /** column name */
  | 'commentsEnabled'
  /** column name */
  | 'communityId'
  /** column name */
  | 'created'
  /** column name */
  | 'creatorId'
  /** column name */
  | 'id'
  /** column name */
  | 'inspirationPostCategoryId'
  /** column name */
  | 'isClosed'
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'isEdited'
  /** column name */
  | 'isPublic'
  /** column name */
  | 'languageCode'
  /** column name */
  | 'modified'
  /** column name */
  | 'publicReactions'
  /** column name */
  | 'status'
  /** column name */
  | 'text'
  /** column name */
  | 'title';

/** select "openbookPostsPostAggregateBoolExpBool_andArgumentsColumns" columns of table "openbook_posts_post" */
export type OpenbookPostsPostSelectColumnOpenbookPostsPostAggregateBoolExpBool_AndArgumentsColumns =
  /** column name */
  | 'commentsEnabled'
  /** column name */
  | 'isClosed'
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'isEdited'
  /** column name */
  | 'isPublic'
  /** column name */
  | 'publicReactions';

/** select "openbookPostsPostAggregateBoolExpBool_orArgumentsColumns" columns of table "openbook_posts_post" */
export type OpenbookPostsPostSelectColumnOpenbookPostsPostAggregateBoolExpBool_OrArgumentsColumns =
  /** column name */
  | 'commentsEnabled'
  /** column name */
  | 'isClosed'
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'isEdited'
  /** column name */
  | 'isPublic'
  /** column name */
  | 'publicReactions';

/** input type for updating data in table "openbook_posts_post" */
export type OpenbookPostsPostSetInput = {
  commentsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inspirationPostCategoryId?: InputMaybe<Scalars['uuid']['input']>;
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isEdited?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['timestamptz']['input']>;
  publicReactions?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  commentsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  communityId?: InputMaybe<Scalars['uuid']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  creatorId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inspirationPostCategoryId?: InputMaybe<Scalars['uuid']['input']>;
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isEdited?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['timestamptz']['input']>;
  publicReactions?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "openbook_posts_post" */
export type OpenbookPostsPostUpdateColumn =
  /** column name */
  | 'commentsEnabled'
  /** column name */
  | 'communityId'
  /** column name */
  | 'created'
  /** column name */
  | 'creatorId'
  /** column name */
  | 'id'
  /** column name */
  | 'inspirationPostCategoryId'
  /** column name */
  | 'isClosed'
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'isEdited'
  /** column name */
  | 'isPublic'
  /** column name */
  | 'languageCode'
  /** column name */
  | 'modified'
  /** column name */
  | 'publicReactions'
  /** column name */
  | 'status'
  /** column name */
  | 'text'
  /** column name */
  | 'title';

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
  commentableId: Scalars['uuid']['output'];
  /** An object relationship */
  commentableType: DjangoContentType;
  commentableTypeId: Scalars['Int']['output'];
  /** An object relationship */
  commenter: OpenbookAuthUser;
  commenterId: Scalars['uuid']['output'];
  created: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isEdited: Scalars['Boolean']['output'];
  languageCode?: Maybe<Scalars['String']['output']>;
  modified: Scalars['timestamptz']['output'];
  /** An object relationship */
  parentComment?: Maybe<OpenbookPostsPostcomment>;
  parentCommentId?: Maybe<Scalars['uuid']['output']>;
  text: Scalars['String']['output'];
};


/** columns and relationships of "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentChildCommentsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostcommentOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};


/** columns and relationships of "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentChildCommentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  commentableTypeId?: Maybe<Scalars['Float']['output']>;
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
  commentableType?: InputMaybe<DjangoContentTypeBoolExp>;
  commentableTypeId?: InputMaybe<IntComparisonExp>;
  commenter?: InputMaybe<OpenbookAuthUserBoolExp>;
  commenterId?: InputMaybe<UuidComparisonExp>;
  created?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isDeleted?: InputMaybe<BooleanComparisonExp>;
  isEdited?: InputMaybe<BooleanComparisonExp>;
  languageCode?: InputMaybe<StringComparisonExp>;
  modified?: InputMaybe<TimestamptzComparisonExp>;
  parentComment?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
  parentCommentId?: InputMaybe<UuidComparisonExp>;
  text?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentConstraint =
  /** unique or primary key constraint on columns "id" */
  | 'openbook_posts_postcomment_pkey';

/** input type for incrementing numeric columns in table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentIncInput = {
  commentableTypeId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentInsertInput = {
  childComments?: InputMaybe<OpenbookPostsPostcommentArrRelInsertInput>;
  commentableId?: InputMaybe<Scalars['uuid']['input']>;
  commentableType?: InputMaybe<DjangoContentTypeObjRelInsertInput>;
  commentableTypeId?: InputMaybe<Scalars['Int']['input']>;
  commenter?: InputMaybe<OpenbookAuthUserObjRelInsertInput>;
  commenterId?: InputMaybe<Scalars['uuid']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isEdited?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['timestamptz']['input']>;
  parentComment?: InputMaybe<OpenbookPostsPostcommentObjRelInsertInput>;
  parentCommentId?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type OpenbookPostsPostcommentMaxFields = {
  commentableId?: Maybe<Scalars['uuid']['output']>;
  commentableTypeId?: Maybe<Scalars['Int']['output']>;
  commenterId?: Maybe<Scalars['uuid']['output']>;
  created?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  languageCode?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['timestamptz']['output']>;
  parentCommentId?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentMaxOrderBy = {
  commentableId?: InputMaybe<OrderBy>;
  commentableTypeId?: InputMaybe<OrderBy>;
  commenterId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  languageCode?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  parentCommentId?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OpenbookPostsPostcommentMinFields = {
  commentableId?: Maybe<Scalars['uuid']['output']>;
  commentableTypeId?: Maybe<Scalars['Int']['output']>;
  commenterId?: Maybe<Scalars['uuid']['output']>;
  created?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  languageCode?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['timestamptz']['output']>;
  parentCommentId?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentMinOrderBy = {
  commentableId?: InputMaybe<OrderBy>;
  commentableTypeId?: InputMaybe<OrderBy>;
  commenterId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  languageCode?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  parentCommentId?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
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
  commentableType?: InputMaybe<DjangoContentTypeOrderBy>;
  commentableTypeId?: InputMaybe<OrderBy>;
  commenter?: InputMaybe<OpenbookAuthUserOrderBy>;
  commenterId?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isDeleted?: InputMaybe<OrderBy>;
  isEdited?: InputMaybe<OrderBy>;
  languageCode?: InputMaybe<OrderBy>;
  modified?: InputMaybe<OrderBy>;
  parentComment?: InputMaybe<OpenbookPostsPostcommentOrderBy>;
  parentCommentId?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_posts_postcomment */
export type OpenbookPostsPostcommentPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentSelectColumn =
  /** column name */
  | 'commentableId'
  /** column name */
  | 'commentableTypeId'
  /** column name */
  | 'commenterId'
  /** column name */
  | 'created'
  /** column name */
  | 'id'
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'isEdited'
  /** column name */
  | 'languageCode'
  /** column name */
  | 'modified'
  /** column name */
  | 'parentCommentId'
  /** column name */
  | 'text';

/** select "openbookPostsPostcommentAggregateBoolExpBool_andArgumentsColumns" columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentSelectColumnOpenbookPostsPostcommentAggregateBoolExpBool_AndArgumentsColumns =
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'isEdited';

/** select "openbookPostsPostcommentAggregateBoolExpBool_orArgumentsColumns" columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentSelectColumnOpenbookPostsPostcommentAggregateBoolExpBool_OrArgumentsColumns =
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'isEdited';

/** input type for updating data in table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentSetInput = {
  commentableId?: InputMaybe<Scalars['uuid']['input']>;
  commentableTypeId?: InputMaybe<Scalars['Int']['input']>;
  commenterId?: InputMaybe<Scalars['uuid']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isEdited?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['timestamptz']['input']>;
  parentCommentId?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type OpenbookPostsPostcommentStddevFields = {
  commentableTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentStddevOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type OpenbookPostsPostcommentStddevPopFields = {
  commentableTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentStddevPopOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type OpenbookPostsPostcommentStddevSampFields = {
  commentableTypeId?: Maybe<Scalars['Float']['output']>;
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
  commentableId?: InputMaybe<Scalars['uuid']['input']>;
  commentableTypeId?: InputMaybe<Scalars['Int']['input']>;
  commenterId?: InputMaybe<Scalars['uuid']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isEdited?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['timestamptz']['input']>;
  parentCommentId?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type OpenbookPostsPostcommentSumFields = {
  commentableTypeId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentSumOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** update columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentUpdateColumn =
  /** column name */
  | 'commentableId'
  /** column name */
  | 'commentableTypeId'
  /** column name */
  | 'commenterId'
  /** column name */
  | 'created'
  /** column name */
  | 'id'
  /** column name */
  | 'isDeleted'
  /** column name */
  | 'isEdited'
  /** column name */
  | 'languageCode'
  /** column name */
  | 'modified'
  /** column name */
  | 'parentCommentId'
  /** column name */
  | 'text';

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
  commentableTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentVarPopOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type OpenbookPostsPostcommentVarSampFields = {
  commentableTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentVarSampOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type OpenbookPostsPostcommentVarianceFields = {
  commentableTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "openbook_posts_postcomment" */
export type OpenbookPostsPostcommentVarianceOrderBy = {
  commentableTypeId?: InputMaybe<OrderBy>;
};

/** columns and relationships of "openbook_terms_skill" */
export type OpenbookTermsSkill = {
  id: Scalars['uuid']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  titleDa?: Maybe<Scalars['String']['output']>;
  titleDe?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
  titleEs?: Maybe<Scalars['String']['output']>;
  titleFr?: Maybe<Scalars['String']['output']>;
  titleHu?: Maybe<Scalars['String']['output']>;
  titleIt?: Maybe<Scalars['String']['output']>;
  titleNl?: Maybe<Scalars['String']['output']>;
  titlePtBr?: Maybe<Scalars['String']['output']>;
  titleSv?: Maybe<Scalars['String']['output']>;
  titleTr?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "openbook_terms_skill" */
export type OpenbookTermsSkillAggregate = {
  aggregate?: Maybe<OpenbookTermsSkillAggregateFields>;
  nodes: Array<OpenbookTermsSkill>;
};

/** aggregate fields of "openbook_terms_skill" */
export type OpenbookTermsSkillAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<OpenbookTermsSkillMaxFields>;
  min?: Maybe<OpenbookTermsSkillMinFields>;
};


/** aggregate fields of "openbook_terms_skill" */
export type OpenbookTermsSkillAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OpenbookTermsSkillSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "openbook_terms_skill". All fields are combined with a logical 'AND'. */
export type OpenbookTermsSkillBoolExp = {
  _and?: InputMaybe<Array<OpenbookTermsSkillBoolExp>>;
  _not?: InputMaybe<OpenbookTermsSkillBoolExp>;
  _or?: InputMaybe<Array<OpenbookTermsSkillBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  slug?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  titleDa?: InputMaybe<StringComparisonExp>;
  titleDe?: InputMaybe<StringComparisonExp>;
  titleEn?: InputMaybe<StringComparisonExp>;
  titleEs?: InputMaybe<StringComparisonExp>;
  titleFr?: InputMaybe<StringComparisonExp>;
  titleHu?: InputMaybe<StringComparisonExp>;
  titleIt?: InputMaybe<StringComparisonExp>;
  titleNl?: InputMaybe<StringComparisonExp>;
  titlePtBr?: InputMaybe<StringComparisonExp>;
  titleSv?: InputMaybe<StringComparisonExp>;
  titleTr?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "openbook_terms_skill" */
export type OpenbookTermsSkillConstraint =
  /** unique or primary key constraint on columns "id" */
  | 'openbook_terms_skill_pkey'
  /** unique or primary key constraint on columns "slug" */
  | 'openbook_terms_skill_slug_key';

/** input type for inserting data into table "openbook_terms_skill" */
export type OpenbookTermsSkillInsertInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleDa?: InputMaybe<Scalars['String']['input']>;
  titleDe?: InputMaybe<Scalars['String']['input']>;
  titleEn?: InputMaybe<Scalars['String']['input']>;
  titleEs?: InputMaybe<Scalars['String']['input']>;
  titleFr?: InputMaybe<Scalars['String']['input']>;
  titleHu?: InputMaybe<Scalars['String']['input']>;
  titleIt?: InputMaybe<Scalars['String']['input']>;
  titleNl?: InputMaybe<Scalars['String']['input']>;
  titlePtBr?: InputMaybe<Scalars['String']['input']>;
  titleSv?: InputMaybe<Scalars['String']['input']>;
  titleTr?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type OpenbookTermsSkillMaxFields = {
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleDa?: Maybe<Scalars['String']['output']>;
  titleDe?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
  titleEs?: Maybe<Scalars['String']['output']>;
  titleFr?: Maybe<Scalars['String']['output']>;
  titleHu?: Maybe<Scalars['String']['output']>;
  titleIt?: Maybe<Scalars['String']['output']>;
  titleNl?: Maybe<Scalars['String']['output']>;
  titlePtBr?: Maybe<Scalars['String']['output']>;
  titleSv?: Maybe<Scalars['String']['output']>;
  titleTr?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type OpenbookTermsSkillMinFields = {
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleDa?: Maybe<Scalars['String']['output']>;
  titleDe?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
  titleEs?: Maybe<Scalars['String']['output']>;
  titleFr?: Maybe<Scalars['String']['output']>;
  titleHu?: Maybe<Scalars['String']['output']>;
  titleIt?: Maybe<Scalars['String']['output']>;
  titleNl?: Maybe<Scalars['String']['output']>;
  titlePtBr?: Maybe<Scalars['String']['output']>;
  titleSv?: Maybe<Scalars['String']['output']>;
  titleTr?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "openbook_terms_skill" */
export type OpenbookTermsSkillMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OpenbookTermsSkill>;
};

/** input type for inserting object relation for remote table "openbook_terms_skill" */
export type OpenbookTermsSkillObjRelInsertInput = {
  data: OpenbookTermsSkillInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<OpenbookTermsSkillOnConflict>;
};

/** on_conflict condition type for table "openbook_terms_skill" */
export type OpenbookTermsSkillOnConflict = {
  constraint: OpenbookTermsSkillConstraint;
  updateColumns?: Array<OpenbookTermsSkillUpdateColumn>;
  where?: InputMaybe<OpenbookTermsSkillBoolExp>;
};

/** Ordering options when selecting data from "openbook_terms_skill". */
export type OpenbookTermsSkillOrderBy = {
  id?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  titleDa?: InputMaybe<OrderBy>;
  titleDe?: InputMaybe<OrderBy>;
  titleEn?: InputMaybe<OrderBy>;
  titleEs?: InputMaybe<OrderBy>;
  titleFr?: InputMaybe<OrderBy>;
  titleHu?: InputMaybe<OrderBy>;
  titleIt?: InputMaybe<OrderBy>;
  titleNl?: InputMaybe<OrderBy>;
  titlePtBr?: InputMaybe<OrderBy>;
  titleSv?: InputMaybe<OrderBy>;
  titleTr?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: openbook_terms_skill */
export type OpenbookTermsSkillPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "openbook_terms_skill" */
export type OpenbookTermsSkillSelectColumn =
  /** column name */
  | 'id'
  /** column name */
  | 'slug'
  /** column name */
  | 'title'
  /** column name */
  | 'titleDa'
  /** column name */
  | 'titleDe'
  /** column name */
  | 'titleEn'
  /** column name */
  | 'titleEs'
  /** column name */
  | 'titleFr'
  /** column name */
  | 'titleHu'
  /** column name */
  | 'titleIt'
  /** column name */
  | 'titleNl'
  /** column name */
  | 'titlePtBr'
  /** column name */
  | 'titleSv'
  /** column name */
  | 'titleTr';

/** input type for updating data in table "openbook_terms_skill" */
export type OpenbookTermsSkillSetInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleDa?: InputMaybe<Scalars['String']['input']>;
  titleDe?: InputMaybe<Scalars['String']['input']>;
  titleEn?: InputMaybe<Scalars['String']['input']>;
  titleEs?: InputMaybe<Scalars['String']['input']>;
  titleFr?: InputMaybe<Scalars['String']['input']>;
  titleHu?: InputMaybe<Scalars['String']['input']>;
  titleIt?: InputMaybe<Scalars['String']['input']>;
  titleNl?: InputMaybe<Scalars['String']['input']>;
  titlePtBr?: InputMaybe<Scalars['String']['input']>;
  titleSv?: InputMaybe<Scalars['String']['input']>;
  titleTr?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "openbook_terms_skill" */
export type OpenbookTermsSkillStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OpenbookTermsSkillStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OpenbookTermsSkillStreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleDa?: InputMaybe<Scalars['String']['input']>;
  titleDe?: InputMaybe<Scalars['String']['input']>;
  titleEn?: InputMaybe<Scalars['String']['input']>;
  titleEs?: InputMaybe<Scalars['String']['input']>;
  titleFr?: InputMaybe<Scalars['String']['input']>;
  titleHu?: InputMaybe<Scalars['String']['input']>;
  titleIt?: InputMaybe<Scalars['String']['input']>;
  titleNl?: InputMaybe<Scalars['String']['input']>;
  titlePtBr?: InputMaybe<Scalars['String']['input']>;
  titleSv?: InputMaybe<Scalars['String']['input']>;
  titleTr?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "openbook_terms_skill" */
export type OpenbookTermsSkillUpdateColumn =
  /** column name */
  | 'id'
  /** column name */
  | 'slug'
  /** column name */
  | 'title'
  /** column name */
  | 'titleDa'
  /** column name */
  | 'titleDe'
  /** column name */
  | 'titleEn'
  /** column name */
  | 'titleEs'
  /** column name */
  | 'titleFr'
  /** column name */
  | 'titleHu'
  /** column name */
  | 'titleIt'
  /** column name */
  | 'titleNl'
  /** column name */
  | 'titlePtBr'
  /** column name */
  | 'titleSv'
  /** column name */
  | 'titleTr';

export type OpenbookTermsSkillUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpenbookTermsSkillSetInput>;
  /** filter the rows which have to be updated */
  where: OpenbookTermsSkillBoolExp;
};

/** column ordering options */
export type OrderBy =
  /** in ascending order, nulls last */
  | 'ASC'
  /** in ascending order, nulls first */
  | 'ASC_NULLS_FIRST'
  /** in ascending order, nulls last */
  | 'ASC_NULLS_LAST'
  /** in descending order, nulls first */
  | 'DESC'
  /** in descending order, nulls first */
  | 'DESC_NULLS_FIRST'
  /** in descending order, nulls last */
  | 'DESC_NULLS_LAST';

export type Pagination = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};

export type Report = {
  contentId: Scalars['UUID']['output'];
  contentType: ContentType;
  createdAt: Scalars['DateTime']['output'];
  details: Scalars['String']['output'];
  events: Array<ReportEvent>;
  id: Scalars['UUID']['output'];
  reportedComment?: Maybe<OpenbookPostsPostcomment>;
  reportedFeedPost?: Maybe<FeedPostsFeedpost>;
  reportedPost?: Maybe<OpenbookPostsPost>;
  reportedSpace?: Maybe<OpenbookCommunitiesCommunity>;
  reportedSpaceAppointment?: Maybe<OpenbookAppointmentsAppointment>;
  reportedSpaceLinkhubTool?: Maybe<OpenbookCommunitiesCollaborationtool>;
  reportedSpaceTask?: Maybe<OpenbookCommunitiesTask>;
  reportedUser?: Maybe<OpenbookAuthUser>;
  reporter?: Maybe<OpenbookAuthUser>;
  reporterId: Scalars['UUID']['output'];
  status: ReportStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type ReportConfirmation = {
  success: Scalars['Boolean']['output'];
};

export type ReportEvent = {
  actor?: Maybe<User>;
  eventName: ReportLogEvent;
  eventPayload: Scalars['JSONObject']['output'];
  id: Scalars['UUID']['output'];
  occurredAt: Scalars['DateTime']['output'];
  report: Report;
};

export type ReportLogEvent =
  | 'REPORT_CREATED'
  | 'STATUS_CHANGED'
  | 'USER_SUSPENDED';

export type ReportStatus =
  | 'ACTION_TAKEN'
  | 'IN_PROGRESS'
  | 'OPEN'
  | 'REJECTED';

export type ReportSubmission = {
  contentId: Scalars['UUID']['input'];
  contentType: ContentType;
  details: Scalars['String']['input'];
};

export type ReportsFilter = {
  reporter?: InputMaybe<Scalars['UUID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ReportStatus>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type SmallintComparisonExp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type Success = {
  success: Scalars['Boolean']['output'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type TokenValidity = {
  valid: Scalars['Boolean']['output'];
};

export type User = {
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  role: UserRole;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserRole =
  | 'ADMIN'
  | 'MODERATOR';

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  changeOwnPassword: Success;
  changeReportStatus: Report;
  changeRole: User;
  createReport: ReportConfirmation;
  /** delete data from the table: "django_content_type" */
  deleteDjangoContentType?: Maybe<DjangoContentTypeMutationResponse>;
  /** delete single row from the table: "django_content_type" */
  deleteDjangoContentTypeByPk?: Maybe<DjangoContentType>;
  /** delete data from the table: "feed_posts_feedpost" */
  deleteFeedPostsFeedpost?: Maybe<FeedPostsFeedpostMutationResponse>;
  /** delete single row from the table: "feed_posts_feedpost" */
  deleteFeedPostsFeedpostByPk?: Maybe<FeedPostsFeedpost>;
  /** delete data from the table: "openbook_appointments_appointment" */
  deleteOpenbookAppointmentsAppointment?: Maybe<OpenbookAppointmentsAppointmentMutationResponse>;
  /** delete single row from the table: "openbook_appointments_appointment" */
  deleteOpenbookAppointmentsAppointmentByPk?: Maybe<OpenbookAppointmentsAppointment>;
  /** delete data from the table: "openbook_appointments_appointment_participants" */
  deleteOpenbookAppointmentsAppointmentParticipants?: Maybe<OpenbookAppointmentsAppointmentParticipantsMutationResponse>;
  /** delete single row from the table: "openbook_appointments_appointment_participants" */
  deleteOpenbookAppointmentsAppointmentParticipantsByPk?: Maybe<OpenbookAppointmentsAppointmentParticipants>;
  /** delete data from the table: "openbook_appointments_locationdetails" */
  deleteOpenbookAppointmentsLocationdetails?: Maybe<OpenbookAppointmentsLocationdetailsMutationResponse>;
  /** delete single row from the table: "openbook_appointments_locationdetails" */
  deleteOpenbookAppointmentsLocationdetailsByPk?: Maybe<OpenbookAppointmentsLocationdetails>;
  /** delete data from the table: "openbook_appointments_videocalllink" */
  deleteOpenbookAppointmentsVideocalllink?: Maybe<OpenbookAppointmentsVideocalllinkMutationResponse>;
  /** delete single row from the table: "openbook_appointments_videocalllink" */
  deleteOpenbookAppointmentsVideocalllinkByPk?: Maybe<OpenbookAppointmentsVideocalllink>;
  /** delete data from the table: "openbook_auth_user" */
  deleteOpenbookAuthUser?: Maybe<OpenbookAuthUserMutationResponse>;
  /** delete single row from the table: "openbook_auth_user" */
  deleteOpenbookAuthUserByPk?: Maybe<OpenbookAuthUser>;
  /** delete data from the table: "openbook_auth_userprofile" */
  deleteOpenbookAuthUserprofile?: Maybe<OpenbookAuthUserprofileMutationResponse>;
  /** delete single row from the table: "openbook_auth_userprofile" */
  deleteOpenbookAuthUserprofileByPk?: Maybe<OpenbookAuthUserprofile>;
  /** delete data from the table: "openbook_communities_collaborationtool" */
  deleteOpenbookCommunitiesCollaborationtool?: Maybe<OpenbookCommunitiesCollaborationtoolMutationResponse>;
  /** delete single row from the table: "openbook_communities_collaborationtool" */
  deleteOpenbookCommunitiesCollaborationtoolByPk?: Maybe<OpenbookCommunitiesCollaborationtool>;
  /** delete data from the table: "openbook_communities_community" */
  deleteOpenbookCommunitiesCommunity?: Maybe<OpenbookCommunitiesCommunityMutationResponse>;
  /** delete single row from the table: "openbook_communities_community" */
  deleteOpenbookCommunitiesCommunityByPk?: Maybe<OpenbookCommunitiesCommunity>;
  /** delete data from the table: "openbook_communities_communitymembership" */
  deleteOpenbookCommunitiesCommunitymembership?: Maybe<OpenbookCommunitiesCommunitymembershipMutationResponse>;
  /** delete single row from the table: "openbook_communities_communitymembership" */
  deleteOpenbookCommunitiesCommunitymembershipByPk?: Maybe<OpenbookCommunitiesCommunitymembership>;
  /** delete data from the table: "openbook_communities_externallink" */
  deleteOpenbookCommunitiesExternallink?: Maybe<OpenbookCommunitiesExternallinkMutationResponse>;
  /** delete single row from the table: "openbook_communities_externallink" */
  deleteOpenbookCommunitiesExternallinkByPk?: Maybe<OpenbookCommunitiesExternallink>;
  /** delete data from the table: "openbook_communities_onboardingstep" */
  deleteOpenbookCommunitiesOnboardingstep?: Maybe<OpenbookCommunitiesOnboardingstepMutationResponse>;
  /** delete single row from the table: "openbook_communities_onboardingstep" */
  deleteOpenbookCommunitiesOnboardingstepByPk?: Maybe<OpenbookCommunitiesOnboardingstep>;
  /** delete data from the table: "openbook_communities_task" */
  deleteOpenbookCommunitiesTask?: Maybe<OpenbookCommunitiesTaskMutationResponse>;
  /** delete single row from the table: "openbook_communities_task" */
  deleteOpenbookCommunitiesTaskByPk?: Maybe<OpenbookCommunitiesTask>;
  /** delete data from the table: "openbook_communities_task_skills" */
  deleteOpenbookCommunitiesTaskSkills?: Maybe<OpenbookCommunitiesTaskSkillsMutationResponse>;
  /** delete single row from the table: "openbook_communities_task_skills" */
  deleteOpenbookCommunitiesTaskSkillsByPk?: Maybe<OpenbookCommunitiesTaskSkills>;
  /** delete data from the table: "openbook_posts_post" */
  deleteOpenbookPostsPost?: Maybe<OpenbookPostsPostMutationResponse>;
  /** delete single row from the table: "openbook_posts_post" */
  deleteOpenbookPostsPostByPk?: Maybe<OpenbookPostsPost>;
  /** delete data from the table: "openbook_posts_postcomment" */
  deleteOpenbookPostsPostcomment?: Maybe<OpenbookPostsPostcommentMutationResponse>;
  /** delete single row from the table: "openbook_posts_postcomment" */
  deleteOpenbookPostsPostcommentByPk?: Maybe<OpenbookPostsPostcomment>;
  /** delete data from the table: "openbook_terms_skill" */
  deleteOpenbookTermsSkill?: Maybe<OpenbookTermsSkillMutationResponse>;
  /** delete single row from the table: "openbook_terms_skill" */
  deleteOpenbookTermsSkillByPk?: Maybe<OpenbookTermsSkill>;
  deleteUser: Success;
  /** insert data into the table: "django_content_type" */
  insertDjangoContentType?: Maybe<DjangoContentTypeMutationResponse>;
  /** insert a single row into the table: "django_content_type" */
  insertDjangoContentTypeOne?: Maybe<DjangoContentType>;
  /** insert data into the table: "feed_posts_feedpost" */
  insertFeedPostsFeedpost?: Maybe<FeedPostsFeedpostMutationResponse>;
  /** insert a single row into the table: "feed_posts_feedpost" */
  insertFeedPostsFeedpostOne?: Maybe<FeedPostsFeedpost>;
  /** insert data into the table: "openbook_appointments_appointment" */
  insertOpenbookAppointmentsAppointment?: Maybe<OpenbookAppointmentsAppointmentMutationResponse>;
  /** insert a single row into the table: "openbook_appointments_appointment" */
  insertOpenbookAppointmentsAppointmentOne?: Maybe<OpenbookAppointmentsAppointment>;
  /** insert data into the table: "openbook_appointments_appointment_participants" */
  insertOpenbookAppointmentsAppointmentParticipants?: Maybe<OpenbookAppointmentsAppointmentParticipantsMutationResponse>;
  /** insert a single row into the table: "openbook_appointments_appointment_participants" */
  insertOpenbookAppointmentsAppointmentParticipantsOne?: Maybe<OpenbookAppointmentsAppointmentParticipants>;
  /** insert data into the table: "openbook_appointments_locationdetails" */
  insertOpenbookAppointmentsLocationdetails?: Maybe<OpenbookAppointmentsLocationdetailsMutationResponse>;
  /** insert a single row into the table: "openbook_appointments_locationdetails" */
  insertOpenbookAppointmentsLocationdetailsOne?: Maybe<OpenbookAppointmentsLocationdetails>;
  /** insert data into the table: "openbook_appointments_videocalllink" */
  insertOpenbookAppointmentsVideocalllink?: Maybe<OpenbookAppointmentsVideocalllinkMutationResponse>;
  /** insert a single row into the table: "openbook_appointments_videocalllink" */
  insertOpenbookAppointmentsVideocalllinkOne?: Maybe<OpenbookAppointmentsVideocalllink>;
  /** insert data into the table: "openbook_auth_user" */
  insertOpenbookAuthUser?: Maybe<OpenbookAuthUserMutationResponse>;
  /** insert a single row into the table: "openbook_auth_user" */
  insertOpenbookAuthUserOne?: Maybe<OpenbookAuthUser>;
  /** insert data into the table: "openbook_auth_userprofile" */
  insertOpenbookAuthUserprofile?: Maybe<OpenbookAuthUserprofileMutationResponse>;
  /** insert a single row into the table: "openbook_auth_userprofile" */
  insertOpenbookAuthUserprofileOne?: Maybe<OpenbookAuthUserprofile>;
  /** insert data into the table: "openbook_communities_collaborationtool" */
  insertOpenbookCommunitiesCollaborationtool?: Maybe<OpenbookCommunitiesCollaborationtoolMutationResponse>;
  /** insert a single row into the table: "openbook_communities_collaborationtool" */
  insertOpenbookCommunitiesCollaborationtoolOne?: Maybe<OpenbookCommunitiesCollaborationtool>;
  /** insert data into the table: "openbook_communities_community" */
  insertOpenbookCommunitiesCommunity?: Maybe<OpenbookCommunitiesCommunityMutationResponse>;
  /** insert a single row into the table: "openbook_communities_community" */
  insertOpenbookCommunitiesCommunityOne?: Maybe<OpenbookCommunitiesCommunity>;
  /** insert data into the table: "openbook_communities_communitymembership" */
  insertOpenbookCommunitiesCommunitymembership?: Maybe<OpenbookCommunitiesCommunitymembershipMutationResponse>;
  /** insert a single row into the table: "openbook_communities_communitymembership" */
  insertOpenbookCommunitiesCommunitymembershipOne?: Maybe<OpenbookCommunitiesCommunitymembership>;
  /** insert data into the table: "openbook_communities_externallink" */
  insertOpenbookCommunitiesExternallink?: Maybe<OpenbookCommunitiesExternallinkMutationResponse>;
  /** insert a single row into the table: "openbook_communities_externallink" */
  insertOpenbookCommunitiesExternallinkOne?: Maybe<OpenbookCommunitiesExternallink>;
  /** insert data into the table: "openbook_communities_onboardingstep" */
  insertOpenbookCommunitiesOnboardingstep?: Maybe<OpenbookCommunitiesOnboardingstepMutationResponse>;
  /** insert a single row into the table: "openbook_communities_onboardingstep" */
  insertOpenbookCommunitiesOnboardingstepOne?: Maybe<OpenbookCommunitiesOnboardingstep>;
  /** insert data into the table: "openbook_communities_task" */
  insertOpenbookCommunitiesTask?: Maybe<OpenbookCommunitiesTaskMutationResponse>;
  /** insert a single row into the table: "openbook_communities_task" */
  insertOpenbookCommunitiesTaskOne?: Maybe<OpenbookCommunitiesTask>;
  /** insert data into the table: "openbook_communities_task_skills" */
  insertOpenbookCommunitiesTaskSkills?: Maybe<OpenbookCommunitiesTaskSkillsMutationResponse>;
  /** insert a single row into the table: "openbook_communities_task_skills" */
  insertOpenbookCommunitiesTaskSkillsOne?: Maybe<OpenbookCommunitiesTaskSkills>;
  /** insert data into the table: "openbook_posts_post" */
  insertOpenbookPostsPost?: Maybe<OpenbookPostsPostMutationResponse>;
  /** insert a single row into the table: "openbook_posts_post" */
  insertOpenbookPostsPostOne?: Maybe<OpenbookPostsPost>;
  /** insert data into the table: "openbook_posts_postcomment" */
  insertOpenbookPostsPostcomment?: Maybe<OpenbookPostsPostcommentMutationResponse>;
  /** insert a single row into the table: "openbook_posts_postcomment" */
  insertOpenbookPostsPostcommentOne?: Maybe<OpenbookPostsPostcomment>;
  /** insert data into the table: "openbook_terms_skill" */
  insertOpenbookTermsSkill?: Maybe<OpenbookTermsSkillMutationResponse>;
  /** insert a single row into the table: "openbook_terms_skill" */
  insertOpenbookTermsSkillOne?: Maybe<OpenbookTermsSkill>;
  login: AuthResult;
  registerUser: User;
  suspendUser: Success;
  /** update data of the table: "django_content_type" */
  updateDjangoContentType?: Maybe<DjangoContentTypeMutationResponse>;
  /** update single row of the table: "django_content_type" */
  updateDjangoContentTypeByPk?: Maybe<DjangoContentType>;
  /** update multiples rows of table: "django_content_type" */
  updateDjangoContentTypeMany?: Maybe<Array<Maybe<DjangoContentTypeMutationResponse>>>;
  /** update data of the table: "feed_posts_feedpost" */
  updateFeedPostsFeedpost?: Maybe<FeedPostsFeedpostMutationResponse>;
  /** update single row of the table: "feed_posts_feedpost" */
  updateFeedPostsFeedpostByPk?: Maybe<FeedPostsFeedpost>;
  /** update multiples rows of table: "feed_posts_feedpost" */
  updateFeedPostsFeedpostMany?: Maybe<Array<Maybe<FeedPostsFeedpostMutationResponse>>>;
  /** update data of the table: "openbook_appointments_appointment" */
  updateOpenbookAppointmentsAppointment?: Maybe<OpenbookAppointmentsAppointmentMutationResponse>;
  /** update single row of the table: "openbook_appointments_appointment" */
  updateOpenbookAppointmentsAppointmentByPk?: Maybe<OpenbookAppointmentsAppointment>;
  /** update multiples rows of table: "openbook_appointments_appointment" */
  updateOpenbookAppointmentsAppointmentMany?: Maybe<Array<Maybe<OpenbookAppointmentsAppointmentMutationResponse>>>;
  /** update data of the table: "openbook_appointments_appointment_participants" */
  updateOpenbookAppointmentsAppointmentParticipants?: Maybe<OpenbookAppointmentsAppointmentParticipantsMutationResponse>;
  /** update single row of the table: "openbook_appointments_appointment_participants" */
  updateOpenbookAppointmentsAppointmentParticipantsByPk?: Maybe<OpenbookAppointmentsAppointmentParticipants>;
  /** update multiples rows of table: "openbook_appointments_appointment_participants" */
  updateOpenbookAppointmentsAppointmentParticipantsMany?: Maybe<Array<Maybe<OpenbookAppointmentsAppointmentParticipantsMutationResponse>>>;
  /** update data of the table: "openbook_appointments_locationdetails" */
  updateOpenbookAppointmentsLocationdetails?: Maybe<OpenbookAppointmentsLocationdetailsMutationResponse>;
  /** update single row of the table: "openbook_appointments_locationdetails" */
  updateOpenbookAppointmentsLocationdetailsByPk?: Maybe<OpenbookAppointmentsLocationdetails>;
  /** update multiples rows of table: "openbook_appointments_locationdetails" */
  updateOpenbookAppointmentsLocationdetailsMany?: Maybe<Array<Maybe<OpenbookAppointmentsLocationdetailsMutationResponse>>>;
  /** update data of the table: "openbook_appointments_videocalllink" */
  updateOpenbookAppointmentsVideocalllink?: Maybe<OpenbookAppointmentsVideocalllinkMutationResponse>;
  /** update single row of the table: "openbook_appointments_videocalllink" */
  updateOpenbookAppointmentsVideocalllinkByPk?: Maybe<OpenbookAppointmentsVideocalllink>;
  /** update multiples rows of table: "openbook_appointments_videocalllink" */
  updateOpenbookAppointmentsVideocalllinkMany?: Maybe<Array<Maybe<OpenbookAppointmentsVideocalllinkMutationResponse>>>;
  /** update data of the table: "openbook_auth_user" */
  updateOpenbookAuthUser?: Maybe<OpenbookAuthUserMutationResponse>;
  /** update single row of the table: "openbook_auth_user" */
  updateOpenbookAuthUserByPk?: Maybe<OpenbookAuthUser>;
  /** update multiples rows of table: "openbook_auth_user" */
  updateOpenbookAuthUserMany?: Maybe<Array<Maybe<OpenbookAuthUserMutationResponse>>>;
  /** update data of the table: "openbook_auth_userprofile" */
  updateOpenbookAuthUserprofile?: Maybe<OpenbookAuthUserprofileMutationResponse>;
  /** update single row of the table: "openbook_auth_userprofile" */
  updateOpenbookAuthUserprofileByPk?: Maybe<OpenbookAuthUserprofile>;
  /** update multiples rows of table: "openbook_auth_userprofile" */
  updateOpenbookAuthUserprofileMany?: Maybe<Array<Maybe<OpenbookAuthUserprofileMutationResponse>>>;
  /** update data of the table: "openbook_communities_collaborationtool" */
  updateOpenbookCommunitiesCollaborationtool?: Maybe<OpenbookCommunitiesCollaborationtoolMutationResponse>;
  /** update single row of the table: "openbook_communities_collaborationtool" */
  updateOpenbookCommunitiesCollaborationtoolByPk?: Maybe<OpenbookCommunitiesCollaborationtool>;
  /** update multiples rows of table: "openbook_communities_collaborationtool" */
  updateOpenbookCommunitiesCollaborationtoolMany?: Maybe<Array<Maybe<OpenbookCommunitiesCollaborationtoolMutationResponse>>>;
  /** update data of the table: "openbook_communities_community" */
  updateOpenbookCommunitiesCommunity?: Maybe<OpenbookCommunitiesCommunityMutationResponse>;
  /** update single row of the table: "openbook_communities_community" */
  updateOpenbookCommunitiesCommunityByPk?: Maybe<OpenbookCommunitiesCommunity>;
  /** update multiples rows of table: "openbook_communities_community" */
  updateOpenbookCommunitiesCommunityMany?: Maybe<Array<Maybe<OpenbookCommunitiesCommunityMutationResponse>>>;
  /** update data of the table: "openbook_communities_communitymembership" */
  updateOpenbookCommunitiesCommunitymembership?: Maybe<OpenbookCommunitiesCommunitymembershipMutationResponse>;
  /** update single row of the table: "openbook_communities_communitymembership" */
  updateOpenbookCommunitiesCommunitymembershipByPk?: Maybe<OpenbookCommunitiesCommunitymembership>;
  /** update multiples rows of table: "openbook_communities_communitymembership" */
  updateOpenbookCommunitiesCommunitymembershipMany?: Maybe<Array<Maybe<OpenbookCommunitiesCommunitymembershipMutationResponse>>>;
  /** update data of the table: "openbook_communities_externallink" */
  updateOpenbookCommunitiesExternallink?: Maybe<OpenbookCommunitiesExternallinkMutationResponse>;
  /** update single row of the table: "openbook_communities_externallink" */
  updateOpenbookCommunitiesExternallinkByPk?: Maybe<OpenbookCommunitiesExternallink>;
  /** update multiples rows of table: "openbook_communities_externallink" */
  updateOpenbookCommunitiesExternallinkMany?: Maybe<Array<Maybe<OpenbookCommunitiesExternallinkMutationResponse>>>;
  /** update data of the table: "openbook_communities_onboardingstep" */
  updateOpenbookCommunitiesOnboardingstep?: Maybe<OpenbookCommunitiesOnboardingstepMutationResponse>;
  /** update single row of the table: "openbook_communities_onboardingstep" */
  updateOpenbookCommunitiesOnboardingstepByPk?: Maybe<OpenbookCommunitiesOnboardingstep>;
  /** update multiples rows of table: "openbook_communities_onboardingstep" */
  updateOpenbookCommunitiesOnboardingstepMany?: Maybe<Array<Maybe<OpenbookCommunitiesOnboardingstepMutationResponse>>>;
  /** update data of the table: "openbook_communities_task" */
  updateOpenbookCommunitiesTask?: Maybe<OpenbookCommunitiesTaskMutationResponse>;
  /** update single row of the table: "openbook_communities_task" */
  updateOpenbookCommunitiesTaskByPk?: Maybe<OpenbookCommunitiesTask>;
  /** update multiples rows of table: "openbook_communities_task" */
  updateOpenbookCommunitiesTaskMany?: Maybe<Array<Maybe<OpenbookCommunitiesTaskMutationResponse>>>;
  /** update data of the table: "openbook_communities_task_skills" */
  updateOpenbookCommunitiesTaskSkills?: Maybe<OpenbookCommunitiesTaskSkillsMutationResponse>;
  /** update single row of the table: "openbook_communities_task_skills" */
  updateOpenbookCommunitiesTaskSkillsByPk?: Maybe<OpenbookCommunitiesTaskSkills>;
  /** update multiples rows of table: "openbook_communities_task_skills" */
  updateOpenbookCommunitiesTaskSkillsMany?: Maybe<Array<Maybe<OpenbookCommunitiesTaskSkillsMutationResponse>>>;
  /** update data of the table: "openbook_posts_post" */
  updateOpenbookPostsPost?: Maybe<OpenbookPostsPostMutationResponse>;
  /** update single row of the table: "openbook_posts_post" */
  updateOpenbookPostsPostByPk?: Maybe<OpenbookPostsPost>;
  /** update multiples rows of table: "openbook_posts_post" */
  updateOpenbookPostsPostMany?: Maybe<Array<Maybe<OpenbookPostsPostMutationResponse>>>;
  /** update data of the table: "openbook_posts_postcomment" */
  updateOpenbookPostsPostcomment?: Maybe<OpenbookPostsPostcommentMutationResponse>;
  /** update single row of the table: "openbook_posts_postcomment" */
  updateOpenbookPostsPostcommentByPk?: Maybe<OpenbookPostsPostcomment>;
  /** update multiples rows of table: "openbook_posts_postcomment" */
  updateOpenbookPostsPostcommentMany?: Maybe<Array<Maybe<OpenbookPostsPostcommentMutationResponse>>>;
  /** update data of the table: "openbook_terms_skill" */
  updateOpenbookTermsSkill?: Maybe<OpenbookTermsSkillMutationResponse>;
  /** update single row of the table: "openbook_terms_skill" */
  updateOpenbookTermsSkillByPk?: Maybe<OpenbookTermsSkill>;
  /** update multiples rows of table: "openbook_terms_skill" */
  updateOpenbookTermsSkillMany?: Maybe<Array<Maybe<OpenbookTermsSkillMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootChangeOwnPasswordArgs = {
  newPassword: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootChangeReportStatusArgs = {
  newStatus: ReportStatus;
  reportId: Scalars['UUID']['input'];
};


/** mutation root */
export type Mutation_RootChangeRoleArgs = {
  newRole: UserRole;
  userId: Scalars['UUID']['input'];
};


/** mutation root */
export type Mutation_RootCreateReportArgs = {
  input: ReportSubmission;
};


/** mutation root */
export type Mutation_RootDeleteDjangoContentTypeArgs = {
  where: DjangoContentTypeBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteDjangoContentTypeByPkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDeleteFeedPostsFeedpostArgs = {
  where: FeedPostsFeedpostBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteFeedPostsFeedpostByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookAppointmentsAppointmentArgs = {
  where: OpenbookAppointmentsAppointmentBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookAppointmentsAppointmentByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookAppointmentsAppointmentParticipantsArgs = {
  where: OpenbookAppointmentsAppointmentParticipantsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookAppointmentsAppointmentParticipantsByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookAppointmentsLocationdetailsArgs = {
  where: OpenbookAppointmentsLocationdetailsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookAppointmentsLocationdetailsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookAppointmentsVideocalllinkArgs = {
  where: OpenbookAppointmentsVideocalllinkBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookAppointmentsVideocalllinkByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookAuthUserArgs = {
  where: OpenbookAuthUserBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookAuthUserByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookAuthUserprofileArgs = {
  where: OpenbookAuthUserprofileBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookAuthUserprofileByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesCollaborationtoolArgs = {
  where: OpenbookCommunitiesCollaborationtoolBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesCollaborationtoolByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesCommunityArgs = {
  where: OpenbookCommunitiesCommunityBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesCommunityByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesCommunitymembershipArgs = {
  where: OpenbookCommunitiesCommunitymembershipBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesCommunitymembershipByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesExternallinkArgs = {
  where: OpenbookCommunitiesExternallinkBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesExternallinkByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesOnboardingstepArgs = {
  where: OpenbookCommunitiesOnboardingstepBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesOnboardingstepByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesTaskArgs = {
  where: OpenbookCommunitiesTaskBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesTaskByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesTaskSkillsArgs = {
  where: OpenbookCommunitiesTaskSkillsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookCommunitiesTaskSkillsByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookPostsPostArgs = {
  where: OpenbookPostsPostBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookPostsPostByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookPostsPostcommentArgs = {
  where: OpenbookPostsPostcommentBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookPostsPostcommentByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOpenbookTermsSkillArgs = {
  where: OpenbookTermsSkillBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOpenbookTermsSkillByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  userId: Scalars['UUID']['input'];
};


/** mutation root */
export type Mutation_RootInsertDjangoContentTypeArgs = {
  objects: Array<DjangoContentTypeInsertInput>;
  onConflict?: InputMaybe<DjangoContentTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertDjangoContentTypeOneArgs = {
  object: DjangoContentTypeInsertInput;
  onConflict?: InputMaybe<DjangoContentTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFeedPostsFeedpostArgs = {
  objects: Array<FeedPostsFeedpostInsertInput>;
  onConflict?: InputMaybe<FeedPostsFeedpostOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFeedPostsFeedpostOneArgs = {
  object: FeedPostsFeedpostInsertInput;
  onConflict?: InputMaybe<FeedPostsFeedpostOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookAppointmentsAppointmentArgs = {
  objects: Array<OpenbookAppointmentsAppointmentInsertInput>;
  onConflict?: InputMaybe<OpenbookAppointmentsAppointmentOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookAppointmentsAppointmentOneArgs = {
  object: OpenbookAppointmentsAppointmentInsertInput;
  onConflict?: InputMaybe<OpenbookAppointmentsAppointmentOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookAppointmentsAppointmentParticipantsArgs = {
  objects: Array<OpenbookAppointmentsAppointmentParticipantsInsertInput>;
  onConflict?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookAppointmentsAppointmentParticipantsOneArgs = {
  object: OpenbookAppointmentsAppointmentParticipantsInsertInput;
  onConflict?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookAppointmentsLocationdetailsArgs = {
  objects: Array<OpenbookAppointmentsLocationdetailsInsertInput>;
  onConflict?: InputMaybe<OpenbookAppointmentsLocationdetailsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookAppointmentsLocationdetailsOneArgs = {
  object: OpenbookAppointmentsLocationdetailsInsertInput;
  onConflict?: InputMaybe<OpenbookAppointmentsLocationdetailsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookAppointmentsVideocalllinkArgs = {
  objects: Array<OpenbookAppointmentsVideocalllinkInsertInput>;
  onConflict?: InputMaybe<OpenbookAppointmentsVideocalllinkOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookAppointmentsVideocalllinkOneArgs = {
  object: OpenbookAppointmentsVideocalllinkInsertInput;
  onConflict?: InputMaybe<OpenbookAppointmentsVideocalllinkOnConflict>;
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
export type Mutation_RootInsertOpenbookCommunitiesCollaborationtoolArgs = {
  objects: Array<OpenbookCommunitiesCollaborationtoolInsertInput>;
  onConflict?: InputMaybe<OpenbookCommunitiesCollaborationtoolOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookCommunitiesCollaborationtoolOneArgs = {
  object: OpenbookCommunitiesCollaborationtoolInsertInput;
  onConflict?: InputMaybe<OpenbookCommunitiesCollaborationtoolOnConflict>;
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
export type Mutation_RootInsertOpenbookCommunitiesCommunitymembershipArgs = {
  objects: Array<OpenbookCommunitiesCommunitymembershipInsertInput>;
  onConflict?: InputMaybe<OpenbookCommunitiesCommunitymembershipOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookCommunitiesCommunitymembershipOneArgs = {
  object: OpenbookCommunitiesCommunitymembershipInsertInput;
  onConflict?: InputMaybe<OpenbookCommunitiesCommunitymembershipOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookCommunitiesExternallinkArgs = {
  objects: Array<OpenbookCommunitiesExternallinkInsertInput>;
  onConflict?: InputMaybe<OpenbookCommunitiesExternallinkOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookCommunitiesExternallinkOneArgs = {
  object: OpenbookCommunitiesExternallinkInsertInput;
  onConflict?: InputMaybe<OpenbookCommunitiesExternallinkOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookCommunitiesOnboardingstepArgs = {
  objects: Array<OpenbookCommunitiesOnboardingstepInsertInput>;
  onConflict?: InputMaybe<OpenbookCommunitiesOnboardingstepOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookCommunitiesOnboardingstepOneArgs = {
  object: OpenbookCommunitiesOnboardingstepInsertInput;
  onConflict?: InputMaybe<OpenbookCommunitiesOnboardingstepOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookCommunitiesTaskArgs = {
  objects: Array<OpenbookCommunitiesTaskInsertInput>;
  onConflict?: InputMaybe<OpenbookCommunitiesTaskOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookCommunitiesTaskOneArgs = {
  object: OpenbookCommunitiesTaskInsertInput;
  onConflict?: InputMaybe<OpenbookCommunitiesTaskOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookCommunitiesTaskSkillsArgs = {
  objects: Array<OpenbookCommunitiesTaskSkillsInsertInput>;
  onConflict?: InputMaybe<OpenbookCommunitiesTaskSkillsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookCommunitiesTaskSkillsOneArgs = {
  object: OpenbookCommunitiesTaskSkillsInsertInput;
  onConflict?: InputMaybe<OpenbookCommunitiesTaskSkillsOnConflict>;
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
export type Mutation_RootInsertOpenbookTermsSkillArgs = {
  objects: Array<OpenbookTermsSkillInsertInput>;
  onConflict?: InputMaybe<OpenbookTermsSkillOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOpenbookTermsSkillOneArgs = {
  object: OpenbookTermsSkillInsertInput;
  onConflict?: InputMaybe<OpenbookTermsSkillOnConflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootRegisterUserArgs = {
  user: CreateUser;
};


/** mutation root */
export type Mutation_RootSuspendUserArgs = {
  duration?: InputMaybe<Scalars['Int']['input']>;
  email: Scalars['String']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  reportId: Scalars['UUID']['input'];
};


/** mutation root */
export type Mutation_RootUpdateDjangoContentTypeArgs = {
  _inc?: InputMaybe<DjangoContentTypeIncInput>;
  _set?: InputMaybe<DjangoContentTypeSetInput>;
  where: DjangoContentTypeBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateDjangoContentTypeByPkArgs = {
  _inc?: InputMaybe<DjangoContentTypeIncInput>;
  _set?: InputMaybe<DjangoContentTypeSetInput>;
  pkColumns: DjangoContentTypePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateDjangoContentTypeManyArgs = {
  updates: Array<DjangoContentTypeUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateFeedPostsFeedpostArgs = {
  _inc?: InputMaybe<FeedPostsFeedpostIncInput>;
  _set?: InputMaybe<FeedPostsFeedpostSetInput>;
  where: FeedPostsFeedpostBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateFeedPostsFeedpostByPkArgs = {
  _inc?: InputMaybe<FeedPostsFeedpostIncInput>;
  _set?: InputMaybe<FeedPostsFeedpostSetInput>;
  pkColumns: FeedPostsFeedpostPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateFeedPostsFeedpostManyArgs = {
  updates: Array<FeedPostsFeedpostUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookAppointmentsAppointmentArgs = {
  _set?: InputMaybe<OpenbookAppointmentsAppointmentSetInput>;
  where: OpenbookAppointmentsAppointmentBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookAppointmentsAppointmentByPkArgs = {
  _set?: InputMaybe<OpenbookAppointmentsAppointmentSetInput>;
  pkColumns: OpenbookAppointmentsAppointmentPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookAppointmentsAppointmentManyArgs = {
  updates: Array<OpenbookAppointmentsAppointmentUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookAppointmentsAppointmentParticipantsArgs = {
  _inc?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsIncInput>;
  _set?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsSetInput>;
  where: OpenbookAppointmentsAppointmentParticipantsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookAppointmentsAppointmentParticipantsByPkArgs = {
  _inc?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsIncInput>;
  _set?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsSetInput>;
  pkColumns: OpenbookAppointmentsAppointmentParticipantsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookAppointmentsAppointmentParticipantsManyArgs = {
  updates: Array<OpenbookAppointmentsAppointmentParticipantsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookAppointmentsLocationdetailsArgs = {
  _set?: InputMaybe<OpenbookAppointmentsLocationdetailsSetInput>;
  where: OpenbookAppointmentsLocationdetailsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookAppointmentsLocationdetailsByPkArgs = {
  _set?: InputMaybe<OpenbookAppointmentsLocationdetailsSetInput>;
  pkColumns: OpenbookAppointmentsLocationdetailsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookAppointmentsLocationdetailsManyArgs = {
  updates: Array<OpenbookAppointmentsLocationdetailsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookAppointmentsVideocalllinkArgs = {
  _set?: InputMaybe<OpenbookAppointmentsVideocalllinkSetInput>;
  where: OpenbookAppointmentsVideocalllinkBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookAppointmentsVideocalllinkByPkArgs = {
  _set?: InputMaybe<OpenbookAppointmentsVideocalllinkSetInput>;
  pkColumns: OpenbookAppointmentsVideocalllinkPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookAppointmentsVideocalllinkManyArgs = {
  updates: Array<OpenbookAppointmentsVideocalllinkUpdates>;
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
export type Mutation_RootUpdateOpenbookCommunitiesCollaborationtoolArgs = {
  _set?: InputMaybe<OpenbookCommunitiesCollaborationtoolSetInput>;
  where: OpenbookCommunitiesCollaborationtoolBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesCollaborationtoolByPkArgs = {
  _set?: InputMaybe<OpenbookCommunitiesCollaborationtoolSetInput>;
  pkColumns: OpenbookCommunitiesCollaborationtoolPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesCollaborationtoolManyArgs = {
  updates: Array<OpenbookCommunitiesCollaborationtoolUpdates>;
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
export type Mutation_RootUpdateOpenbookCommunitiesCommunitymembershipArgs = {
  _set?: InputMaybe<OpenbookCommunitiesCommunitymembershipSetInput>;
  where: OpenbookCommunitiesCommunitymembershipBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesCommunitymembershipByPkArgs = {
  _set?: InputMaybe<OpenbookCommunitiesCommunitymembershipSetInput>;
  pkColumns: OpenbookCommunitiesCommunitymembershipPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesCommunitymembershipManyArgs = {
  updates: Array<OpenbookCommunitiesCommunitymembershipUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesExternallinkArgs = {
  _set?: InputMaybe<OpenbookCommunitiesExternallinkSetInput>;
  where: OpenbookCommunitiesExternallinkBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesExternallinkByPkArgs = {
  _set?: InputMaybe<OpenbookCommunitiesExternallinkSetInput>;
  pkColumns: OpenbookCommunitiesExternallinkPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesExternallinkManyArgs = {
  updates: Array<OpenbookCommunitiesExternallinkUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesOnboardingstepArgs = {
  _inc?: InputMaybe<OpenbookCommunitiesOnboardingstepIncInput>;
  _set?: InputMaybe<OpenbookCommunitiesOnboardingstepSetInput>;
  where: OpenbookCommunitiesOnboardingstepBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesOnboardingstepByPkArgs = {
  _inc?: InputMaybe<OpenbookCommunitiesOnboardingstepIncInput>;
  _set?: InputMaybe<OpenbookCommunitiesOnboardingstepSetInput>;
  pkColumns: OpenbookCommunitiesOnboardingstepPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesOnboardingstepManyArgs = {
  updates: Array<OpenbookCommunitiesOnboardingstepUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesTaskArgs = {
  _inc?: InputMaybe<OpenbookCommunitiesTaskIncInput>;
  _set?: InputMaybe<OpenbookCommunitiesTaskSetInput>;
  where: OpenbookCommunitiesTaskBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesTaskByPkArgs = {
  _inc?: InputMaybe<OpenbookCommunitiesTaskIncInput>;
  _set?: InputMaybe<OpenbookCommunitiesTaskSetInput>;
  pkColumns: OpenbookCommunitiesTaskPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesTaskManyArgs = {
  updates: Array<OpenbookCommunitiesTaskUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesTaskSkillsArgs = {
  _inc?: InputMaybe<OpenbookCommunitiesTaskSkillsIncInput>;
  _set?: InputMaybe<OpenbookCommunitiesTaskSkillsSetInput>;
  where: OpenbookCommunitiesTaskSkillsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesTaskSkillsByPkArgs = {
  _inc?: InputMaybe<OpenbookCommunitiesTaskSkillsIncInput>;
  _set?: InputMaybe<OpenbookCommunitiesTaskSkillsSetInput>;
  pkColumns: OpenbookCommunitiesTaskSkillsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookCommunitiesTaskSkillsManyArgs = {
  updates: Array<OpenbookCommunitiesTaskSkillsUpdates>;
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


/** mutation root */
export type Mutation_RootUpdateOpenbookTermsSkillArgs = {
  _set?: InputMaybe<OpenbookTermsSkillSetInput>;
  where: OpenbookTermsSkillBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookTermsSkillByPkArgs = {
  _set?: InputMaybe<OpenbookTermsSkillSetInput>;
  pkColumns: OpenbookTermsSkillPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOpenbookTermsSkillManyArgs = {
  updates: Array<OpenbookTermsSkillUpdates>;
};

export type OpenbookAppointmentsAppointmentAggregateBoolExpBool_And = {
  arguments: OpenbookAppointmentsAppointmentSelectColumnOpenbookAppointmentsAppointmentAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookAppointmentsAppointmentAggregateBoolExpBool_Or = {
  arguments: OpenbookAppointmentsAppointmentSelectColumnOpenbookAppointmentsAppointmentAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookAppointmentsAppointmentAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookAppointmentsAppointmentSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
  predicate: IntComparisonExp;
};

export type OpenbookAppointmentsAppointmentParticipantsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsBoolExp>;
  predicate: IntComparisonExp;
};

export type OpenbookCommunitiesCollaborationtoolAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
  predicate: IntComparisonExp;
};

export type OpenbookCommunitiesCommunityAggregateBoolExpBool_And = {
  arguments: OpenbookCommunitiesCommunitySelectColumnOpenbookCommunitiesCommunityAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookCommunitiesCommunityAggregateBoolExpBool_Or = {
  arguments: OpenbookCommunitiesCommunitySelectColumnOpenbookCommunitiesCommunityAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookCommunitiesCommunityAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
  predicate: IntComparisonExp;
};

export type OpenbookCommunitiesCommunitymembershipAggregateBoolExpBool_And = {
  arguments: OpenbookCommunitiesCommunitymembershipSelectColumnOpenbookCommunitiesCommunitymembershipAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookCommunitiesCommunitymembershipBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookCommunitiesCommunitymembershipAggregateBoolExpBool_Or = {
  arguments: OpenbookCommunitiesCommunitymembershipSelectColumnOpenbookCommunitiesCommunitymembershipAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookCommunitiesCommunitymembershipBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookCommunitiesCommunitymembershipAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookCommunitiesCommunitymembershipBoolExp>;
  predicate: IntComparisonExp;
};

export type OpenbookCommunitiesExternallinkAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookCommunitiesExternallinkSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookCommunitiesExternallinkBoolExp>;
  predicate: IntComparisonExp;
};

export type OpenbookCommunitiesOnboardingstepAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookCommunitiesOnboardingstepBoolExp>;
  predicate: IntComparisonExp;
};

export type OpenbookCommunitiesTaskAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookCommunitiesTaskSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
  predicate: IntComparisonExp;
};

export type OpenbookCommunitiesTaskSkillsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookCommunitiesTaskSkillsBoolExp>;
  predicate: IntComparisonExp;
};

export type OpenbookPostsPostAggregateBoolExpBool_And = {
  arguments: OpenbookPostsPostSelectColumnOpenbookPostsPostAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookPostsPostBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookPostsPostAggregateBoolExpBool_Or = {
  arguments: OpenbookPostsPostSelectColumnOpenbookPostsPostAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookPostsPostBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookPostsPostAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookPostsPostBoolExp>;
  predicate: IntComparisonExp;
};

export type OpenbookPostsPostcommentAggregateBoolExpBool_And = {
  arguments: OpenbookPostsPostcommentSelectColumnOpenbookPostsPostcommentAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookPostsPostcommentAggregateBoolExpBool_Or = {
  arguments: OpenbookPostsPostcommentSelectColumnOpenbookPostsPostcommentAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
  predicate: BooleanComparisonExp;
};

export type OpenbookPostsPostcommentAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
  predicate: IntComparisonExp;
};

export type Query_Root = {
  /** fetch data from the table: "django_content_type" */
  djangoContentType: Array<DjangoContentType>;
  /** fetch aggregated fields from the table: "django_content_type" */
  djangoContentTypeAggregate: DjangoContentTypeAggregate;
  /** fetch data from the table: "django_content_type" using primary key columns */
  djangoContentTypeByPk?: Maybe<DjangoContentType>;
  /** fetch data from the table: "feed_posts_feedpost" */
  feedPostsFeedpost: Array<FeedPostsFeedpost>;
  /** fetch aggregated fields from the table: "feed_posts_feedpost" */
  feedPostsFeedpostAggregate: FeedPostsFeedpostAggregate;
  /** fetch data from the table: "feed_posts_feedpost" using primary key columns */
  feedPostsFeedpostByPk?: Maybe<FeedPostsFeedpost>;
  isUserSuspended: Scalars['Boolean']['output'];
  /** fetch data from the table: "openbook_appointments_appointment" */
  openbookAppointmentsAppointment: Array<OpenbookAppointmentsAppointment>;
  /** fetch aggregated fields from the table: "openbook_appointments_appointment" */
  openbookAppointmentsAppointmentAggregate: OpenbookAppointmentsAppointmentAggregate;
  /** fetch data from the table: "openbook_appointments_appointment" using primary key columns */
  openbookAppointmentsAppointmentByPk?: Maybe<OpenbookAppointmentsAppointment>;
  /** fetch data from the table: "openbook_appointments_appointment_participants" */
  openbookAppointmentsAppointmentParticipants: Array<OpenbookAppointmentsAppointmentParticipants>;
  /** fetch aggregated fields from the table: "openbook_appointments_appointment_participants" */
  openbookAppointmentsAppointmentParticipantsAggregate: OpenbookAppointmentsAppointmentParticipantsAggregate;
  /** fetch data from the table: "openbook_appointments_appointment_participants" using primary key columns */
  openbookAppointmentsAppointmentParticipantsByPk?: Maybe<OpenbookAppointmentsAppointmentParticipants>;
  /** fetch data from the table: "openbook_appointments_locationdetails" */
  openbookAppointmentsLocationdetails: Array<OpenbookAppointmentsLocationdetails>;
  /** fetch aggregated fields from the table: "openbook_appointments_locationdetails" */
  openbookAppointmentsLocationdetailsAggregate: OpenbookAppointmentsLocationdetailsAggregate;
  /** fetch data from the table: "openbook_appointments_locationdetails" using primary key columns */
  openbookAppointmentsLocationdetailsByPk?: Maybe<OpenbookAppointmentsLocationdetails>;
  /** fetch data from the table: "openbook_appointments_videocalllink" */
  openbookAppointmentsVideocalllink: Array<OpenbookAppointmentsVideocalllink>;
  /** fetch aggregated fields from the table: "openbook_appointments_videocalllink" */
  openbookAppointmentsVideocalllinkAggregate: OpenbookAppointmentsVideocalllinkAggregate;
  /** fetch data from the table: "openbook_appointments_videocalllink" using primary key columns */
  openbookAppointmentsVideocalllinkByPk?: Maybe<OpenbookAppointmentsVideocalllink>;
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
  /** fetch data from the table: "openbook_communities_collaborationtool" */
  openbookCommunitiesCollaborationtool: Array<OpenbookCommunitiesCollaborationtool>;
  /** fetch aggregated fields from the table: "openbook_communities_collaborationtool" */
  openbookCommunitiesCollaborationtoolAggregate: OpenbookCommunitiesCollaborationtoolAggregate;
  /** fetch data from the table: "openbook_communities_collaborationtool" using primary key columns */
  openbookCommunitiesCollaborationtoolByPk?: Maybe<OpenbookCommunitiesCollaborationtool>;
  /** fetch data from the table: "openbook_communities_community" */
  openbookCommunitiesCommunity: Array<OpenbookCommunitiesCommunity>;
  /** fetch aggregated fields from the table: "openbook_communities_community" */
  openbookCommunitiesCommunityAggregate: OpenbookCommunitiesCommunityAggregate;
  /** fetch data from the table: "openbook_communities_community" using primary key columns */
  openbookCommunitiesCommunityByPk?: Maybe<OpenbookCommunitiesCommunity>;
  /** fetch data from the table: "openbook_communities_communitymembership" */
  openbookCommunitiesCommunitymembership: Array<OpenbookCommunitiesCommunitymembership>;
  /** fetch aggregated fields from the table: "openbook_communities_communitymembership" */
  openbookCommunitiesCommunitymembershipAggregate: OpenbookCommunitiesCommunitymembershipAggregate;
  /** fetch data from the table: "openbook_communities_communitymembership" using primary key columns */
  openbookCommunitiesCommunitymembershipByPk?: Maybe<OpenbookCommunitiesCommunitymembership>;
  /** fetch data from the table: "openbook_communities_externallink" */
  openbookCommunitiesExternallink: Array<OpenbookCommunitiesExternallink>;
  /** fetch aggregated fields from the table: "openbook_communities_externallink" */
  openbookCommunitiesExternallinkAggregate: OpenbookCommunitiesExternallinkAggregate;
  /** fetch data from the table: "openbook_communities_externallink" using primary key columns */
  openbookCommunitiesExternallinkByPk?: Maybe<OpenbookCommunitiesExternallink>;
  /** fetch data from the table: "openbook_communities_onboardingstep" */
  openbookCommunitiesOnboardingstep: Array<OpenbookCommunitiesOnboardingstep>;
  /** fetch aggregated fields from the table: "openbook_communities_onboardingstep" */
  openbookCommunitiesOnboardingstepAggregate: OpenbookCommunitiesOnboardingstepAggregate;
  /** fetch data from the table: "openbook_communities_onboardingstep" using primary key columns */
  openbookCommunitiesOnboardingstepByPk?: Maybe<OpenbookCommunitiesOnboardingstep>;
  /** fetch data from the table: "openbook_communities_task" */
  openbookCommunitiesTask: Array<OpenbookCommunitiesTask>;
  /** fetch aggregated fields from the table: "openbook_communities_task" */
  openbookCommunitiesTaskAggregate: OpenbookCommunitiesTaskAggregate;
  /** fetch data from the table: "openbook_communities_task" using primary key columns */
  openbookCommunitiesTaskByPk?: Maybe<OpenbookCommunitiesTask>;
  /** fetch data from the table: "openbook_communities_task_skills" */
  openbookCommunitiesTaskSkills: Array<OpenbookCommunitiesTaskSkills>;
  /** fetch aggregated fields from the table: "openbook_communities_task_skills" */
  openbookCommunitiesTaskSkillsAggregate: OpenbookCommunitiesTaskSkillsAggregate;
  /** fetch data from the table: "openbook_communities_task_skills" using primary key columns */
  openbookCommunitiesTaskSkillsByPk?: Maybe<OpenbookCommunitiesTaskSkills>;
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
  /** fetch data from the table: "openbook_terms_skill" */
  openbookTermsSkill: Array<OpenbookTermsSkill>;
  /** fetch aggregated fields from the table: "openbook_terms_skill" */
  openbookTermsSkillAggregate: OpenbookTermsSkillAggregate;
  /** fetch data from the table: "openbook_terms_skill" using primary key columns */
  openbookTermsSkillByPk?: Maybe<OpenbookTermsSkill>;
  report: Report;
  reports: Array<Report>;
  users: Array<User>;
  verifyToken: TokenValidity;
};


export type Query_RootDjangoContentTypeArgs = {
  distinctOn?: InputMaybe<Array<DjangoContentTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DjangoContentTypeOrderBy>>;
  where?: InputMaybe<DjangoContentTypeBoolExp>;
};


export type Query_RootDjangoContentTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<DjangoContentTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DjangoContentTypeOrderBy>>;
  where?: InputMaybe<DjangoContentTypeBoolExp>;
};


export type Query_RootDjangoContentTypeByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootFeedPostsFeedpostArgs = {
  distinctOn?: InputMaybe<Array<FeedPostsFeedpostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FeedPostsFeedpostOrderBy>>;
  where?: InputMaybe<FeedPostsFeedpostBoolExp>;
};


export type Query_RootFeedPostsFeedpostAggregateArgs = {
  distinctOn?: InputMaybe<Array<FeedPostsFeedpostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FeedPostsFeedpostOrderBy>>;
  where?: InputMaybe<FeedPostsFeedpostBoolExp>;
};


export type Query_RootFeedPostsFeedpostByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootIsUserSuspendedArgs = {
  email: Scalars['String']['input'];
};


export type Query_RootOpenbookAppointmentsAppointmentArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
};


export type Query_RootOpenbookAppointmentsAppointmentAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
};


export type Query_RootOpenbookAppointmentsAppointmentByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOpenbookAppointmentsAppointmentParticipantsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsBoolExp>;
};


export type Query_RootOpenbookAppointmentsAppointmentParticipantsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsBoolExp>;
};


export type Query_RootOpenbookAppointmentsAppointmentParticipantsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootOpenbookAppointmentsLocationdetailsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsLocationdetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsLocationdetailsOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsLocationdetailsBoolExp>;
};


export type Query_RootOpenbookAppointmentsLocationdetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsLocationdetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsLocationdetailsOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsLocationdetailsBoolExp>;
};


export type Query_RootOpenbookAppointmentsLocationdetailsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOpenbookAppointmentsVideocalllinkArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsVideocalllinkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsVideocalllinkOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsVideocalllinkBoolExp>;
};


export type Query_RootOpenbookAppointmentsVideocalllinkAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsVideocalllinkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsVideocalllinkOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsVideocalllinkBoolExp>;
};


export type Query_RootOpenbookAppointmentsVideocalllinkByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOpenbookAuthUserArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserBoolExp>;
};


export type Query_RootOpenbookAuthUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserBoolExp>;
};


export type Query_RootOpenbookAuthUserByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOpenbookAuthUserprofileArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserprofileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserprofileOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
};


export type Query_RootOpenbookAuthUserprofileAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserprofileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserprofileOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
};


export type Query_RootOpenbookAuthUserprofileByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOpenbookCommunitiesCollaborationtoolArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
};


export type Query_RootOpenbookCommunitiesCollaborationtoolAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
};


export type Query_RootOpenbookCommunitiesCollaborationtoolByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOpenbookCommunitiesCommunityArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunityOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};


export type Query_RootOpenbookCommunitiesCommunityAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunityOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};


export type Query_RootOpenbookCommunitiesCommunityByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOpenbookCommunitiesCommunitymembershipArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunitymembershipBoolExp>;
};


export type Query_RootOpenbookCommunitiesCommunitymembershipAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunitymembershipBoolExp>;
};


export type Query_RootOpenbookCommunitiesCommunitymembershipByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOpenbookCommunitiesExternallinkArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesExternallinkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesExternallinkOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesExternallinkBoolExp>;
};


export type Query_RootOpenbookCommunitiesExternallinkAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesExternallinkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesExternallinkOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesExternallinkBoolExp>;
};


export type Query_RootOpenbookCommunitiesExternallinkByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOpenbookCommunitiesOnboardingstepArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesOnboardingstepBoolExp>;
};


export type Query_RootOpenbookCommunitiesOnboardingstepAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesOnboardingstepBoolExp>;
};


export type Query_RootOpenbookCommunitiesOnboardingstepByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOpenbookCommunitiesTaskArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
};


export type Query_RootOpenbookCommunitiesTaskAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
};


export type Query_RootOpenbookCommunitiesTaskByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOpenbookCommunitiesTaskSkillsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskSkillsBoolExp>;
};


export type Query_RootOpenbookCommunitiesTaskSkillsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskSkillsBoolExp>;
};


export type Query_RootOpenbookCommunitiesTaskSkillsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootOpenbookPostsPostArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};


export type Query_RootOpenbookPostsPostAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};


export type Query_RootOpenbookPostsPostByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOpenbookPostsPostcommentArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostcommentOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};


export type Query_RootOpenbookPostsPostcommentAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostcommentOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};


export type Query_RootOpenbookPostsPostcommentByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOpenbookTermsSkillArgs = {
  distinctOn?: InputMaybe<Array<OpenbookTermsSkillSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookTermsSkillOrderBy>>;
  where?: InputMaybe<OpenbookTermsSkillBoolExp>;
};


export type Query_RootOpenbookTermsSkillAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookTermsSkillSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookTermsSkillOrderBy>>;
  where?: InputMaybe<OpenbookTermsSkillBoolExp>;
};


export type Query_RootOpenbookTermsSkillByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootReportArgs = {
  id: Scalars['UUID']['input'];
};


export type Query_RootReportsArgs = {
  filter?: InputMaybe<ReportsFilter>;
  pagination?: InputMaybe<Pagination>;
};


export type Query_RootUsersArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float']['input'];
  from: Scalars['geography']['input'];
  use_spheroid?: InputMaybe<Scalars['Boolean']['input']>;
};

export type St_D_Within_Input = {
  distance: Scalars['Float']['input'];
  from: Scalars['geometry']['input'];
};

export type Subscription_Root = {
  /** fetch data from the table: "django_content_type" */
  djangoContentType: Array<DjangoContentType>;
  /** fetch aggregated fields from the table: "django_content_type" */
  djangoContentTypeAggregate: DjangoContentTypeAggregate;
  /** fetch data from the table: "django_content_type" using primary key columns */
  djangoContentTypeByPk?: Maybe<DjangoContentType>;
  /** fetch data from the table in a streaming manner: "django_content_type" */
  djangoContentTypeStream: Array<DjangoContentType>;
  /** fetch data from the table: "feed_posts_feedpost" */
  feedPostsFeedpost: Array<FeedPostsFeedpost>;
  /** fetch aggregated fields from the table: "feed_posts_feedpost" */
  feedPostsFeedpostAggregate: FeedPostsFeedpostAggregate;
  /** fetch data from the table: "feed_posts_feedpost" using primary key columns */
  feedPostsFeedpostByPk?: Maybe<FeedPostsFeedpost>;
  /** fetch data from the table in a streaming manner: "feed_posts_feedpost" */
  feedPostsFeedpostStream: Array<FeedPostsFeedpost>;
  /** fetch data from the table: "openbook_appointments_appointment" */
  openbookAppointmentsAppointment: Array<OpenbookAppointmentsAppointment>;
  /** fetch aggregated fields from the table: "openbook_appointments_appointment" */
  openbookAppointmentsAppointmentAggregate: OpenbookAppointmentsAppointmentAggregate;
  /** fetch data from the table: "openbook_appointments_appointment" using primary key columns */
  openbookAppointmentsAppointmentByPk?: Maybe<OpenbookAppointmentsAppointment>;
  /** fetch data from the table: "openbook_appointments_appointment_participants" */
  openbookAppointmentsAppointmentParticipants: Array<OpenbookAppointmentsAppointmentParticipants>;
  /** fetch aggregated fields from the table: "openbook_appointments_appointment_participants" */
  openbookAppointmentsAppointmentParticipantsAggregate: OpenbookAppointmentsAppointmentParticipantsAggregate;
  /** fetch data from the table: "openbook_appointments_appointment_participants" using primary key columns */
  openbookAppointmentsAppointmentParticipantsByPk?: Maybe<OpenbookAppointmentsAppointmentParticipants>;
  /** fetch data from the table in a streaming manner: "openbook_appointments_appointment_participants" */
  openbookAppointmentsAppointmentParticipantsStream: Array<OpenbookAppointmentsAppointmentParticipants>;
  /** fetch data from the table in a streaming manner: "openbook_appointments_appointment" */
  openbookAppointmentsAppointmentStream: Array<OpenbookAppointmentsAppointment>;
  /** fetch data from the table: "openbook_appointments_locationdetails" */
  openbookAppointmentsLocationdetails: Array<OpenbookAppointmentsLocationdetails>;
  /** fetch aggregated fields from the table: "openbook_appointments_locationdetails" */
  openbookAppointmentsLocationdetailsAggregate: OpenbookAppointmentsLocationdetailsAggregate;
  /** fetch data from the table: "openbook_appointments_locationdetails" using primary key columns */
  openbookAppointmentsLocationdetailsByPk?: Maybe<OpenbookAppointmentsLocationdetails>;
  /** fetch data from the table in a streaming manner: "openbook_appointments_locationdetails" */
  openbookAppointmentsLocationdetailsStream: Array<OpenbookAppointmentsLocationdetails>;
  /** fetch data from the table: "openbook_appointments_videocalllink" */
  openbookAppointmentsVideocalllink: Array<OpenbookAppointmentsVideocalllink>;
  /** fetch aggregated fields from the table: "openbook_appointments_videocalllink" */
  openbookAppointmentsVideocalllinkAggregate: OpenbookAppointmentsVideocalllinkAggregate;
  /** fetch data from the table: "openbook_appointments_videocalllink" using primary key columns */
  openbookAppointmentsVideocalllinkByPk?: Maybe<OpenbookAppointmentsVideocalllink>;
  /** fetch data from the table in a streaming manner: "openbook_appointments_videocalllink" */
  openbookAppointmentsVideocalllinkStream: Array<OpenbookAppointmentsVideocalllink>;
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
  /** fetch data from the table: "openbook_communities_collaborationtool" */
  openbookCommunitiesCollaborationtool: Array<OpenbookCommunitiesCollaborationtool>;
  /** fetch aggregated fields from the table: "openbook_communities_collaborationtool" */
  openbookCommunitiesCollaborationtoolAggregate: OpenbookCommunitiesCollaborationtoolAggregate;
  /** fetch data from the table: "openbook_communities_collaborationtool" using primary key columns */
  openbookCommunitiesCollaborationtoolByPk?: Maybe<OpenbookCommunitiesCollaborationtool>;
  /** fetch data from the table in a streaming manner: "openbook_communities_collaborationtool" */
  openbookCommunitiesCollaborationtoolStream: Array<OpenbookCommunitiesCollaborationtool>;
  /** fetch data from the table: "openbook_communities_community" */
  openbookCommunitiesCommunity: Array<OpenbookCommunitiesCommunity>;
  /** fetch aggregated fields from the table: "openbook_communities_community" */
  openbookCommunitiesCommunityAggregate: OpenbookCommunitiesCommunityAggregate;
  /** fetch data from the table: "openbook_communities_community" using primary key columns */
  openbookCommunitiesCommunityByPk?: Maybe<OpenbookCommunitiesCommunity>;
  /** fetch data from the table in a streaming manner: "openbook_communities_community" */
  openbookCommunitiesCommunityStream: Array<OpenbookCommunitiesCommunity>;
  /** fetch data from the table: "openbook_communities_communitymembership" */
  openbookCommunitiesCommunitymembership: Array<OpenbookCommunitiesCommunitymembership>;
  /** fetch aggregated fields from the table: "openbook_communities_communitymembership" */
  openbookCommunitiesCommunitymembershipAggregate: OpenbookCommunitiesCommunitymembershipAggregate;
  /** fetch data from the table: "openbook_communities_communitymembership" using primary key columns */
  openbookCommunitiesCommunitymembershipByPk?: Maybe<OpenbookCommunitiesCommunitymembership>;
  /** fetch data from the table in a streaming manner: "openbook_communities_communitymembership" */
  openbookCommunitiesCommunitymembershipStream: Array<OpenbookCommunitiesCommunitymembership>;
  /** fetch data from the table: "openbook_communities_externallink" */
  openbookCommunitiesExternallink: Array<OpenbookCommunitiesExternallink>;
  /** fetch aggregated fields from the table: "openbook_communities_externallink" */
  openbookCommunitiesExternallinkAggregate: OpenbookCommunitiesExternallinkAggregate;
  /** fetch data from the table: "openbook_communities_externallink" using primary key columns */
  openbookCommunitiesExternallinkByPk?: Maybe<OpenbookCommunitiesExternallink>;
  /** fetch data from the table in a streaming manner: "openbook_communities_externallink" */
  openbookCommunitiesExternallinkStream: Array<OpenbookCommunitiesExternallink>;
  /** fetch data from the table: "openbook_communities_onboardingstep" */
  openbookCommunitiesOnboardingstep: Array<OpenbookCommunitiesOnboardingstep>;
  /** fetch aggregated fields from the table: "openbook_communities_onboardingstep" */
  openbookCommunitiesOnboardingstepAggregate: OpenbookCommunitiesOnboardingstepAggregate;
  /** fetch data from the table: "openbook_communities_onboardingstep" using primary key columns */
  openbookCommunitiesOnboardingstepByPk?: Maybe<OpenbookCommunitiesOnboardingstep>;
  /** fetch data from the table in a streaming manner: "openbook_communities_onboardingstep" */
  openbookCommunitiesOnboardingstepStream: Array<OpenbookCommunitiesOnboardingstep>;
  /** fetch data from the table: "openbook_communities_task" */
  openbookCommunitiesTask: Array<OpenbookCommunitiesTask>;
  /** fetch aggregated fields from the table: "openbook_communities_task" */
  openbookCommunitiesTaskAggregate: OpenbookCommunitiesTaskAggregate;
  /** fetch data from the table: "openbook_communities_task" using primary key columns */
  openbookCommunitiesTaskByPk?: Maybe<OpenbookCommunitiesTask>;
  /** fetch data from the table: "openbook_communities_task_skills" */
  openbookCommunitiesTaskSkills: Array<OpenbookCommunitiesTaskSkills>;
  /** fetch aggregated fields from the table: "openbook_communities_task_skills" */
  openbookCommunitiesTaskSkillsAggregate: OpenbookCommunitiesTaskSkillsAggregate;
  /** fetch data from the table: "openbook_communities_task_skills" using primary key columns */
  openbookCommunitiesTaskSkillsByPk?: Maybe<OpenbookCommunitiesTaskSkills>;
  /** fetch data from the table in a streaming manner: "openbook_communities_task_skills" */
  openbookCommunitiesTaskSkillsStream: Array<OpenbookCommunitiesTaskSkills>;
  /** fetch data from the table in a streaming manner: "openbook_communities_task" */
  openbookCommunitiesTaskStream: Array<OpenbookCommunitiesTask>;
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
  /** fetch data from the table: "openbook_terms_skill" */
  openbookTermsSkill: Array<OpenbookTermsSkill>;
  /** fetch aggregated fields from the table: "openbook_terms_skill" */
  openbookTermsSkillAggregate: OpenbookTermsSkillAggregate;
  /** fetch data from the table: "openbook_terms_skill" using primary key columns */
  openbookTermsSkillByPk?: Maybe<OpenbookTermsSkill>;
  /** fetch data from the table in a streaming manner: "openbook_terms_skill" */
  openbookTermsSkillStream: Array<OpenbookTermsSkill>;
};


export type Subscription_RootDjangoContentTypeArgs = {
  distinctOn?: InputMaybe<Array<DjangoContentTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DjangoContentTypeOrderBy>>;
  where?: InputMaybe<DjangoContentTypeBoolExp>;
};


export type Subscription_RootDjangoContentTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<DjangoContentTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DjangoContentTypeOrderBy>>;
  where?: InputMaybe<DjangoContentTypeBoolExp>;
};


export type Subscription_RootDjangoContentTypeByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDjangoContentTypeStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DjangoContentTypeStreamCursorInput>>;
  where?: InputMaybe<DjangoContentTypeBoolExp>;
};


export type Subscription_RootFeedPostsFeedpostArgs = {
  distinctOn?: InputMaybe<Array<FeedPostsFeedpostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FeedPostsFeedpostOrderBy>>;
  where?: InputMaybe<FeedPostsFeedpostBoolExp>;
};


export type Subscription_RootFeedPostsFeedpostAggregateArgs = {
  distinctOn?: InputMaybe<Array<FeedPostsFeedpostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FeedPostsFeedpostOrderBy>>;
  where?: InputMaybe<FeedPostsFeedpostBoolExp>;
};


export type Subscription_RootFeedPostsFeedpostByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFeedPostsFeedpostStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FeedPostsFeedpostStreamCursorInput>>;
  where?: InputMaybe<FeedPostsFeedpostBoolExp>;
};


export type Subscription_RootOpenbookAppointmentsAppointmentArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
};


export type Subscription_RootOpenbookAppointmentsAppointmentAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
};


export type Subscription_RootOpenbookAppointmentsAppointmentByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookAppointmentsAppointmentParticipantsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsBoolExp>;
};


export type Subscription_RootOpenbookAppointmentsAppointmentParticipantsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsAppointmentParticipantsOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsBoolExp>;
};


export type Subscription_RootOpenbookAppointmentsAppointmentParticipantsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootOpenbookAppointmentsAppointmentParticipantsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookAppointmentsAppointmentParticipantsStreamCursorInput>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentParticipantsBoolExp>;
};


export type Subscription_RootOpenbookAppointmentsAppointmentStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookAppointmentsAppointmentStreamCursorInput>>;
  where?: InputMaybe<OpenbookAppointmentsAppointmentBoolExp>;
};


export type Subscription_RootOpenbookAppointmentsLocationdetailsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsLocationdetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsLocationdetailsOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsLocationdetailsBoolExp>;
};


export type Subscription_RootOpenbookAppointmentsLocationdetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsLocationdetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsLocationdetailsOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsLocationdetailsBoolExp>;
};


export type Subscription_RootOpenbookAppointmentsLocationdetailsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookAppointmentsLocationdetailsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookAppointmentsLocationdetailsStreamCursorInput>>;
  where?: InputMaybe<OpenbookAppointmentsLocationdetailsBoolExp>;
};


export type Subscription_RootOpenbookAppointmentsVideocalllinkArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsVideocalllinkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsVideocalllinkOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsVideocalllinkBoolExp>;
};


export type Subscription_RootOpenbookAppointmentsVideocalllinkAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAppointmentsVideocalllinkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAppointmentsVideocalllinkOrderBy>>;
  where?: InputMaybe<OpenbookAppointmentsVideocalllinkBoolExp>;
};


export type Subscription_RootOpenbookAppointmentsVideocalllinkByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookAppointmentsVideocalllinkStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookAppointmentsVideocalllinkStreamCursorInput>>;
  where?: InputMaybe<OpenbookAppointmentsVideocalllinkBoolExp>;
};


export type Subscription_RootOpenbookAuthUserArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserBoolExp>;
};


export type Subscription_RootOpenbookAuthUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserBoolExp>;
};


export type Subscription_RootOpenbookAuthUserByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookAuthUserStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookAuthUserStreamCursorInput>>;
  where?: InputMaybe<OpenbookAuthUserBoolExp>;
};


export type Subscription_RootOpenbookAuthUserprofileArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserprofileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserprofileOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
};


export type Subscription_RootOpenbookAuthUserprofileAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookAuthUserprofileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookAuthUserprofileOrderBy>>;
  where?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
};


export type Subscription_RootOpenbookAuthUserprofileByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookAuthUserprofileStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookAuthUserprofileStreamCursorInput>>;
  where?: InputMaybe<OpenbookAuthUserprofileBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesCollaborationtoolArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesCollaborationtoolAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCollaborationtoolOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesCollaborationtoolByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookCommunitiesCollaborationtoolStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookCommunitiesCollaborationtoolStreamCursorInput>>;
  where?: InputMaybe<OpenbookCommunitiesCollaborationtoolBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesCommunityArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunityOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesCommunityAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunityOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesCommunityByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookCommunitiesCommunityStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookCommunitiesCommunityStreamCursorInput>>;
  where?: InputMaybe<OpenbookCommunitiesCommunityBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesCommunitymembershipArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunitymembershipBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesCommunitymembershipAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesCommunitymembershipOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesCommunitymembershipBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesCommunitymembershipByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookCommunitiesCommunitymembershipStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookCommunitiesCommunitymembershipStreamCursorInput>>;
  where?: InputMaybe<OpenbookCommunitiesCommunitymembershipBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesExternallinkArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesExternallinkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesExternallinkOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesExternallinkBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesExternallinkAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesExternallinkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesExternallinkOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesExternallinkBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesExternallinkByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookCommunitiesExternallinkStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookCommunitiesExternallinkStreamCursorInput>>;
  where?: InputMaybe<OpenbookCommunitiesExternallinkBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesOnboardingstepArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesOnboardingstepBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesOnboardingstepAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesOnboardingstepOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesOnboardingstepBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesOnboardingstepByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookCommunitiesOnboardingstepStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookCommunitiesOnboardingstepStreamCursorInput>>;
  where?: InputMaybe<OpenbookCommunitiesOnboardingstepBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesTaskArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesTaskAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesTaskByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookCommunitiesTaskSkillsArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskSkillsBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesTaskSkillsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookCommunitiesTaskSkillsOrderBy>>;
  where?: InputMaybe<OpenbookCommunitiesTaskSkillsBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesTaskSkillsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootOpenbookCommunitiesTaskSkillsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookCommunitiesTaskSkillsStreamCursorInput>>;
  where?: InputMaybe<OpenbookCommunitiesTaskSkillsBoolExp>;
};


export type Subscription_RootOpenbookCommunitiesTaskStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookCommunitiesTaskStreamCursorInput>>;
  where?: InputMaybe<OpenbookCommunitiesTaskBoolExp>;
};


export type Subscription_RootOpenbookPostsPostArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};


export type Subscription_RootOpenbookPostsPostAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};


export type Subscription_RootOpenbookPostsPostByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookPostsPostStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookPostsPostStreamCursorInput>>;
  where?: InputMaybe<OpenbookPostsPostBoolExp>;
};


export type Subscription_RootOpenbookPostsPostcommentArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostcommentOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};


export type Subscription_RootOpenbookPostsPostcommentAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookPostsPostcommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookPostsPostcommentOrderBy>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};


export type Subscription_RootOpenbookPostsPostcommentByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookPostsPostcommentStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookPostsPostcommentStreamCursorInput>>;
  where?: InputMaybe<OpenbookPostsPostcommentBoolExp>;
};


export type Subscription_RootOpenbookTermsSkillArgs = {
  distinctOn?: InputMaybe<Array<OpenbookTermsSkillSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookTermsSkillOrderBy>>;
  where?: InputMaybe<OpenbookTermsSkillBoolExp>;
};


export type Subscription_RootOpenbookTermsSkillAggregateArgs = {
  distinctOn?: InputMaybe<Array<OpenbookTermsSkillSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OpenbookTermsSkillOrderBy>>;
  where?: InputMaybe<OpenbookTermsSkillBoolExp>;
};


export type Subscription_RootOpenbookTermsSkillByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOpenbookTermsSkillStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OpenbookTermsSkillStreamCursorInput>>;
  where?: InputMaybe<OpenbookTermsSkillBoolExp>;
};
