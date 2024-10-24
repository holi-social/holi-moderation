import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1728986815730 implements MigrationInterface {
    name = 'Migrations1728986815730'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."report_reason_enum" AS ENUM('FALSE_IDENTITY', 'PRIVACY_VIOLATION', 'MISINFORMATION', 'SPAM', 'HARASSMENT', 'HATE_SPEECH', 'PORNOGRAPHY', 'ILLEGAL_ACTIVITY', 'OTHER')`);
        await queryRunner.query(`ALTER TABLE "report" ADD "reason" "public"."report_reason_enum" NOT NULL DEFAULT 'OTHER'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "reason"`);
        await queryRunner.query(`DROP TYPE "public"."report_reason_enum"`);
    }

}
