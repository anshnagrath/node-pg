
import express from 'express';
import { IPost } from '../../lib/interfaces';
import {  CustomResponse } from '../../utils';
import {  PostService } from '../../services/index';


export class PostController { 

    static async createPost(req: any, res: express.Response, next: express.NextFunction) {

        let postData : IPost = req.body;
        let userID  = req.user.id;
        // Save Post
        if( req.files && req.files.length > 0 )  postData.attachments = req.files.map( ( o : Express.Multer.File ) => o.destination);
        let newEntry = await PostService.insert(postData,userID);

        if (newEntry && !newEntry.uuid) return res.send(new CustomResponse({ ...postData , error : true }, "Error Creating Post"));

        return res.send(new CustomResponse({ ...postData , id : newEntry.uuid , error : false }, "Success"));


     }

     static async getUserPost(req: any, res: express.Response, next: express.NextFunction) {

        let userID  = req.user.id;
        // Save Post
        let allPost = await PostService.getPostByUserId(userID);

        if (allPost && !allPost.length) return res.send(new CustomResponse({  error : true }, "Error Getting Post"));

        return res.send(new CustomResponse({ result : allPost ,  error : false }, "Success"));


     }

     static async updatePost(req: any, res: express.Response, next: express.NextFunction) {

        let postData : IPost = req.body;
        let postID  = req.body.id;
        // Save Post
        let newEntry = await PostService.updatePost(postData , postID);

        if (newEntry && !('uuid' in newEntry)) return res.send(new CustomResponse({ ...postData , error : true }, "Error Updating Post"));

        return res.send(new CustomResponse({ ...newEntry, error : false }, "Updated"));



     }


     static async deletePost(req: any, res: express.Response, next: express.NextFunction) {

        let uuid  = req.params.id;
        // Save Post
        let deleted = await PostService.deletePost(uuid);

        if (!deleted) return res.send(new CustomResponse({  error : true }, "Error Deleting Post"));

        return res.send(new CustomResponse({  error : false }, "ok"));

     }


}