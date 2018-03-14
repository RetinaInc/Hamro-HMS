'use strict';
let chai = require('chai');
let assert = chai.assert;

let TestBase = require('baseComponents/baseTest');
let User = require('models/user');
let UserService = require('services/userService');
let encrypter = require('node-password-encrypter');

TestBase.describe('UserService tests', () => {
    it('Should get user by Uuid', async () => {
        let user = await UserService.getUserByUuid('2a1abd9c-86a1-4971-93f4-dd139f70f15d');

        assert.isNotNull(user);
        assert.equal(user.id, 1);
        assert.equal(user.uuid, '2a1abd9c-86a1-4971-93f4-dd139f70f15d');
        assert.equal(user.personId, 1);
        assert.isFalse(user.isDeleted);
    });

    it('Should return all users', async () => {
        let userList = await UserService.getAllUsers();

        assert.lengthOf(userList, 1);
        assert.deepEqual(
            {
                id: userList[0].id,
                uuid: userList[0].uuid,
                userName: userList[0].userName,
                password: userList[0].password,
                salt: userList[0].salt,
                isDeleted: userList[0].isDeleted
            },
            {
                id: 1,
                uuid: '2a1abd9c-86a1-4971-93f4-dd139f70f15d',
                userName: 'admin',
                password:
                    '837ad70586cca7bc75d960d127a367679d6108ef9009be287059df015775c1cf3d361f84c59eacf7c09e0e87d671350d5797788b33bcb8670fd4d097638d94b6',
                salt:
                    '46bf7ca3e147e56cffd01f947abb8e3c77286b1b6a1f3a7398f325fe02e9dc0ceba63ea3a795c4444cd9982627c6837ac771d7e064a2d008aa8312d8338373c0a2109c7914b34058c80ee145d351c8fdbe41ca19f9dc11b4e58d732d38d7bcee4a1a2f3c703ee560d64a6c96ab6a12564451fc2267d638958f71bedbd0d49e1747180ffb9a64ae30dcd2d6a3e2572db606ff5d8881144aaf59080f630e6d6fa2a83374afbc5b952cc6ede5a3022c86d7912bdfb33a696dbc3f15e21e417d7eef373ba69bd5702918f7f2295c78b0b840401675201af07db7daced692e35feb40dccaf4426e46d0367f253f45f7f23fabe2e78531bfc8cd0fbd5ed72bbfc07daf',
                isDeleted: false
            }
        );
    });

    it('Should save new user', async () => {
        let user = new User();
        user.userName = 'mjsanish';
        user.uuid = '92515967-f795-4278-8420-c344e8251369';
        user.personId = 2;
        user.isActive = true;

        let tempEncrypt = await encrypter.encrypt({
            content: 'password',
            keylen: 64
        });

        user.password = tempEncrypt.encryptedContent;
        user.salt = tempEncrypt.salt;

        await UserService.saveUser(user, TestBase.dbOptions);

        assert.isNotNull(user.id);
        assert.equal(user.uuid, '92515967-f795-4278-8420-c344e8251369');
        assert.isNotNull(user.password);
    });

    it('Should get user by userName', async () => {
        let user = await UserService.getUserByUserName('admin');

        assert.isNotNull(user);
        assert.equal(user.id, 1);
        assert.equal(user.uuid, '2a1abd9c-86a1-4971-93f4-dd139f70f15d');
        assert.equal(user.personId, 1);
        assert.isFalse(user.isDeleted);
    });
});
