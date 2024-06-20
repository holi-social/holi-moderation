import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1717485344234 implements MigrationInterface {
  name = 'Migrations1717485344234';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."report_event_eventname_enum" AS ENUM('REPORT_CREATED', 'STATUS_CHANGED')`,
    );
    await queryRunner.query(
      `CREATE TABLE "report_event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "eventName" "public"."report_event_eventname_enum" NOT NULL, "eventPayload" json NOT NULL, "occurredAt" TIMESTAMP NOT NULL DEFAULT now(), "reportId" uuid, CONSTRAINT "PK_247b406f3221ad7b2c4b4f09933" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."report_contenttype_enum" AS ENUM('POST', 'COMMENT', 'CHAT_MESSAGE', 'SPACE', 'SPACE_TASK', 'SPACE_APPOINTMENT', 'SPACE_LINKHUB_TOOL', 'USER')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."report_status_enum" AS ENUM('OPEN', 'IN_PROGRESS', 'ACTION_TAKEN', 'REJECTED')`,
    );
    await queryRunner.query(
      `CREATE TABLE "report" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "reporterId" uuid NOT NULL, "contentType" "public"."report_contenttype_enum" NOT NULL, "contentId" uuid NOT NULL, "details" text NOT NULL, "status" "public"."report_status_enum" NOT NULL DEFAULT 'OPEN', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_99e4d0bea58cba73c57f935a546" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'moderator')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(255) NOT NULL, "passwordHash" character varying(255) NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT 'moderator', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "report_event" ADD CONSTRAINT "FK_2ecdbc5a2e2a02de01bdab9fded" FOREIGN KEY ("reportId") REFERENCES "report"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "report_event" DROP CONSTRAINT "FK_2ecdbc5a2e2a02de01bdab9fded"`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    await queryRunner.query(`DROP TABLE "report"`);
    await queryRunner.query(`DROP TYPE "public"."report_status_enum"`);
    await queryRunner.query(`DROP TYPE "public"."report_contenttype_enum"`);
    await queryRunner.query(`DROP TABLE "report_event"`);
    await queryRunner.query(`DROP TYPE "public"."report_event_eventname_enum"`);
  }
}
