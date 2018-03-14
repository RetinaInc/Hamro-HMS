'use strict';
let Controller = require('baseComponents/controller');
let Logger = require('baseComponents/logger');
let Path = require('path');
let AuthenticationService = require('services/authenticationService');
let Response = require('baseComponents/response');
let Auth = require('baseComponents/auth');
let dataProcessor = require('utilities/dataProcessor');

let authenticationController = new Controller();
authenticationController.router = function (controller) {
    controller.before(async (req, res, next) => {
        // before action execute before every action
        next();
    });

    controller.index(function (req, res, next) {
        // GET : /api/authentication
        AuthenticationService.getLoginUser(req.session)
            .then((userData) => {
                Response.responseApi(res, userData);
            })
            .catch((error) => {
                Logger.error(error);
                Response.responseApiError(res, '500', error.message ? error.message : error);
            });
    });

    controller.action('/', {method: 'POST'}, async (req, res, next) => {
        // POST : /api/authentication
        try {
            let formData = await dataProcessor.getFormData(req);
            let creds = {
                name: formData.fields.userName,
                pass: formData.fields.password
            };

            if (await Auth.login(creds, req)) {
                let userData = await AuthenticationService.getLoginUser(req.session);
                Response.responseApi(res, userData);
            } else {
                Response.responseApiError(res, '401', 'Invalid UserName or Password');
            }
        } catch (error) {
            Response.responseApiError(res, '500', error.message ? error.message : error);
        }
    });

    controller.action('/logout', {method: 'GET'}, async (req, res, next) => {
        // POST : /api/authentication
        try {
            req.session.destroy(() => {
                Response.responseApi(res, {
                    isLogin : false
                });
            });
        } catch (error) {
            Response.responseApiError(res, '500', error.message ? error.message : error);
        }
    });
};

authenticationController.route(Path.resolve(__filename));
module.exports = authenticationController;
