
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






}
