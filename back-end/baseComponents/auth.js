'use strict';

let auth = require('basic-auth');
var Buffer = require('safe-buffer').Buffer;
let encrypter = require('node-password-encrypter');
let UserService = require('services/userService');

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
        let user = await UserService.getUserByUserName(creds.name);
        if (user != null && (await Auth.isValidUser(creds, user))) {
            req.session.userUuid = user.uuid;
            req.session.user = user.userName;
            return true;
        }

        return false;
    }

    static async isValidUser(creds, user) {
        let isValidPassword = await encrypter.compare({
            content: creds.pass,
            encryptedContent: user.password,
            salt: user.salt,
            keylen: 64
        });

        return creds.name === 'admin' && isValidPassword;
    }

    static async encryptPassword(password) {
        let tempEncrypt = await encrypter.encrypt({
            content: password,
            keylen: 64
        });

        return tempEncrypt;
    }

    static getBaseAuthHash(user, password) {
        var token = user + ':' + password;
        var hash = Buffer.from(token).toString('base64');
        return 'Basic ' + hash;
    }
}

module.exports = Auth;
