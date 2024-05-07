import { relations } from 'drizzle-orm'
import {
  integer,
  pgSchema,
  pgTable,
  serial,
  text,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core'

import { course } from './course'

const authSchema = pgSchema('auth')
const users = authSchema.table('users', {
  id: uuid('id').primaryKey(),
})

export const profile = pgTable('profile', {
  id: uuid('id')
    .references(() => users.id)
    .notNull()
    .unique(),
  // id: serial('id').primaryKey(),
  fullName: text('full_name'),
  email: varchar('email', { length: 100 }).unique(),
  sarmaayaId: integer('sarmaaya_id').unique(),
})

export const profileRelations = relations(profile, ({ many }) => ({
  courses: many(course),
}))
