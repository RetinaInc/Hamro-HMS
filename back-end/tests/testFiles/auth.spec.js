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

        let user = await User.findOne({ where: {userName: 'admin', isDeleted: false} });
        let isValidUser = await Auth.isValidUser(creds, user);

        assert.isTrue(isValidUser);
    });

    it('Should encrypt password', async () => {
        let encryptData = await Auth.encryptPassword('admin!@#');

        assert.assert.equal('837ad70586cca7bc75d960d127a367679d6108ef9009be287059df015775c1cf3d361f84c59eacf7c09e0e87d671350d5797788b33bcb8670fd4d097638d94b6', encryptData.encryptedContent);
        assert.assert.equal('fd357d9fc70a19fd2421c02fd2df85863f3ff255e49121e4e8e081939f30f7b9d5c14b74349f952aa056def5dbc022084f52d11c763208f2e65fa572c1849a6c0acc452b2b754bb1b2d546b174c0a7d15aa11c8b4373f56f69b2e26092fab2548394ebbec09abd142347e2a21df41b4012c6865b8d626931fe7421a5e2fbf8342d0ed884931b9dee3569869e1c2623145074fe48aabde07c1c24d55915143bdb1f90aac47622e0fbde087189e379b54dd5c60d9e2befc63985a8979c59c71bb00c099535d3829d2a15bee81d3d6aaac4533e8442754da4d3ffa8e27bfd1117ff55ced8acc91c93c88743a584621d97cfa74f60913d4feb62ec05e1a147d484a0', encryptData.salt);
    });
});
