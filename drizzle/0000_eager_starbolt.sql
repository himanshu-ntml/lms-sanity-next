DO $$ BEGIN
 CREATE TYPE "role" AS ENUM('user', 'admin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "course" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"slug" varchar(100),
	CONSTRAINT "course_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profile" (
	"id" uuid PRIMARY KEY NOT NULL,
	"full_name" text,
	"email" varchar(100),
	"sarmaaya_id" varchar,
	"role" "role" DEFAULT 'user',
	CONSTRAINT "profile_email_unique" UNIQUE("email"),
	CONSTRAINT "profile_sarmaaya_id_unique" UNIQUE("sarmaaya_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profile_course" (
	"id" serial PRIMARY KEY NOT NULL,
	"profile_id" uuid NOT NULL,
	"course_id" serial NOT NULL,
	"is_active" boolean DEFAULT false
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profile" ADD CONSTRAINT "profile_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profile_course" ADD CONSTRAINT "profile_course_profile_id_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profile_course" ADD CONSTRAINT "profile_course_course_id_course_id_fk" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
