import { Router } from "express";
import { UserController } from "../../controllers";
import { ValidateRequest } from "../../lib/validations/validations";
import { NewUserSchema } from "./../../lib/validations/schemas"

export default class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {


        // CREAT USER
        this.router.post('/',ValidateRequest(NewUserSchema) , UserController.createUser);

    }
}
