// Optional: To reduce data complexity

import { CONFIG } from "../config/environment";
import { IPost } from "../lib/interfaces";

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


 



   

}
