import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
import * as postgres from 'postgres';
import * as schema from './schema';

@Injectable()
export class ModerationDb {
  public readonly mainConnection: postgres.Sql;
  private _migrationConnection: postgres.Sql;

  public readonly db: PostgresJsDatabase<typeof schema>;
  private _migrationClient: PostgresJsDatabase;

  constructor(private readonly config: ConfigService) {
    this.mainConnection = postgres(this.connectionParams);
    this.db = drizzle(this.mainConnection, { schema });
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
      host: this.config.get('APP_DB_HOST'),
      user: this.config.get('APP_DB_USER'),
      password: this.config.get('APP_DB_PASSWORD'),
      database: 'moderation',
    };
  }
}
