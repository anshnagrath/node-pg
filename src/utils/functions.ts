import { CONFIG } from "../config/environment";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export function throwError(message: string, statusCode: number) {
    let newError: any = new Error(message || 'Internal Server Error');
    newError['status'] = statusCode || 500;
    throw newError;
}

// Generate hash using bcrypt
export function generateHash(text: string) {
    const SALT_ROUNDS = parseInt(CONFIG.BCRYPT_SALT_ROUNDS!);
    const SALT = bcrypt.genSaltSync(SALT_ROUNDS);
    const hash = bcrypt.hashSync(text, SALT);
    return hash;

}

// Compare password using bcrypt
export function comparePassword(hash: string, plainText: string) {
    return bcrypt.compareSync(plainText, hash);
}

export function getRandomPassword() {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let specialChars = '!@#$%&*';
    let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '1234567890';
    let string = '';
    for (let i = 0; i < 3; i++) {
        string += chars[Math.floor(Math.random() * chars.length)];
    }

    for (let i = 0; i < 2; i++) {
        string += specialChars[Math.floor(Math.random() * specialChars.length)];
    }

    for (let i = 0; i < 3; i++) {
        string += numbers[Math.floor(Math.random() * numbers.length)];
    }


    for (let i = 0; i < 3; i++) {
        string += lowerChars[Math.floor(Math.random() * lowerChars.length)];
    }



    return string;

}

// Generate random username
export function generateRandomUsername(prefix: string = 'USER_') {
    let chars = '1234567890';
    let string = '';
    for (let i = 0; i < 3; i++) {
        string += chars[Math.floor(Math.random() * chars.length)];
    }

    return prefix + string;
}

// Generate JWT token
export function generateJwtTokenByUUID(uuid: string) {
    return jwt.sign({
        uuid: uuid,
    },
        CONFIG.jwt.secret,
        { expiresIn: '24h' }
    );
}

export function getEventName(username: string, eventName: string) {
    return `${username}_${eventName}`;
}
export function getCurrentTimeEPOCH() {
    return moment.utc(new Date()).utcOffset("+05:30").valueOf();
}

export function generateUUID() {
    return uuidv4();
}

export function getParamsForArrayQuery(array: any[]) {
    let params = [];
    for (var i = 1; i <= array.length; i++) {
        params.push('$' + i);
    }

    return params;

}