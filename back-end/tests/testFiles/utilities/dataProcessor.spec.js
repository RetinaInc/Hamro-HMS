'use strict';
let chai = require('chai');
let assert = chai.assert;
let path = require('path');
let fs = require('fs-extra');
let request = require('supertest');

let ControllerBaseTest = require('baseComponents/controllerBaseTest');
let DataProcessor = require('utilities/dataProcessor');

ControllerBaseTest.mockRouter((app) => {
    app.post('/dataProcessor', async (req, res) => {
        let postData = await DataProcessor.getFormData(req);
        res.send(postData);
    });

    app.post('/upload', async (req, res) => {
        let postData = await DataProcessor.getFormData(req);
        let uploadDir = path.resolve(__dirname + '/../../upload');
        let fileName = await DataProcessor.uploadFile(postData.files.file, uploadDir);
        let responseData = {
            fileName: fileName,
            path: uploadDir
        };

        res.send(responseData);
    });
});

ControllerBaseTest.describe('Data Processor tests', () => {
    it('Should get post data', (done) => {
        request(ControllerBaseTest.app)
            .post('/dataProcessor')
            .send({firstName: 'Sanish', lastName: 'Maharjan'})
            .end((err, res) => {
                const postData = res.body;

                assert.equal(200, res.statusCode);
                assert.isNotEmpty(postData);
                assert.isEmpty(postData.files);
                assert.equal('Sanish', postData.firstName);
                assert.equal('Maharjan', postData.lastName);
                done();
            });
    });

    it('Should get form data', (done) => {
        request(ControllerBaseTest.app)
            .post('/dataProcessor')
            .field('title', 'App Icon')
            .attach('file', 'front-end/webApp/images/icon.png')
            .end((err, res) => {
                const postData = res.body;

                assert.equal(200, res.statusCode);
                assert.isNotEmpty(postData);
                assert.equal('App Icon', postData.title);
                assert.isNotEmpty(postData.files);
                assert.equal(1, Object.keys(postData.files).length);
                done();
            });
    });

    it('Should upload file', (done) => {
        request(ControllerBaseTest.app)
            .post('/upload')
            .field('title', 'App Icon')
            .attach('file', 'front-end/webApp/images/icon.png')
            .end((err, res) => {
                const response = res.body;

                assert.equal(200, res.statusCode);
                assert.isNotNull(response.fileName);
                assert.isNotNull(response.path);
                assert.isTrue(fs.existsSync(response.path+'/'+response.fileName));

                fs.removeSync(response.path+'/'+response.fileName);
                done();
            });
    });
});
