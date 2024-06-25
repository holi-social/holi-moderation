import { MigrationInterface, QueryRunner } from 'typeorm';

export class LogUserSuspended1719338931577 implements MigrationInterface {
  name = 'LogUserSuspended1719338931577';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TYPE "public"."report_event_eventname_enum" RENAME TO "report_event_eventname_enum_old"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."report_event_eventname_enum" AS ENUM('REPORT_CREATED', 'STATUS_CHANGED', 'USER_SUSPENDED')`,
    );
    await queryRunner.query(
      `ALTER TABLE "report_event" ALTER COLUMN "eventName" TYPE "public"."report_event_eventname_enum" USING "eventName"::"text"::"public"."report_event_eventname_enum"`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."report_event_eventname_enum_old"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."report_event_eventname_enum_old" AS ENUM('REPORT_CREATED', 'STATUS_CHANGED')`,
    );
    await queryRunner.query(
      `ALTER TABLE "report_event" ALTER COLUMN "eventName" TYPE "public"."report_event_eventname_enum_old" USING "eventName"::"text"::"public"."report_event_eventname_enum_old"`,
    );
    await queryRunner.query(`DROP TYPE "public"."report_event_eventname_enum"`);
    await queryRunner.query(
      `ALTER TYPE "public"."report_event_eventname_enum_old" RENAME TO "report_event_eventname_enum"`,
    );
  }
}
