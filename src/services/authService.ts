import bcrypt from 'bcrypt';
import { CONFIG } from "../config/environment";
import jwt from 'jsonwebtoken';

export class AuthService {

    // Create hash from string
    static createHash(text: string) {
        const SALT_ROUNDS = parseInt(CONFIG.BCRYPT_SALT_ROUNDS!);
        const SALT = bcrypt.genSaltSync(SALT_ROUNDS);
        const password = bcrypt.hashSync(text, SALT);
        return password;

    }

    // Compare password using bcrypt
    static comparePassword(hash: string, plainText: string) {
        return bcrypt.compareSync(plainText, hash);
    }

    // Generate JWT token
    static generateJwtToken(userUUID: string) {
        return jwt.sign({
            id: userUUID,
        },
            CONFIG.jwt.secret,
            { expiresIn: '24h' }
        );
    }

    static generateJwtTokenForClientUser(userEmail: string) {
        return jwt.sign({
            id: userEmail,
        },
            CONFIG.jwt.secret,
            { expiresIn: '15m' }
        );
    }

    static generateJwtTokenForZoneUser(userEmail: string) {
        return jwt.sign({
            id: userEmail,
        },
            CONFIG.jwt.secret,
            { expiresIn: '10h' }
        );
    }
}
