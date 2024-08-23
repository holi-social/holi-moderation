import { MigrationInterface, QueryRunner } from "typeorm";

export class ContentTypeFeedPost1724315978842 implements MigrationInterface {
    name = 'ContentTypeFeedPost1724315978842'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."report_contenttype_enum" RENAME TO "report_contenttype_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."report_contenttype_enum" AS ENUM('POST', 'FEED_POST', 'COMMENT', 'CHAT_MESSAGE', 'SPACE', 'SPACE_TASK', 'SPACE_APPOINTMENT', 'SPACE_LINKHUB_TOOL', 'USER')`);
        await queryRunner.query(`ALTER TABLE "report" ALTER COLUMN "contentType" TYPE "public"."report_contenttype_enum" USING "contentType"::"text"::"public"."report_contenttype_enum"`);
        await queryRunner.query(`DROP TYPE "public"."report_contenttype_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."report_contenttype_enum_old" AS ENUM('POST', 'COMMENT', 'CHAT_MESSAGE', 'SPACE', 'SPACE_TASK', 'SPACE_APPOINTMENT', 'SPACE_LINKHUB_TOOL', 'USER')`);
        await queryRunner.query(`ALTER TABLE "report" ALTER COLUMN "contentType" TYPE "public"."report_contenttype_enum_old" USING "contentType"::"text"::"public"."report_contenttype_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."report_contenttype_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."report_contenttype_enum_old" RENAME TO "report_contenttype_enum"`);
    }

}
