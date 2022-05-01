import { Router } from "express";
import { PostController } from "../../controllers";

export default class CommentRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {


        // POST
        this.router.post('/', PostController.createPost);

    }
}
