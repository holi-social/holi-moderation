import { relations } from 'drizzle-orm';
import {
  json,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

/** @todo extract this directly from the GraphQL enum */
export const contentType = pgEnum('content_type', [
  'POST',
  'COMMENT',
  'CHAT_MESSAGE',
  'SPACE',
  'SPACE_TASK',
  'SPACE_APPOINTMENT',
  'SPACE_LINKHUB_TOOL',
  'USER',
]);

export const reportStatus = pgEnum('status', [
  'OPEN',
  'IN_PROGRESS',
  'ACTION_TAKEN',
  'REJECTED',
]);

export const reports = pgTable('reports', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  contentType: contentType('content_type').notNull(),
  contentId: uuid('content_id').notNull(),
  details: text('details').notNull(),
  reporterId: uuid('reporter_id').notNull(),
  status: reportStatus('status').notNull().default('OPEN'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
});

export const reportsRelations = relations(reports, ({ many }) => ({
  events: many(reportEvents),
}));

export const reportEventName = pgEnum('report_event_name', ['STATUS_CHANGED']);

export const reportEvents = pgTable('report_events', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  reportId: uuid('report_id')
    .notNull()
    .references(() => reports.id),
  eventName: reportEventName('event_name').notNull(),
  eventPayload: json('event_payload').notNull(),
  occurredAt: timestamp('occurred_at').notNull().defaultNow(),
});

export const reportEventsRelations = relations(reportEvents, ({ one }) => ({
  report: one(reports, {
    fields: [reportEvents.reportId],
    references: [reports.id],
  }),
}));
