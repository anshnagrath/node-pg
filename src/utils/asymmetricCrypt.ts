import crypto from 'crypto';

export class AsymmetricCrypt {
    static publicEncrypt(publicKey: string, dataToEncrypt: any) {

        const encryptedData = crypto.publicEncrypt({
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PADDING
        },
            Buffer.from(dataToEncrypt)
        ).toString('base64')
        return encryptedData;
    }

    static privateDecrypt(privateKey: string, toDecrypt: any) {

        const decryptedData = crypto.privateDecrypt(
            {
                key: privateKey.toString(),
                padding: crypto.constants.RSA_PKCS1_PADDING
            },
            Buffer.from(toDecrypt, 'base64')
        )
        return decryptedData;

    }
}
