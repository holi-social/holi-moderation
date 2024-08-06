import { registerAs } from '@nestjs/config'
import type { TypeOrmModuleOptions } from '@nestjs/typeorm'
import type { DataSourceOptions } from 'typeorm'
import { DataSource } from 'typeorm'

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.MODERATION_DB_HOST,
  username: process.env.MODERATION_DB_USER,
  password: process.env.MODERATION_DB_PASSWORD,
  database: process.env.MODERATION_DB_NAME,
  port: parseInt(process.env.MODERATION_DB_PORT),
  migrations: [`${__dirname}/../migrations/*.{ts,js}`],
  autoLoadEntities: true,
  migrationsRun: true,
  logging: ['error', 'schema'],
}

const cliConfig: TypeOrmModuleOptions = {
  ...config,
  autoLoadEntities: false,
  entities: ['src/**/entities/*.ts'],
  /* relate to public interface of your local moderation db
   * to be able to use typeorm cli commands conveniently */
  host: '127.0.0.1',
}

export default registerAs('typeorm', () => config)
/* typeorm cli magic uses this named export */
export const dataSource = new DataSource(cliConfig as DataSourceOptions)
