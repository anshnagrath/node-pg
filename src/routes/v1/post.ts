import { Router } from "express";
import { PostController } from "../../controllers";
import { Auth } from '../../middlewares';
import { upload } from '../../helper/fileUpload'
import { ValidateRequestParams , ValidateRequestBody } from "../../lib/validations/validations";
import { NewPostSchema ,UpdatePostSchema , DeletePostSchema} from "../../lib/validations/schemas";
export default class PostRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {


        // Create Post
        this.router.post('/',Auth(),upload.array('attachments', 5),ValidateRequestBody(NewPostSchema),PostController.createPost);

        // Update Post
        this.router.put('/update',Auth(),upload.array('attachments', 5),ValidateRequestBody(UpdatePostSchema),PostController.updatePost);

        // Delete Post
        this.router.delete('/delete',Auth(),ValidateRequestParams(DeletePostSchema),PostController.deletePost);

        // Get Post
        this.router.get('/',Auth(),PostController.getUserPost);


    }
}
