import { AxiosError } from 'axios';
import * as Express from 'express';
import { IServer } from '../lib/interfaces';

export default class ErrorHandler {
    static init(server: IServer) {
        server.app.use((error: any, req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
            // Handling Axios error
            if (error.isAxiosError) {
                let axiosError: AxiosError = error as AxiosError;
                console.log(axiosError.response?.data, 'Error with Axios call');
                let status = axiosError.response?.status
                return res.status(status || 400).send(axiosError.response?.data);
            }

            console.log(error, 'In error handler');

       

            // JWT error
            if (error.name == 'JsonWebTokenError') {
                return res.status(401).send("Incorrect token");
            }

            if (error.name == 'TokenExpiredError') {
                return res.status(401).send("Token expired");
            }


            res.status(error.status || 500).send(error.message || "Internal server error");
        });

    }

}