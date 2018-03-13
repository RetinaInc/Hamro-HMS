'use strict';
let express = require('express');
let mainApplication = require('config/main');
let Model = require('baseComponents/model');

class ApiBaseBase {
    static describe(description, tests) {
        describe(description, function() {
            beforeEach(async () => {
                global.app = module.exports = express();
                mainApplication.init();
                ApiBaseBase.dbOptions.transaction = await Model.transaction();
            });

            afterEach(function() {
                ApiBaseBase.dbOptions.transaction.rollback();
            });

            tests();
        });
    }
}

ApiBaseBase.dbOptions = {
    transaction: null
};

module.exports = ApiBaseBase;
