// Optional: To reduce data complexity

import { CONFIG } from "../config/environment";
import moment from 'moment';
import { IUser } from "../lib/interfaces";

export class UserQueries {

    // INSERT 
    public static insert(payload: IUser) {
       
        let query = `INSERT INTO ${CONFIG.PG_TABLES.USER} 
        (
            name,
            email,
            mobile,
            is_active,
            password
          
        ) 
        VALUES  (  
            $1,$2,$3,$4,$5
          
        ) RETURNING uuid as id , name , email , mobile `;

        return { query, values: [payload.name, payload.email, payload.mobile, true , payload.password ] }

    }


    public static getByEmail(email: string) {
       
        let query = `SELECT  uuid as id , name,  email, mobile , created_at , updated_at ,password  FROM ${CONFIG.PG_TABLES.USER} WHERE email = $1 and is_active = $2`;

        return { query, values: [email, true] }

    }


    public static getByUuid(uuid: string) {
       
        let query = `SELECT  *  FROM ${CONFIG.PG_TABLES.USER} WHERE uuid = $1 and is_active = $2`;

        return { query, values: [uuid, true] }

    }



   

}
