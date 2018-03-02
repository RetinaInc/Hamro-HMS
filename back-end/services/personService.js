'use strict';
let Person = require('models/person');
module.exports = {
    getPersonById: async (id) => {
        return await Person.findById(id);
    },
    getAllPersons: async () => {
        return Person.findAll();
    },
    savePerson: async (person, options) => {
        if(person.validate()){
            return await person.save(options);
        }
    }
};