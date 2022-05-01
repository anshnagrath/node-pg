import { IUser } from './../../lib/interfaces/IUser';
import express from 'express';
import { UserService } from '../../services';
import { CustomResponse } from '../../utils';
import { comparePassword, generateJwtTokenByUUID } from '../../utils/functions';

export class AuthController {

    // Login
    static async login(
        req: any,
        res: express.Response,
        next: express.NextFunction
    ) {
        try {
            let user = await UserService.getByEmail(req.body.email);
            if (!user) {
                return res.status(404).send(new CustomResponse({}, "Incorrect Email", 404));
            }

            if (!comparePassword(user.password , req.body.password)) {
                return res.status(400).send(new CustomResponse({}, "Incorrect Password", 400));
            }

            let token = generateJwtTokenByUUID(user.uuid!);

            res.send(new CustomResponse({ token: token }, "Login"));
        } catch (error) {
            next(error);
        }
    }

 
    
}
