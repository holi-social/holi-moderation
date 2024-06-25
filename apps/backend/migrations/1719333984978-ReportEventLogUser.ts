import { MigrationInterface, QueryRunner } from "typeorm";

export class ReportEventLogUser1719333984978 implements MigrationInterface {
    name = 'ReportEventLogUser1719333984978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report_event" ADD "actorId" uuid`);
        await queryRunner.query(`ALTER TABLE "report_event" ADD CONSTRAINT "FK_adefa245041a4856d05cf68aebf" FOREIGN KEY ("actorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report_event" DROP CONSTRAINT "FK_adefa245041a4856d05cf68aebf"`);
        await queryRunner.query(`ALTER TABLE "report_event" DROP COLUMN "actorId"`);
    }

}
