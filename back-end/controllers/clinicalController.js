(function () {
    "use strict";
    let BaseController = require('component/baseController');
    let logger = require('component/logger');
    let ResponseHandler = require('utilities/responseHandler');
    var path = require('path');

    let clinicalController = new BaseController();
    clinicalController.router = function (controller) {
        controller.before(function (req, res, next) {
            // before action execute before every action
            logger.info('Execute before every action');
            next();
        });

        controller.index(function (req, res, next) {
            // GET : /home
            try {
                let data = {
                    name: "Manish Maharjan",
                    pageName: "Home"
                };

                ResponseHandler.render(res, 'clinical', data);
            } catch (error) {
                ResponseHandler.renderErrorPage(res, '500', error);
            }
        });
    };

    clinicalController.route(path.resolve(__filename));
    module.exports = clinicalController;
})();
