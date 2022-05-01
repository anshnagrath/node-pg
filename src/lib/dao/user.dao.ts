import { PgPool } from "../../dbConfig/pgPool";
import { UserQueries } from "../../queries/users.query";
import { IUser } from "../interfaces/IUser";



export  class UserDao {

    // INSERT USER
    static async insertUser(payload: IUser ) : Promise<IUser > {
    
        const { query, values } = UserQueries.insert(payload);
        const dbClient = await PgPool.pool.connect();

        try {
            const execQuery = await dbClient.query(query, values);
            dbClient.release();
            if (execQuery && execQuery.rows) return execQuery.rows[0];
            else return payload;
        }
        catch (e) {
            dbClient.release();
            throw e;
        }

    }

    // GET USER
    static async getByEmail( email: string )  {
    
        const { query, values } = UserQueries.getByEmail(email);
        const dbClient = await PgPool.pool.connect();

        try {
            const execQuery = await dbClient.query(query, values);
            dbClient.release();
            if (execQuery && execQuery.rows) return execQuery.rows[0];
            else return { };
        }
        catch (e) {
            dbClient.release();
            throw e;
        }

    }


       // GET USER
       static async getByUuid( uuid: string )  {
    
        const { query, values } = UserQueries.getByUuid(uuid);
        const dbClient = await PgPool.pool.connect();

        try {
            const execQuery = await dbClient.query(query, values);
            dbClient.release();
            if (execQuery && execQuery.rows) return execQuery.rows[0];
            else return { };
        }
        catch (e) {
            dbClient.release();
            throw e;
        }

    }





}
