import { PgPool } from "../../dbConfig/pgPool";
import { UserQueries } from "../../queries/users.query";
import { IUser , ICreateResponse } from "../interfaces/";



export  class UserDao {

    // INSERT USER
    static async insertUser(payload: IUser ) : Promise<ICreateResponse> {
    
        const { query, values } = UserQueries.insert(payload);
        const dbClient = await PgPool.pool.connect();

        try {
            const execQuery = await dbClient.query(query, values);
            return { error : false , id : execQuery.rows[0]['uuid'] , message : 'ok' };
        }
        catch ( e ) {
            const message = (e as Error ).message
            switch(message){
                    case `duplicate key value violates unique constraint "users_email_key"` :
                        return { error : true , id : "" , message : 'Duplicate Email Used' }

                    case `duplicate key value violates unique constraint "users_mobile_key"` :
                            return { error : true , id : "" , message : 'Duplicate Mobile Used' }    
            }
            return  { error : true , id : "" , message };
        }finally{
            dbClient.release();
        }

    }

    // GET USER
    static async getByEmail( email: string )  {
    
        const { query, values } = UserQueries.getByEmail(email);
        const dbClient = await PgPool.pool.connect();

        try {
            const execQuery = await dbClient.query(query, values);
            if (execQuery && execQuery.rows) return execQuery.rows[0];
            else return { };
        }
        catch (e) {
            throw e;
        }finally{
            dbClient.release();
        }

    }


       // GET USER
       static async getByUuid( uuid: string )  {
    
        const { query, values } = UserQueries.getByUuid(uuid);
        const dbClient = await PgPool.pool.connect();

        try {
            const execQuery = await dbClient.query(query, values);
            if (execQuery && execQuery.rows) return execQuery.rows[0];
            else return { };
        }
        catch (e) {
            throw e;
        }finally{
            dbClient.release();
        }

    }





}
