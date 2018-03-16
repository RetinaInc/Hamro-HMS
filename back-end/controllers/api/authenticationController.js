'use strict';
let ApiController = require('baseComponents/apiController');
let Logger = require('baseComponents/logger');
let Path = require('path');
let AuthenticationService = require('services/authenticationService');
let Response = require('baseComponents/response');
let Auth = require('baseComponents/auth');
let HttpError = require('baseComponents/httpError');
let DataProcessor = require('utilities/dataProcessor');

let authenticationController = new ApiController({
    default: (user) => {
        if (user) {
            return {
                uuid: user.uuid,
                userName: user.userName,
                person: {
                    uuid: user.person.uuid,
                    fullName: user.person.fullName,
                    gender: user.person.gender
                },
                isLogin: true
            };
        } else {
            return {
                isLogin: false
            };
        }
    }
});

authenticationController.router = function (controller) {
    controller.before(async (req, res, next) => {
        // before action execute before every action
        next();
    });

    controller.index(async (req, res, next) => {
        // GET : /api/authentication
        try {
            let loginUser = await AuthenticationService.getLoginUser(req.session);
            let responseData = authenticationController.getApiDataRepresentation('default', loginUser);
            Response.responseApi(res, responseData);
        }
        catch (error) {
            Logger.warn(error);
            Response.responseApiError(res, error.statusCode ? error.statusCode : '500', error.message ? error.message : error);
        }
    });

    controller.action('/', {method: 'POST'}, async (req, res, next) => {
        // POST : /api/authentication
        try {
            let postData = await DataProcessor.getFormData(req);
            if (!postData.userName || !postData.password) {
                throw new HttpError(406, 'Missing require params [userName, password]');
            }

            let creds = {
                name: postData.userName,
                pass: postData.password
            };

            if (await Auth.login(creds, req)) {
                let userData = await AuthenticationService.getLoginUser(req.session);
                let responseData = authenticationController.getApiDataRepresentation('default', userData);
                Response.responseApi(res, responseData);
            } else {
                throw new HttpError(401, 'Invalid UserName or Password');
            }
        } catch (error) {
            Logger.warn(error);
            Response.responseApiError(res, error.statusCode ? error.statusCode : '500', error.message ? error.message : error);
        }
    });

    controller.action('/logout', {method: 'GET'}, async (req, res, next) => {
        // GET : /api/authentication
        try {
            req.session.destroy(() => {
                let responseData = authenticationController.getApiDataRepresentation('default', null);
                Response.responseApi(res, responseData);
            });
        } catch (error) {
            Logger.warn(error);
            Response.responseApiError(res, error.statusCode ? error.statusCode : '500', error.message ? error.message : error);
        }
    });
};

authenticationController.route(Path.resolve(__filename));
module.exports = authenticationController;
