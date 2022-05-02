import * as dotenv from "dotenv";
dotenv.config();
import path from 'path';

export const CONFIG = {
    NODE_ENV: process.env.NODE_ENV,
    API_BASEURL: process.env.API_BASEURL,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_NO_SYNC: process.env.DB_NO_SYNC,
    DB_NO_LOGS: process.env.DB_NO_LOGS,
    BCRYPT_SALT_ROUNDS : process.env.BCRYPT_SALT_ROUNDS,

    // DB Tables
    PG_TABLES: {
        POST: 'public.posts',
        USER: 'public.users',
        COMMENT : 'public.comments'
     
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'SDKFJ9#R3IO90U3@#9DSFIN',
        option: {
            expiresIn: '12h',
        },
        cookie: {
            httpOnly: true,
            sameSite: true,
            signed: true,
            secure: true
        }
    },
    cookie: {
        secret: "@#$@#4knshdf82#9382yrknjef9@#$"
    },
    uploadsFolderPath: path.resolve(__dirname, '../../uploads'),

}
