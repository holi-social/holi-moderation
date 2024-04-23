import { pgEnum, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const contentType = pgEnum('content_type', [
  'POST',
  'COMMENT',
  'CHAT_MESSAGE',
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
