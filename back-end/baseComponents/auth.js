'use strict';

let auth = require('basic-auth');
let encrypter = require('node-password-encrypter');

class Auth {
    static async authenticate(req) {
        let isAuthenticated = false;
        let creds = auth(req);

        if (creds) {
            isAuthenticated = await Auth.login(creds, req);
        } else if (req.session.userUuid) {
            console.log('-------------------- Already login  --------------');
            console.log({userUuid: req.session.userUuid});
            isAuthenticated = true;
        }

        return isAuthenticated;
    }

    static async login(creds, req) {
        if (await Auth.validUser(creds)) {
            req.session.userUuid = 'b7374ee0-2122-11e8-8737-7525b2eb2d92';
            req.session.user = creds.name;
            return true;
        } else {
            return false;
        }
    }

    static async validUser(creds) {
        let tempEncrypt = await encrypter.encrypt({
            content: 'admin!@#',
            keylen: 64,
        });

        console.log('--------------------  validUser  --------------');
        console.log(tempEncrypt.salt);
        console.log(tempEncrypt.encryptedContent);
        console.log(creds.pass);
        console.log(creds.name);

        let isValidPassword = await encrypter.compare({
            content: creds.pass,
            encryptedContent: tempEncrypt.encryptedContent,
            salt: tempEncrypt.salt,
            keylen: 64
        });

        return (creds.name === 'admin' && isValidPassword);
    }
}

module.exports = Auth;