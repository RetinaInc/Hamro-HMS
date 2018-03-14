'use strict';
let chai = require('chai');
let assert = chai.assert;
let request = require('supertest');

let ControllerBaseBase = require('baseComponents/controllerBaseTest');
let DataProcessor = require('utilities/dataProcessor');

let mockController = () => {
    app.post('/dataProcessor', async (req, res) => {
        let postData = await DataProcessor.getFormData(req);
        res.send(postData)
    });
};

ControllerBaseBase.describe('Data Processor tests', () => {
    it('Should get post data', (done) => {
        mockController();
        request(app)
            .post('/dataProcessor')
            .send({firstName: 'Sanish', lastName: 'Maharjan'})
            .end((err, res) => {
                const postData = res.body;
                assert.isNotEmpty(postData.fields);
                assert.isEmpty(postData.files);
                assert.equal('Sanish', postData.fields.firstName);
                assert.equal('Maharjan', postData.fields.lastName);
                done();
            });
    });

    it('Should get form data', (done) => {
        mockController();
        request(app)
            .post('/dataProcessor')
            .field('title', 'App Icon')
            .attach('file', 'front-end/webApp/images/icon.png')
            .end((err, res) => {
                const postData = res.body;
                assert.isNotEmpty(postData.fields);
                assert.equal('App Icon', postData.fields.title);
                assert.isNotEmpty(postData.files);
                assert.equal(1, Object.keys(postData.files).length);
                done();
            });
    });
});
