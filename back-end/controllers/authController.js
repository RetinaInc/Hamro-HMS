'use strict';
let Controller = require('baseComponents/controller');
let Logger = require('baseComponents/logger');
let Response = require('baseComponents/response');
let Path = require('path');

let Auth = require('baseComponents/auth');
let authController = new Controller();
authController.router = function(controller) {
    controller.before(async (req, res, next) => {
        if (await Auth.authenticate(req)) {
            Logger.info('Redirecting to clinical app');
            res.redirect('/clinical');
            res.end();
        } else {
            next();
        }
    });

    controller.index(function(req, res, next) {
        try {
            Response.render(res, 'auth', {});
        } catch (error) {
            Response.renderErrorPage(res, '500', error);
        }
    });
};

authController.route(Path.resolve(__filename));
module.exports = authController;
