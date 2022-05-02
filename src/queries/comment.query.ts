import  moment  from 'moment';
import { CONFIG } from "../config/environment";
import { IComment } from "../lib/interfaces";

export class CommentQueries {

    // INSERT 

    public static insert(payload: IComment , user_id : string ) {
    
       
        let query = `INSERT INTO ${CONFIG.PG_TABLES.COMMENT} 
        (
            post_id,
            title,
            user_id,
            attachments,
            is_active
          
        ) 
        VALUES  (  
            $1,$2,$3,$4::text[],$5
          
        ) RETURNING uuid as id`;

        return { query, values: [payload.post_id, payload.title,user_id,payload.attachments,true] }

    }

    public static  getByCommentId( uuid : string) {
       
        let query = `SELECT * FROM ${CONFIG.PG_TABLES.COMMENT} WHERE uuid = $1 AND is_active = $2`;

        return { query, values: [uuid,true] }

    }


    public static  getByPostId( post_id : string ,user_id : string) {
       
        let query = `SELECT * FROM ${CONFIG.PG_TABLES.COMMENT} WHERE post_id = $1 AND user_id = $2 AND is_active = $3`;

        return { query, values: [post_id,user_id,true] }

    }


    public static updateByUuid(payload: IComment , userid : string) {


        let query = `UPDATE ${CONFIG.PG_TABLES.COMMENT} SET  title = $1 , attachments =$2 , updated_at = $3 WHERE uuid = $4 and is_active = $5`;

        return { query, values: [payload.title,payload.attachments, moment(), payload.id,true ] }

    }

    // soft delete
    public static delete(uuid : string) {
       
        let query = `UPDATE ${CONFIG.PG_TABLES.COMMENT} SET  is_active = $1 , updated_at = $2 WHERE uuid = $3 AND is_active = $4`;

        return { query, values: [false, moment(), uuid,true ] }
    }
 



   

}
