/**
 * @todo How can we include this from backend/a shared package?
 *       maybe workspace dependencies + bundler?
 */

export type EventType =
  | "UserSuspended"
  | "UserSuspensionExpired"
  | "ContentDeleted";

export type PubsubEvent<TEvent extends EventType, TData extends object> = {
  subscription: string;
  message: {
    messageId: string;
    publishTime: string;
  };
  attributes: {
    eventVersion: number;
    eventType: TEvent;
  };
  data: TData;
};

export type UserSuspendedData = {
  email: string;
  reason?: string;
};

export type UserSuspensionExpiredData = {
  email: string;
};

export type ContentDeletedData = {
  contentType:
    | "POST"
    | "COMMENT"
    | "CHAT_MESSAGE"
    | "SPACE"
    | "SPACE_TASK"
    | "SPACE_APPOINTMENT"
    | "SPACE_LINKHUB_TOOL";
  contentId: string;
  userId: string;
  reason?: string;
};

export type UserSuspendedEvent = PubsubEvent<
  "UserSuspended",
  UserSuspendedData
>;

export type UserSuspensionExpiredEvent = PubsubEvent<
  "UserSuspensionExpired",
  UserSuspensionExpiredData
>;

export type ContentDeletedEvent = PubsubEvent<
  "ContentDeleted",
  ContentDeletedData
>;
