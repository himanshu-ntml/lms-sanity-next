import { relations } from 'drizzle-orm'
import {
  boolean,
  pgTable,
  serial,
  unique,
  uuid,
} from 'drizzle-orm/pg-core'

import { course } from './course'
import { profile } from './profile'

export const profileToCourse = pgTable(
  'profile_course',
  {
    id: serial('id').primaryKey(),
    profileId: uuid('profile_id')
      .notNull()
      .references(() => profile.id, { onDelete: 'cascade' }),
    courseId: serial('course_id')
      .notNull()
      .references(() => course.id, { onDelete: 'cascade' }),
    isActive: boolean('is_active').default(false),
  },
  (t) => ({ uk: unique().on(t.courseId, t.profileId) }),
)

export const profileToCourseRelations = relations(
  profileToCourse,
  ({ one }) => ({
    profile: one(profile, {
      fields: [profileToCourse.profileId],
      references: [profile.id],
    }),
    course: one(course, {
      fields: [profileToCourse.courseId],
      references: [course.id],
    }),
  }),
)
