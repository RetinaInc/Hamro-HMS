'use strict';
let Controller = require('baseComponents/controller');
let Logger = require('baseComponents/logger');
let Response = require('baseComponents/response');
let Path = require('path');

let authController = new Controller();
authController.router = function(controller) {
    controller.before(async (req, res, next) => {
        next();
    });

    controller.index(function(req, res, next) {
        try {
            Response.render(res, 'auth', {});
        } catch (error) {
            Logger.warn(error);
            Response.renderErrorPage(res, error.statusCode ? error.statusCode : '500', error);
        }
    });
};

authController.route(Path.resolve(__filename));
module.exports = authController;
