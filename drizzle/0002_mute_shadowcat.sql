ALTER TABLE "profile" DROP CONSTRAINT "profile_id_unique";--> statement-breakpoint
ALTER TABLE "profile" ADD PRIMARY KEY ("id");