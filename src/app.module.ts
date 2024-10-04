import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import * as schema from './db/schema';
import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';

@Module({
  imports: [
    DrizzlePostgresModule.register({
      tag: 'DB_DEV',
      postgres: {
        url: process.env.POSTGRES_URL,
        config: {
          host: process.env.POSTGRES_HOST,
          user: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          port: Number(process.env.POSTGRES_PORT),
          database: process.env.POSTGRES_DB,
          max: Number(process.env.POSTGRES_MAX_CONNECTIONS) || 10,
          idle_timeout: Number(process.env.IDLE_TIMEOUT) || 30,
        },
      },
      config: { schema: { ...schema } },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
