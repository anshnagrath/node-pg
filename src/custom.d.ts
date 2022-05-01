import { ICompany } from "./lib/interfaces";
import { Admin } from "./models";
import { IUser } from "./models/User.model";
declare global {
    namespace Express {
        export interface Request {
            user: User | any,
            admin: Admin,
            company : ICompany,
            cognitoAttributes : any,
            role : any,
            apikey: any
        }
    }

    namespace Socket {
        export interface request {
            user: any
        }
    }
}