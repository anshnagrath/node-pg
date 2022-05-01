import { Router } from "express";

import AuthRouter from "./auth";
import UserRouter from "./user";
import PostRouter from './post';
import CommentRouter from './comment';



export default class V1Router {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {

        this.router.use('/auth', new AuthRouter().router);
        this.router.use('/user', new UserRouter().router);
        this.router.use('/post', new PostRouter().router);
        this.router.use('/comment', new CommentRouter().router);


    }
}
