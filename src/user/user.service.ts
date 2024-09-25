import { Inject, Injectable } from '@nestjs/common';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { users } from '../db/schema';
import { eq, sql } from 'drizzle-orm';
import * as schema from '../db/schema';

@Injectable()
export class UserService {
  constructor(
    @Inject('DB_DEV')
    private drizzleInstance: PostgresJsDatabase<typeof schema>,
  ) {}

  async getUserById(id: number) {
    const randomNum = sql<number>`round((random() * (1 - 10000))::numeric, 0) + 10000`;
    return await this.drizzleInstance
      .select({ id: users.id, num: randomNum })
      .from(users)
      .where(eq(users.id, id))
      .execute();
  }
}
