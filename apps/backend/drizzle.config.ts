import type { Config } from 'drizzle-kit';

export default {
  schema: ['./src/reports/dbSchema.ts', './src/auth/dbSchema.ts'],
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: process.env.MODERATION_DB_HOST,
    user: process.env.MODERATION_DB_USER,
    password: process.env.MODERATION_DB_PASSWORD,
    database: process.env.MODERATION_DB_NAME ?? 'moderation',
  },
} satisfies Config;
