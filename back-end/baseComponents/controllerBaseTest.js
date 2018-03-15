'use strict';
let express = require('express');
let mainApplication = require('config/main');
let Model = require('baseComponents/model');

class ControllerBaseBase {
    static describe(description, tests) {
        describe(description, function() {
            before(() => {
                global.app = module.exports = express();
                mainApplication.testAppInit(ControllerBaseBase.controllerPath);
                if(ControllerBaseBase.router)
                    ControllerBaseBase.router();
            });

            beforeEach(async () => {
                ControllerBaseBase.dbOptions.transaction = await Model.transaction();
            });

            afterEach(function() {
                ControllerBaseBase.dbOptions.transaction.rollback();
            });

            tests();
        });
    }

    static mockRouter(router){
        ControllerBaseBase.router = router;
    }
}

ControllerBaseBase.controllerPath = null;
ControllerBaseBase.dbOptions = {
    transaction: null
};

module.exports = ControllerBaseBase;
