import express from 'express';
import { Middleware } from './config/middleware';
import Routes from './routes/index';
import { PgConnect } from "./dbConfig/pgConnect";
import ErrorHandler from './helper/errorHandler';

export class Server {
    public app: express.Application;
    isPgConnected: boolean;
    constructor() {
        this.app = express();
        this.isPgConnected = false;
        // this.httpserver = http.createServer(this.app)
        // this.io =

        // Db connection (to be removed)
        // DB.connect(this);

        // New DB connection
        // DB.connect(this);
        PgConnect.checkConnection(this);
        // Initializing app middlewares
        Middleware.init(this);

        // Intializing Routes
        Routes.init(this);

        // Error Handler
        ErrorHandler.init(this);
    }
}
