'use strict';
let Person = require('models/person');
module.exports = {
    getPersonByUuid: async (uuid) => {
        return await Person.findOne({where: {uuid: uuid, isDeleted: false}});
    },
    getAllPersons: async () => {
        return await Person.findAll();
    },
    savePerson: async (person, options) => {
        if (person.validate()) {
            return await person.save(options);
        }
    }
};
