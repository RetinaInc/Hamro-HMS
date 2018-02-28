let Controller = require('baseComponents/controller');
let Logger = require('baseComponents/logger');
let Path = require('path');
let personService = require('services/personService');
let Response = require('baseComponents/response');

let personController = new Controller();
personController.router = function (controller) {
    controller.before(function (req, res, next) {
        // before action execute before every action
        Logger.info('Execute before every action');
        next();
    });

    controller.index(function (req, res, next) {
        // GET : /api/person
        personService.getAllPersons().then(personDataList=> {
            Response.responseApi(res, personDataList);
        }).catch(error=> {
            Logger.error(error);
            Response.responseApiError(res, '500', error.message ? error.message : error);
        });
    });

    controller.action("/:id", {method: 'GET'}, function (req, res, next) {
        // GET : /api/person/:id
        let id = parseInt(req.params.id, 10);
        if (id) {
            personService.getPersonById(id).then(personData=> {
                Response.responseApi(res, personData);
            }).catch(error=> {
                Logger.error(error);
                Response.responseApiError(res, '500', error.message ? error.message : error);
            });
        } else {
            Response.responseApiError(res, '406', 'Id should be integer');
        }
    });
};

personController.route(Path.resolve(__filename));
module.exports = personController;