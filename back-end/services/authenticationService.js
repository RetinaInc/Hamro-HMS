'use strict';
let Buffer = require('safe-buffer').Buffer;
let encrypter = require('node-password-encrypter');

let User = require('models/user');
let Person = require('models/person');
module.exports = {
    getLoginUser: async (session) => {
        let loginUser = null;
        if (session.userUuid) {
            loginUser = await User.findOne({
                where: {uuid: session.userUuid, isDeleted: false}, include: [
                    {model: Person},
                ]
            });
        }

        return loginUser;
    },
    encryptPassword: async (password) => {
        return await encrypter.encrypt({
            content: password,
            keylen: 64
        });
    },
    getBaseAuthHash: (user, password) => {
        let token = user + ':' + password;
        let hash = Buffer.from(token).toString('base64');
        return 'Basic ' + hash;
    }
};
