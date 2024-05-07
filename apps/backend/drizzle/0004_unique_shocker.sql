DO $$ BEGIN
 CREATE TYPE "status" AS ENUM('OPEN', 'IN_PROGRESS', 'ACTION_TAKEN', 'REJECTED');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "reports" ADD COLUMN "status" "status" DEFAULT 'OPEN' NOT NULL;