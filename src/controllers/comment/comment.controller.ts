import { IComment } from './../../lib/interfaces/IComment';

import express from 'express';
import { CommentService } from '../../services';
import { CustomResponse } from '../../utils';
import { comparePassword, generateJwtTokenByUUID } from '../../utils/functions';

export class CommentController {

    static async createComment(req: any, res: express.Response, next: express.NextFunction) {

        let commentData : IComment = req.body;
        let userID  = req.user.id;
       

        if( req.files && req.files.length > 0 )  commentData.attachments = req.files.map( ( o : Express.Multer.File ) => o.destination);
        else  commentData.attachments = [];

        let newEntry = await CommentService.insert(commentData,userID);

        if (newEntry && !newEntry.id) return res.send(new CustomResponse({ ...newEntry , error : true }, "Error Creating Comment"));

        return res.send(new CustomResponse({ ...newEntry  , error : false }, "Success"));


     }

     static async getCommentByPost(req: any, res: express.Response, next: express.NextFunction) {

        let userID  = req.user.id;
        let postID = req.query.postId;

        let allComments = await CommentService.getCommentByPostId(postID,userID);
    
        if (allComments && !allComments.length) return res.send(new CustomResponse({  error : false}, "No Comments Found"));

        return res.send(new CustomResponse({ result : allComments ,  error : false }, "Success"));

     }


     static async updateComment(req: any, res: express.Response, next: express.NextFunction) {

        let commentData : IComment = req.body;
        let userID  = req.user.id;
        // Save Post
        let newEntry = await CommentService.updateComment(commentData , userID);

        if (newEntry && !('uuid' in newEntry)) return res.send(new CustomResponse({ ...commentData , error : true }, "Error Updating Comment"));

        return res.send(new CustomResponse({ ...newEntry, error : false }, "Updated"));



     }


     static async deleteComment(req: any, res: express.Response, next: express.NextFunction) {

        let uuid  = req.query.id;
        // Save Post
        let deleted = await CommentService.deleteComment(uuid);

        if (!deleted) return res.send(new CustomResponse({  error : true }, "Error Deleting Post"));

        return res.send(new CustomResponse({  error : false }, "ok"));

     }
 
    
}
