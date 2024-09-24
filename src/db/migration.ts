import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const main = async () => {
  const migrationClient = postgres(process.env.POSTGRES_URL, { max: 1 });
  await migrate(drizzle(migrationClient, { logger: true }), {
    migrationsFolder: './drizzle',
  }).finally(async () => {
    await migrationClient.end();
    console.log('connection closed');
  });

  console.log('migrated');
};

main();
