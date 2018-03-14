'use strict';
let chai = require('chai');
let assert = chai.assert;

let ServiceBaseTest = require('baseComponents/serviceBaseTest');
let AuthenticationService = require('services/authenticationService');

let testData = {
    session: {
        userUuid: '2a1abd9c-86a1-4971-93f4-dd139f70f15d'
    }
};

ServiceBaseTest.describe('Authentication service tests', () => {
    it('Should return login user details', async () => {
        let loginUser = await AuthenticationService.getLoginUser(testData.session);

        assert.equal('2a1abd9c-86a1-4971-93f4-dd139f70f15d', loginUser.uuid);
        assert.isTrue(loginUser.isLogin);
        assert.isNotNull(loginUser.person);
        assert.equal('98520d95-0f7e-4921-a49f-73c8792ae43e', loginUser.person.uuid);
    });
});
