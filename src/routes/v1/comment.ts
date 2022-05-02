
import { Router } from "express";
import { CommentController } from "../../controllers";
import { Auth } from '../../middlewares';
import { upload } from '../../helper/fileUpload'
import { ValidateRequestBody, ValidateRequestParams } from "../../lib/validations/validations";
import { NewCommentSchema ,GetCommentsByPostIdSchema , UpdateCommentSchema ,DeleteCommentsSchema } from "../../lib/validations/schemas";

export default class CommentRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {

        
        // Create Comment
        this.router.post('/',Auth(),upload.array('attachments', 5), ValidateRequestBody(NewCommentSchema) ,CommentController.createComment);

        // Update Comment
        this.router.put('/update',Auth(),upload.array('attachments', 5),ValidateRequestBody(UpdateCommentSchema),CommentController.updateComment);

        // Delete Comment
        this.router.delete('/delete',Auth(),ValidateRequestParams(DeleteCommentsSchema),CommentController.deleteComment);

        // Get Comment
        this.router.get('/',Auth(),ValidateRequestParams(GetCommentsByPostIdSchema),CommentController.getCommentByPost);

    }
}
