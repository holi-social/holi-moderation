import { registerEnumType } from '@nestjs/graphql';
import { ReportStatus } from '../reports/entities/reportStatus';

export enum ReportLogEvent {
  REPORT_CREATED = 'REPORT_CREATED',
  STATUS_CHANGED = 'STATUS_CHANGED',
  USER_SUSPENDED = 'USER_SUSPENDED',
}

registerEnumType(ReportLogEvent, { name: 'ReportLogEvent' });

export type EmptyPayload = Record<string, never>;

export type ReportEventPayload = StatusChangedEventPayload | ReportCreatedEventPayload | UserSuspendedEventPayload;

export type ReportCreatedEventPayload = EmptyPayload;
export type StatusChangedEventPayload = {
  oldStatus: ReportStatus;
  newStatus: ReportStatus;
};
export type UserSuspendedEventPayload = {
  userEmail: string;
  duration?: number;
}