import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Report } from './reports/entities/report';
import { ReportEvent } from './reportLogs/entities/reportEvent';
import { User } from './auth/entities/user';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: `${process.env.MODERATION_DB_HOST}`,
  username: `${process.env.MODERATION_DB_USER}`,
  password: `${process.env.MODERATION_DB_PASSWORD}`,
  database: `${process.env.MODERATION_DB_NAME}`,
  migrations: [`${__dirname}/../migrations/*.{ts,js}`],
  autoLoadEntities: true,
};

const cliConfig: TypeOrmModuleOptions = {
  ...config,
  autoLoadEntities: false,
  entities: [Report, ReportEvent, User],
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(cliConfig as DataSourceOptions);
