import { relations } from 'drizzle-orm'
import {
  pgEnum,
  pgSchema,
  pgTable,
  text,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core'

import { course } from './course'

const authSchema = pgSchema('auth')
const users = authSchema.table('users', {
  id: uuid('id').primaryKey(),
})

export const roleEnum = pgEnum('role', ['user', 'admin']);

export const profile = pgTable('profile', {
  id: uuid('id')
    .references(() => users.id)
    .notNull()
    .primaryKey(),
  fullName: text('full_name'),
  email: varchar('email', { length: 100 }).unique(),
  sarmaayaId: varchar('sarmaaya_id').unique(),
  role: roleEnum('role').default('user')
})

export const profileRelations = relations(profile, ({ many }) => ({
  courses: many(course),
}))
