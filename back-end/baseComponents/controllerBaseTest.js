'use strict';
let express = require('express');
let mainApplication = require('config/main');
let Model = require('baseComponents/model');

class ControllerBaseBase {
    static describe(description, tests) {
        describe(description, function() {
            beforeEach(async () => {
                global.app = module.exports = express();
                mainApplication.testAppInit(ControllerBaseBase.controllerPath);
                ControllerBaseBase.dbOptions.transaction = await Model.transaction();
            });

            afterEach(function() {
                ControllerBaseBase.dbOptions.transaction.rollback();
            });

            tests();
        });
    }
}

ControllerBaseBase.controllerPath = null;
ControllerBaseBase.dbOptions = {
    transaction: null
};

module.exports = ControllerBaseBase;
