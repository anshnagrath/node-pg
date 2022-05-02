import { Client } from 'pg';
import * as dotenv from "dotenv";
dotenv.config();

export class PgClient {
    public static globalClient = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT!)

    });

    public static dbClient = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: parseInt(process.env.DB_PORT!)
  
    })
}

