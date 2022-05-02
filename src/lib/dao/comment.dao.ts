import { PgPool } from "../../dbConfig/pgPool";
import { CommentQueries ,PostQueries } from "../../queries";
import { IComment } from "../interfaces";



export  class CommentDao {

    // INSERT USER
    static async insert(payload: IComment , userId : string ) : Promise<IComment> {

        const { query : uuidQuery , values : uuidValues } = PostQueries.getByUuid(payload.post_id);
        
        const dbClient = await PgPool.pool.connect();

        try
         {
            const uuidQueryOut = await dbClient.query(uuidQuery, uuidValues); 
           
            if(uuidQueryOut.rows && uuidQueryOut.rows[0] && uuidQueryOut.rows[0]['id']){
                payload.post_id = uuidQueryOut.rows[0]['id'];
                const { query, values } = CommentQueries.insert(payload,userId);
                const execQuery = await dbClient.query(query, values);
                dbClient.release();
                if (execQuery && execQuery.rows) return execQuery.rows[0];
                else return payload;
            } else return payload;
            
          
        }
        catch (e) {
            dbClient.release();
            throw e;
        }

    }

   
    static async getByPostId( postId:string, userId : string ) : Promise<IComment[]> {

        const { query : uuidQuery , values : uuidValues } = PostQueries.getByUuid(postId);
        
        
        const dbClient = await PgPool.pool.connect();

        try {
           
            const uuidQueryOut = await dbClient.query(uuidQuery, uuidValues); 
            if(uuidQueryOut.rows && uuidQueryOut.rows[0] && uuidQueryOut.rows[0]['id']){
             const { query, values } = CommentQueries.getByPostId( uuidQueryOut.rows[0]['id'],userId);
             const execQuery = await dbClient.query(query, values);
             dbClient.release();
             if (execQuery && execQuery.rows) return execQuery.rows;
             else return [];
            } else return [];
        }
        catch (e) {
            dbClient.release();
            throw e;
        }

    }

    static async updateComment ( payload: IComment , userId : string ) : Promise<IComment | { } > {
        
        const { query, values } = CommentQueries.updateByUuid(payload,userId);
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

    static async deleteComment ( uuid : string ) : Promise<Boolean> {
    
        const { query, values } = CommentQueries.delete(uuid);
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
