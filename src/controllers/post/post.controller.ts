
import express from 'express';
import { IPost } from '../../lib/interfaces';
import {  CustomResponse } from '../../utils';
import {  PostService } from '../../services/index';


export class PostController { 

    static async createPost(req: any, res: express.Response, next: express.NextFunction) {

        let postData : IPost = req.body;
        let userID  = req.user.id;
        // Save Post
        let newEntry = await PostService.insert(postData,userID);

        if (newEntry && !newEntry.uuid) return res.send(new CustomResponse({ ...postData , error : true }, "Error Creating User"));

        return res.send(new CustomResponse({ ...postData , id : newEntry.uuid , error : false }, "Success Email Sent"));


     }


}