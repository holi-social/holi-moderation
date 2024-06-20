import { MigrationInterface, QueryRunner } from "typeorm";

export class RecordUserSuspensions1718127895408 implements MigrationInterface {
    name = 'RecordUserSuspensions1718127895408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_suspension" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(255) NOT NULL, "expiresAt" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_9a45fb4e38f59a77a7b56f300e5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bdde77f75b5cc3725061393b9d" ON "user_suspension" ("expiresAt") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_bdde77f75b5cc3725061393b9d"`);
        await queryRunner.query(`DROP TABLE "user_suspension"`);
    }

}
