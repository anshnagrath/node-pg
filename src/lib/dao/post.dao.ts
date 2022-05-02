
import { PgPool } from "../../dbConfig/pgPool";
import { PostQueries } from "../../queries/post.queries";
import { IPost } from "../interfaces";



export  class PostDao {

    // INSERT USER
    static async insert(payload: IPost , userId : string ) : Promise<IPost > {
    
        const { query, values } = PostQueries.insert(payload,userId);
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

   
    static async getUserPost(userId : string ) : Promise<IPost[]> {
    
        const { query, values } = PostQueries.getByPostUserId(userId);
        const dbClient = await PgPool.pool.connect();

        try {
            const execQuery = await dbClient.query(query, values);
            dbClient.release();
            if (execQuery && execQuery.rows) return execQuery.rows;
            else return [];
        }
        catch (e) {
            dbClient.release();
            throw e;
        }

    }

    static async updatePost ( payload: IPost , userId : string ) : Promise<IPost | { } > {
    
        const { query, values } = PostQueries.updateByUuid(payload,userId);
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

    static async deletePost ( uuid : string ) : Promise<Boolean> {
    
        const { query, values } = PostQueries.delete(uuid);
        const dbClient = await PgPool.pool.connect();

        try {
            const execQuery = await dbClient.query(query, values);
            dbClient.release();
            if (execQuery && execQuery.rows) return true;
            else return false;
        }
        catch (e) {
            dbClient.release();
            throw e;
        }

    }






}
