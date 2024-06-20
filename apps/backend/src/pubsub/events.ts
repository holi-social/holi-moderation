import { ContentType } from 'src/reports/entities/contentType';

export type EventType =
  | 'UserSuspended'
  | 'UserSuspensionExpired'
  | 'ContentDeleted';

export type Event<
  TEventType extends EventType,
  TData extends object = object,
> = {
  data: TData;
  eventType: TEventType;
  version: string;
};

export type UserSuspendedEvent = Event<
  'UserSuspended',
  {
    email: string;
    reason?: string;
  }
>;

export type UserSuspensionExpiredEvent = Event<
  'UserSuspensionExpired',
  {
    email: string;
  }
>;

export type ContentDeletedEvent = Event<
  'ContentDeleted',
  {
    contentType: ContentType;
    contentId: string;
    userId: string;
    reason?: string;
  }
>;
