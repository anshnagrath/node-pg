import { Router } from "express";
import { AuthController } from "../../controllers";

export default class AuthRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {


        // POST
        this.router.post('/login', AuthController.login)

    }
}
