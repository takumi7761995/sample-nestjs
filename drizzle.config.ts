import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import env from 'env-var';

dotenv.config();

export default defineConfig({
  schema: './src/db/schema.ts', // テーブルスキーマ記述ファイル
  out: './migration', // DDL出力先ディレクトリ
  dialect: 'postgresql',
  // 実際のDBへのマイグレーションで使用
  dbCredentials: {
    ssl: false,
    host: 'localhost',
    user: env.get('POSTGRES_USER').required().asString(),
    password: env.get('POSTGRES_PASSWORD').required().asString(),
    port: env.get('POSTGRES_PORT').required().asInt(),
    database: env.get('POSTGRES_DB').required().asString(),
  },
});
