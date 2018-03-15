'use strict';
let chai = require('chai');
let assert = chai.assert;
let request = require('supertest');
let ControllerBaseTest = require('baseComponents/controllerBaseTest');

ControllerBaseTest.controllerPath = 'controllers/api/personController';
ControllerBaseTest.describe('person Api tests', () => {
    it('Should return all persons', (done) => {
        request(global.app)
            .get('/api/person')
            .set({Authorization: 'Basic YWRtaW46YWRtaW4hQCM='})
            .send({v: 'full'})
            .end((err, res) => {
                //console.log(res.text);
                const data = res.body;

                assert.equal(200, res.statusCode);
                assert.equal(3, data.length);

                assert.deepEqual(
                    {
                        fullName: 'Sanish Maharjan',
                        uuid: '98520d95-0f7e-4921-a49f-73c8792ae43e',
                        firstName: 'Sanish',
                        middleName: null,
                        lastName: 'Maharjan',
                        gender: 'Male',
                        bod: '1988-10-20 00:00:00.000 +00:00'
                    },
                    {
                        fullName: data[0].fullName,
                        uuid: data[0].uuid,
                        firstName: data[0].firstName,
                        middleName: data[0].middleName,
                        lastName: data[0].lastName,
                        gender: data[0].gender,
                        bod: data[0].bod
                    }
                );

                assert.deepEqual(
                    {
                        fullName: 'Rita Maharjan',
                        uuid: '46a61768-f606-42c8-8b9e-d6c16e458339',
                        firstName: 'Rita',
                        middleName: null,
                        lastName: 'Maharjan',
                        gender: 'Female',
                        bod: null
                    },
                    {
                        fullName: data[2].fullName,
                        uuid: data[2].uuid,
                        firstName: data[2].firstName,
                        middleName: data[2].middleName,
                        lastName: data[2].lastName,
                        gender: data[2].gender,
                        bod: data[2].bod
                    }
                );

                done();
            });
    });

    it('Should return person by Uuid', (done) => {
        request(global.app)
            .get('/api/person/98520d95-0f7e-4921-a49f-73c8792ae43e')
            .set({Authorization: 'Basic YWRtaW46YWRtaW4hQCM='})
            .send({v: 'full'})
            .end((err, res) => {
                const data = res.body;

                assert.equal(200, res.statusCode);
                assert.isNotEmpty(data);
                assert.deepEqual(
                    {
                        fullName: 'Sanish Maharjan',
                        uuid: '98520d95-0f7e-4921-a49f-73c8792ae43e',
                        firstName: 'Sanish',
                        middleName: null,
                        lastName: 'Maharjan',
                        gender: 'Male',
                        bod: '1988-10-20 00:00:00.000 +00:00'
                    },
                    {
                        fullName: data.fullName,
                        uuid: data.uuid,
                        firstName: data.firstName,
                        middleName: data.middleName,
                        lastName: data.lastName,
                        gender: data.gender,
                        bod: data.bod
                    }
                );

                done();
            });
    });


});
