import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/postgres-js';
import { Pool } from 'pg';
import * as schema from './schema';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

export const db = drizzle(pool, { schema });

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useValue: db,
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}
