import bodyParser from "body-parser";
import { IServer } from "../lib/interfaces";
import cors from 'cors';
import morgan from "morgan";
import { CONFIG } from "./environment";
import clientSession from 'client-sessions';
import helmet from "helmet";
import express from "express"

export class Middleware {
    static init(server: IServer) {
        // Body-parser
        server.app.use(bodyParser.urlencoded({ extended: true }));
        server.app.use(bodyParser.json());

        // Cors
        server.app.use(cors());

        // Logging
        server.app.use(morgan('dev'));

        // Cookie
        server.app.use(clientSession({ secret: CONFIG.cookie.secret }));

        // Helmet
        server.app.use(helmet());

        // Static Server
        server.app.use('/public', express.static(CONFIG.uploadsFolderPath));

    }
}
