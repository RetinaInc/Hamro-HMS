'use strict';
let Path = require('path');
let ApiController = require('baseComponents/apiController');
let Logger = require('baseComponents/logger');
let Response = require('baseComponents/response');
let Auth = require('baseComponents/auth');

let PersonService = require('services/personService');
let DataProcessor = require('utilities/dataProcessor');

let personApiController = new ApiController({
    full: (data) => {
        return {
            uuid: data.uuid,
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            fullName: data.fullName,
            gender: data.gender,
            bod: data.bod
        };
    },
    default: (data) => {
        return {
            uuid: data.uuid,
            fullName: data.fullName,
            gender: data.gender
        };
    }
});

personApiController.router = function (controller) {
    controller.before(async (req, res, next) => {
        // before action execute before every action
        if (await Auth.authenticate(req)) {
            next();
        } else {
            Response.responseApiDenied(res);
        }
    });

    controller.index(async (req, res, next) => {
        // GET : /api/person
        try {
            let parameters = await DataProcessor.getFormData(req);
            let personDataList = await PersonService.getAllPersons();
            let apiDataRepresentation = parameters.v ? parameters.v : 'default';
            let responseData = personApiController.getApiDataRepresentation(apiDataRepresentation, personDataList);
            Response.responseApi(res, responseData);
        } catch (error) {
            Logger.error(error);
            Response.responseApiError(res, '500', error.message ? error.message : error);
        }
    });

    controller.action('/:uuid', {method: 'GET'}, async (req, res, next) => {
        // GET : /api/person/:uuid
        let uuid = req.params.uuid;
        let parameters = await DataProcessor.getFormData(req);
        try {
            let personData = await PersonService.getPersonByUuid(uuid);
            let apiDataRepresentation = parameters.v ? parameters.v : 'default';
            let responseData = personApiController.getApiDataRepresentation(apiDataRepresentation, personData);
            Response.responseApi(res, responseData);
        } catch (error) {
            Logger.error(error);
            Response.responseApiError(res, '500', error.message ? error.message : error);
        }
    });
};

personApiController.route(Path.resolve(__filename));
module.exports = personApiController;
