import { pgEnum, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

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

export const report = pgTable('reports', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  contentType: contentType('content_type').notNull(),
  contentId: uuid('content_id').notNull(),
  details: text('details').notNull(),
  reporterId: uuid('reporter_id').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
});
