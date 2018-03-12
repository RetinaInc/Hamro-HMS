'use strict';
let chai = require('chai');
let assert = chai.assert;

let TestBase = require('baseComponents/baseTest');
let Auth = require('baseComponents/auth');
let User = require('models/user');

TestBase.describe('Auth tests', () => {

    it('Should get user by Id', async () => {
        let creds = {
            name: 'admin',
            pass: 'admin!@#'
        };

        let user = await User.findOne({ where: {userName: 'admin', isDeleted: false} });
        let isValidUser = await Auth.isValidUser(creds, user);

        assert.isTrue(isValidUser);
    });
});
