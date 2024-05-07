import { relations } from 'drizzle-orm'
import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'

import { profile } from './profile'

export const course = pgTable('course', {
  id: serial('id').primaryKey(),
  title: text('title'),
  slug: varchar('slug', { length: 100 }).unique(),
})

export const courseRelations = relations(course, ({ many }) => ({
  profiles: many(profile),
}))
