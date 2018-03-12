'use strict';
let chai = require('chai');
let assert = chai.assert;

let TestBase = require('baseComponents/baseTest');
let Auth = require('baseComponents/auth');
let User = require('models/user');

TestBase.describe('Auth tests', () => {

    it('Should validate user by username & password', async () => {
        let creds = {
            name: 'admin',
            pass: 'admin!@#'
        };

        let user = await User.findOne({where: {userName: 'admin', isDeleted: false}});
        let isValidUser = await Auth.isValidUser(creds, user);

        assert.isTrue(isValidUser);
    });

    it('Should encrypt password', async () => {
        let encryptData = await Auth.encryptPassword('admin!@#');

        assert.isNotNull(encryptData.encryptedContent);
        assert.equal(128, encryptData.encryptedContent.length);
        assert.isNotNull(encryptData.salt);
    });

    it('Should return basic Auth hash', () => {
        let baseAuthHash = Auth.getBaseAuthHash('admin', 'admin!@#');
        assert.equal('Basic YWRtaW46YWRtaW4hQCM=', baseAuthHash);
    });
});
