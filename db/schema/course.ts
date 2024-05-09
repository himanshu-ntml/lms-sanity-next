import { relations } from 'drizzle-orm'
import { pgTable, serial, text, uuid, varchar } from 'drizzle-orm/pg-core'

import { profile } from './profile'

export type NewCourse = typeof course.$inferInsert;
export type Course = typeof course.$inferSelect;

export const course = pgTable('course', {
  id: uuid('id').primaryKey(),
  title: text('title'),
  slug: varchar('slug', { length: 100 }).unique(),
})

export const courseRelations = relations(course, ({ many }) => ({
  profiles: many(profile),
}))
