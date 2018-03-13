'use strict';
let Model = require('baseComponents/model');

class TestBase {
    static describe(description, tests) {
        describe(description, function() {
            beforeEach(async () => {
                TestBase.dbOptions.transaction = await Model.transaction();
            });

            afterEach(function() {
                TestBase.dbOptions.transaction.rollback();
            });

            tests();
        });
    }
}

TestBase.dbOptions = {
    transaction: null
};

module.exports = TestBase;
