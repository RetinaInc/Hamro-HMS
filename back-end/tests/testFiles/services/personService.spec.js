'use strict';
let chai = require('chai');
let assert = chai.assert;

let TestBase = require('baseComponents/baseTest');
let Person = require('models/person');
let PersonService = require('services/personService');

TestBase.describe('PersonService tests', () => {
    it('Should get person by Id', async () => {
        let person = await PersonService.getPersonById(2);

        assert.isNotNull(person);
        assert.equal(person.id, 2);
        assert.equal(person.uuid, 'ffee63e5-880f-470f-b8f4-836e382f74c3');
        assert.equal(person.fullName, 'Manish Maharjan');
    });

    it('Should return all persons', async () => {
        let personList = await PersonService.getAllPersons();

        assert.lengthOf(personList, 3);
        assert.deepEqual(
            {
                id: personList[0].id,
                uuid: personList[0].uuid,
                firstName: personList[0].firstName,
                middleName: personList[0].middleName,
                lastName: personList[0].lastName,
                gender: personList[0].gender,
                bod: personList[0].bod
            },
            {
                id: 1,
                uuid: '98520d95-0f7e-4921-a49f-73c8792ae43e',
                firstName: 'Sanish',
                middleName: null,
                lastName: 'Maharjan',
                gender: 'Male',
                bod: '1988-10-20 00:00:00.000 +00:00'
            }
        );
        assert.deepEqual(
            {
                id: personList[1].id,
                uuid: personList[1].uuid,
                firstName: personList[1].firstName,
                middleName: personList[1].middleName,
                lastName: personList[1].lastName,
                gender: personList[1].gender,
                bod: personList[1].bod
            },
            {
                bod: '1980-02-05 00:00:00.000 +00:00',
                firstName: 'Manish',
                gender: 'Male',
                id: 2,
                lastName: 'Maharjan',
                middleName: null,
                uuid: 'ffee63e5-880f-470f-b8f4-836e382f74c3'
            }
        );
    });

    it('Should save new person', async () => {
        let person = new Person();
        person.firstName = 'New';
        person.lastName = 'Person';
        person.bod = new Date('2000-10-05');
        person.gender = 'Male';
        person.uuid = '1b671a64-40d5-491e-99b0-da01ff1f354';

        await PersonService.savePerson(person, TestBase.dbOptions);

        assert.isNotNull(person.id);
        assert.equal(person.uuid, '1b671a64-40d5-491e-99b0-da01ff1f354');
        assert.equal(person.fullName, 'New Person');
    });

    // For referance
    /*it('Should throw error with invalid data', async () => {
        let person = new Person();
        person.firstName = 'New';
        person.lastName = 'Person';
        person.bod = new Date('2000-10-05');
        person.gender = 'JPT - value';
        person.uuid = null;

        try {
            await PersonService.savePerson(person, TestBase.dbOptions);

            assert.assert.isNotOk('Should throw error');
        } catch (error) {
            assert.isOk('Should throw error');
        }
    });*/
});
