import { Injectable, Inject } from "@nestjs/common";

import { Db } from "mongodb";
import { User } from "../schemas";

@Injectable()
export class UsersService {
    constructor(@Inject('DATABASE_CONNECTION') private db: Db) {}

    async findByName(userName: string): Promise<User[]> {
        // @ts-ignore
        return this.db.collection('users')
            .find({ name: userName })
            .toArray();
    }
}
