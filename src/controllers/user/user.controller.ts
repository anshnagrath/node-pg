
import express from 'express';
import { IUser } from '../../lib/interfaces';
import {  CustomResponse } from '../../utils';
import {  UserService } from '../../services/index';


export class UserController { 

    static async createUser(req: any, res: express.Response, next: express.NextFunction) {

        let userData: IUser = req.body;
        // Save User
        let newEntry = await UserService.insert(userData);

        if (newEntry && !newEntry.uuid) return res.send(new CustomResponse({ ...userData , error : true }, "Error Creating User"));

        return res.send(new CustomResponse({ ...userData , id : newEntry.uuid , error : false }, "Success Email Sent"));


     }


}