import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

export class Utility {
 
    static createApiKeyHash(apiKey: any){
        const hash = crypto.createHash('sha256').update(apiKey).digest('base64');
        return hash;
    }

    static generateUUID() {
        let uuid = uuidv4();
        return uuid
    }

}
