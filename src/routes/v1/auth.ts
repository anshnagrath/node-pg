import { AuthSchema } from './../../lib/validations/schemas';
import { Router } from "express";
import { AuthController } from "../../controllers";
import { ValidateRequestBody } from "../../lib/validations/validations";

export default class AuthRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {


        // LOGIN (SESSION CREATION)
        this.router.post('/login',ValidateRequestBody(AuthSchema), AuthController.login)

    }
}
