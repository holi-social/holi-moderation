import { PostDeletedPayload, UserBannedPayload } from './payloads';

export type EventType = 'UserBanned' | 'PostDeleted';

export type Event<TEventType extends EventType, TData extends object> = {
  data: TData;
  eventType: TEventType;
  version: string;
};

export type UserBannedEvent = Event<'UserBanned', UserBannedPayload>;
export type PostDeletedEvent = Event<'PostDeleted', PostDeletedPayload>;
