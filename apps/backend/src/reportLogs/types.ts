import { ReportStatus } from '../reports/schema';

export enum ReportLogEvent {
  REPORT_CREATED = 'REPORT_CREATED',
  STATUS_CHANGED = 'STATUS_CHANGED',
}

export type EmptyPayload = Record<string, never>;

export type ReportEventPayload = StatusChangedEventPayload | EmptyPayload;

export type ReportCreatedEventPayload = EmptyPayload;
export type StatusChangedEventPayload = {
  oldStatus: ReportStatus;
  newStatus: ReportStatus;
};
