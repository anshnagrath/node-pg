import { Router } from "express";
import { PostController } from "../../controllers";
import { Auth } from '../../middlewares';
import { upload } from '../../helper/fileUpload'
export default class PostRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {


        // Create Post
        this.router.post('/',Auth(),upload.array('attachments', 12),PostController.createPost);

    }
}
