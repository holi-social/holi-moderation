import { Command, CommandRunner } from 'nest-commander';
import { ModerationDb } from '.';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

@Command({ name: 'migrate', description: 'run db migrations' })
export class MigrateCommand extends CommandRunner {
  constructor(private readonly db: ModerationDb) {
    super();
  }

  async run(): Promise<void> {
    await migrate(this.db.migrationClient, {
      migrationsFolder: 'drizzle',
    });
    return this.db.closeMigrationConnection();
  }
}
