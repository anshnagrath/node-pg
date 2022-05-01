import { PgPool } from './pgPool';
import { IServer } from '../lib/interfaces';


export class PgConnect {
    static async checkConnection(server: IServer) {
        PgPool.pool.connect(function (err: any) {
            if (err) throw new Error(err);
            console.log('Connected to pg');
            server.isPgConnected = true ;

        });
    }
}
