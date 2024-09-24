import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
// import * as schema from './db/schema';
// import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';
import { DatabaseModule } from './db/database.module';
@Module({
  imports: [
    DatabaseModule,
    // DrizzlePostgresModule.register({
    //   tag: 'DB_DEV',
    //   postgres: {
    //     url: process.env.POSTGRES_URL,
    //     config: {
    //       host: process.env.POSTGRES_HOST,
    //       // port: 5435,
    //       user: process.env.POSTGRES_USER,
    //       password: process.env.POSTGRES_PASSWORD,
    //       database: process.env.POSTGRES_DB,
    //     },
    //   },
    //   config: { schema: { ...schema } },
    // }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
