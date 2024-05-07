import { relations } from 'drizzle-orm'
import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  uuid,
} from 'drizzle-orm/pg-core'

import { course } from './course'
import { profile } from './profile'

export const profileToCourse = pgTable(
  'profile_course',
  {
    profileId: uuid('profile_id')
      .notNull()
      .references(() => profile.id, { onDelete: 'cascade' }),
    courseId: integer('course_id')
      .notNull()
      .references(() => course.id, { onDelete: 'cascade' }),
    isActive: boolean('is_active').default(false),
  },
  (t) => ({ pk: primaryKey({ columns: [t.courseId, t.profileId] }) }),
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
