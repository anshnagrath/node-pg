import { IUser } from './../lib/interfaces/IUser';
import { generateHash } from '../utils/functions';
import  {UserDao} from '../lib/dao/';


export class UserService {
    // Insert User
    static async insert(payload : IUser) {
        payload.password = generateHash(payload.password);
        return await UserDao.insertUser(payload);
    }

    static async  getByEmail( email : string) {

        return await UserDao.getByEmail(email);
    }


    static async  getByUuid( email : string) {

        return await UserDao.getByUuid(email);
    }

}