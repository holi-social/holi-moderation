import { Injectable, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
import * as postgres from 'postgres';
import * as reportsSchema from '../reports/dbSchema';
import * as authSchema from '../auth/dbSchema';

const schema = { ...reportsSchema, ...authSchema };
const connectDrizzle = (connection: postgres.Sql) =>
  drizzle(connection, { schema });

@Injectable()
export class ModerationDb {
  public readonly mainConnection: postgres.Sql;
  private _migrationConnection: postgres.Sql;

  public readonly db: PostgresJsDatabase<typeof schema>;
  private _migrationClient: PostgresJsDatabase;

  constructor(private readonly config: ConfigService) {
    this.mainConnection = postgres(this.connectionParams);
    this.db = connectDrizzle(this.mainConnection);
  }

  public get migrationClient(): PostgresJsDatabase {
    this._migrationConnection = postgres({ ...this.connectionParams, max: 1 });
    this._migrationClient = drizzle(this._migrationConnection);

    return this._migrationClient;
  }

  public async closeMigrationConnection(): Promise<void> {
    return this._migrationConnection.end();
  }

  private get connectionParams() {
    return {
      host: this.config.get('MODERATION_DB_HOST'),
      user: this.config.get('MODERATION_DB_USER'),
      password: this.config.get('MODERATION_DB_PASSWORD'),
      database: this.config.get('MODERATION_DB_NAME'),
    };
  }
}

@Module({
  imports: [ConfigModule],
  providers: [ModerationDb],
  exports: [ModerationDb],
})
export class DbModule {}
