import { Pool } from 'pg';
import * as dotenv from "dotenv";
dotenv.config();

export class PgPool {
    public static pool = new Pool({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        max: 20,
        database: process.env.DB_NAME,
        port: parseInt(process.env.DB_PORT!),
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 10000
      


    })
}

