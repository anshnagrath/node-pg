import express from 'express';
import jwt from 'jsonwebtoken';
import { CONFIG } from '../config/environment';
import { UserService } from '../services';



// Auth for all users
export function Auth() {
    return async function (req: express.Request, res: express.Response, next: express.NextFunction) {
        try {


            if (!req.headers.authorization) {
                return res.status(401).send("Invalid Token");
            }

            const decoded: any = jwt.verify(req.headers.authorization, CONFIG.jwt.secret);

            let user = await UserService.getByUuid(decoded.uuid);
        
            if (!user )  return res.status(401).send("Invalid User");

            req['user'] = user;
            
            next();
           

        } catch (error) {
            next(error);
        }
    }
}
