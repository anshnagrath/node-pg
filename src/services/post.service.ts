import { IPost } from './../lib/interfaces';
import  { PostDao } from '../lib/dao/';


export class PostService {
    // Insert Post
    static async insert(payload : IPost , userId : string) {
        return await PostDao.insert(payload , userId);
    }


        // Insert Post
     static async getPostByUserId(userId : string ) {
            return await PostDao.getUserPost( userId);
    }

    static async updatePost(payload: IPost , userId : string ) {
        return await PostDao.updatePost( payload,userId);
    }

    static async deletePost(uuid : string ) {
        return await PostDao.deletePost( uuid);
    }
    

}