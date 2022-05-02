import { IComment } from './../lib/interfaces';
import  { CommentDao } from '../lib/dao/';


export class CommentService {
    // Insert Post
    static async insert(payload : IComment , userId : string) {
        return await CommentDao.insert(payload , userId);
    }

     // Get Post By Id
     static async getCommentByPostId(postId:string ,userId : string ) {
            return await CommentDao.getByPostId(postId, userId);
    }

    // Update Post By Id
    static async updateComment(payload: IComment , userId : string ) {
        return await CommentDao.updateComment( payload,userId);
    }

    static async deleteComment(uuid : string ) {
        return await CommentDao.deleteComment( uuid);
    }
    

}