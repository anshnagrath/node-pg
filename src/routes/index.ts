import express from 'express';
import { IServer } from "../lib/interfaces";
import V1Router from './v1';


export default class Index {

    static init(server: IServer): void {
        const router: express.Router = express.Router();
        // Health check
        server.app.use('/api/v1/healthCheck', async (req, res, next) => {
            //add further things to check (e.g. connection to dababase)
            let healthcheck = {
                dbConnection: server.isPgConnected,
                uptime: process.uptime(),
                message: 'OK',
                time: new Date().toLocaleString()
            };
            try {
                res.send(healthcheck);
            } catch (e) {
                healthcheck.message = e as any;
                res.status(503).send(healthcheck);
            }
        });



        server.app.use("/api/v1", new V1Router().router)

    }
}
