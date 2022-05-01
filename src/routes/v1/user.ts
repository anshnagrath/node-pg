import { Router } from "express";
import { UserController } from "../../controllers";

export default class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {


        // CREAT USER
        this.router.post('/', UserController.createUser);

    }
}
