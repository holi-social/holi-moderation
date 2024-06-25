import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserSuspensionExpiryOptional1719241957691
  implements MigrationInterface
{
  name = 'UserSuspensionExpiryOptional1719241957691';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user_suspension" ADD "reason" text`);
    await queryRunner.query(
      `ALTER TABLE "user_suspension" ALTER COLUMN "expiresAt" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_suspension" ALTER COLUMN "expiresAt" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_suspension" DROP COLUMN "reason"`,
    );
  }
}
