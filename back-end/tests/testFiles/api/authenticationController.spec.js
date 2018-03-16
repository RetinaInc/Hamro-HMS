'use strict';
let chai = require('chai');
let assert = chai.assert;
let request = require('supertest');

let ControllerBaseTest = require('baseComponents/controllerBaseTest');
require('controllers/api/authenticationController');

ControllerBaseTest.describe('Authentication Api tests', () => {
    it('Should send user login false if user not login', (done) => {
        request(ControllerBaseTest.app)
            .get('/api/authentication')
            .end((err, res) => {
                const data = res.body;

                assert.equal(200, res.statusCode);
                assert.isFalse(data.isLogin);
                assert.isUndefined(data.uuid);
                done();
            });
    });

    it('Should login user if valid credential provided', (done) => {
        request(ControllerBaseTest.app)
            .post('/api/authentication')
            .send({
                userName: 'admin',
                password: 'admin!@#'
            })
            .end((err, res) => {
                const data = res.body;

                assert.equal(200, res.statusCode);
                assert.isTrue(data.isLogin);
                assert.equal('2a1abd9c-86a1-4971-93f4-dd139f70f15d', data.uuid);
                assert.equal('admin', data.userName);
                assert.equal('Sanish Maharjan', data.person.fullName);

                done();
            });
    });

    it('Should throw 401 statusCode if invalid credential provided', (done) => {
        request(ControllerBaseTest.app)
            .post('/api/authentication')
            .send({
                userName: 'admin',
                password: 'invalidPassword'
            })
            .end((err, res) => {
                const data = res.body;

                assert.equal(401, res.statusCode);
                assert.equal('Invalid UserName or Password', data.message);

                done();
            });
    });

    it('Should throw 406 statusCode if require params not provided', (done) => {
        request(ControllerBaseTest.app)
            .post('/api/authentication')
            .end((err, res) => {
                const data = res.body;

                assert.equal(406, res.statusCode);
                assert.equal('Missing require params [userName, password]', data.message);

                done();
            });
    });

    it('Should return user info if already login', async () => {
        let requestLogin = await request(ControllerBaseTest.app)
            .post('/api/authentication')
            .send({
                userName: 'admin',
                password: 'admin!@#'
            });

        let requestLoginUserInfo = await request(ControllerBaseTest.app)
            .get('/api/authentication')
            .set('Cookie', requestLogin.header['set-cookie']);

        let loginUserInfo = requestLoginUserInfo.body;
        assert.isTrue(loginUserInfo.isLogin);
        assert.equal('2a1abd9c-86a1-4971-93f4-dd139f70f15d', loginUserInfo.uuid);
        assert.equal('admin', loginUserInfo.userName);
        assert.equal('Sanish Maharjan', loginUserInfo.person.fullName);
    });

    it('Should logout current login user', async () => {
        let requestLogin = await request(ControllerBaseTest.app)
            .post('/api/authentication')
            .send({
                userName: 'admin',
                password: 'admin!@#'
            });

        let requestLogOut = await request(ControllerBaseTest.app)
            .get('/api/authentication/logout')
            .set('Cookie', requestLogin.header['set-cookie']);

        let response = requestLogOut.body;
        assert.isFalse(response.isLogin);
        assert.isUndefined(response.uuid);
    });
});

