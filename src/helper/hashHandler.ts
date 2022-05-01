import bcrypt from 'bcrypt';
import { CONFIG } from "../config/environment";

export default class HashHandler {
    static createHash(text: string) {
        const SALT_ROUNDS = parseInt(CONFIG.BCRYPT_SALT_ROUNDS!);
        const SALT = bcrypt.genSaltSync(SALT_ROUNDS);
        const password = bcrypt.hashSync(text, SALT);
        return password;

    }

}