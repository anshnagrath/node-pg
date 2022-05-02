// Optional: To reduce data complexity

import { CONFIG } from "../config/environment";
import { IPost } from "../lib/interfaces";
import moment from "moment";

export class PostQueries {

    // INSERT 

    public static insert(payload: IPost , user_id : string) {
       
        let query = `INSERT INTO ${CONFIG.PG_TABLES.POST} 
        (
            user_id,
            is_active,
            title,
            attachments
          
        ) 
        VALUES  (  
            $1,$2,$3,$4::text[]
          
        ) RETURNING *`;

        return { query, values: [user_id, true, payload.title,  payload.attachments ] }

    }

    public static  getByPostUserId( user_id : string) {
       
        let query = `SELECT a.uuid as id, b.uuid as user_id , a.title , a.attachments ,a.is_active FROM ( SELECT  * from ${CONFIG.PG_TABLES.POST}   WHERE user_id = $1 and is_active = $2 ) as a join  ${CONFIG.PG_TABLES.USER}  as b on a.user_id = b.id  `;
      
        return { query, values: [user_id,true] }

    }


    public static  getByUuid( uuid : string) {
       
        let query = ` SELECT  * from ${CONFIG.PG_TABLES.POST}   WHERE uuid = $1 and is_active = $2 `;
      
        return { query, values: [uuid,true] }

    }



    public static updateByUuid(payload: IPost , uuid : string) {

    
        let query = `UPDATE ${CONFIG.PG_TABLES.POST} SET  title = $1 , attachments = $2 ,updated_at = $3  WHERE uuid = $4 and is_active = $5`;

        return { query, values: [payload.title,payload.attachments, moment(), uuid,true ] }

    }

    // soft delete
    public static delete(uuid : string) {
       
        let query = `UPDATE ${CONFIG.PG_TABLES.POST} SET  is_active = $1 ,updated_at = $2 WHERE uuid = $3 and is_active = $4 Returning uuid`;

        return { query, values: [false,moment(), uuid,true ] }
    }
 



   

}
