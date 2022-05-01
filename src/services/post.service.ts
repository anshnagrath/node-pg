import { IPost } from './../lib/interfaces';
import  { PostDao } from '../lib/dao/';


export class PostService {
    // Insert Post
    static async insert(payload : IPost , userId : string) {
        return await PostDao.insert(payload , userId);
    }


}