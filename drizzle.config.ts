import { loadEnvConfig } from '@next/env'
import type { Config } from 'drizzle-kit'

const dev = process.env.NODE_ENV !== 'production'
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error })

export default {
  schema: './db/schema',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: process.env.SUPABASE_DB_HOST!,
    user: process.env.SUPABASE_DB_USER,
    password: process.env.SUPABASE_DB_PWD,
    database: process.env.SUPABASE_DB_NAME!,
  },
} satisfies Config
