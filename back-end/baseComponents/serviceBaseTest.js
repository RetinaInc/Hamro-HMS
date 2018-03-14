'use strict';
let Model = require('baseComponents/model');

class ServiceBaseTest {
    static describe(description, tests) {
        describe(description, function() {
            beforeEach(async () => {
                ServiceBaseTest.dbOptions.transaction = await Model.transaction();
            });

            afterEach(function() {
                ServiceBaseTest.dbOptions.transaction.rollback();
            });

            tests();
        });
    }
}

ServiceBaseTest.dbOptions = {
    transaction: null
};

module.exports = ServiceBaseTest;
