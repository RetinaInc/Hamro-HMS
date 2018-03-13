'use strict';
let Controller = require('baseComponents/controller');
let Logger = require('baseComponents/logger');
let Response = require('baseComponents/response');
let Path = require('path');

let Auth = require('baseComponents/auth');
let clinicalController = new Controller();
clinicalController.router = function(controller) {
    controller.before(async (req, res, next) => {
        if (await Auth.authenticate(req)) {
            next();
        } else {
            Logger.info('Redirecting to login page');
            res.redirect('/auth#/login');
            res.end();
        }
    });

    controller.index(function(req, res, next) {
        try {
            let data = {
                name: 'Manish Maharjan',
                pageName: 'Home'
            };

            Response.render(res, 'clinical', data);
        } catch (error) {
            Response.renderErrorPage(res, '500', error);
        }
    });
};

clinicalController.route(Path.resolve(__filename));
module.exports = clinicalController;
