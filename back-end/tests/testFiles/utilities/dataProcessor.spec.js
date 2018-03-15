'use strict';
let chai = require('chai');
let assert = chai.assert;
let path = require('path');
let fs = require('fs-extra');
let request = require('supertest');

let ControllerBaseBase = require('baseComponents/controllerBaseTest');
let DataProcessor = require('utilities/dataProcessor');
let mockController = () => {
    global.app.post('/dataProcessor', async (req, res) => {
        let postData = await DataProcessor.getFormData(req);
        res.send(postData);
    });

    global.app.post('/upload', async (req, res) => {
        let postData = await DataProcessor.getFormData(req);
        let uploadDir = path.resolve(__dirname + '/../../upload');
        let fileName = await DataProcessor.uploadFile(postData.files.file, uploadDir);
        let responseData = {
            fileName: fileName,
            path: uploadDir
        };

        res.send(responseData);
    });
};

ControllerBaseBase.describe('Data Processor tests', () => {
    it('Should get post data', (done) => {
        mockController();
        request(global.app)
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
        request(global.app)
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

    it('Should upload file', (done) => {
        mockController();
        request(global.app)
            .post('/upload')
            .field('title', 'App Icon')
            .attach('file', 'front-end/webApp/images/icon.png')
            .end((err, res) => {
                const response = res.body;
                assert.isNotNull(response.fileName);
                assert.isNotNull(response.path);
                assert.isTrue(fs.existsSync(response.path+'/'+response.fileName));

                fs.removeSync(response.path+'/'+response.fileName);
                done();
            });
    });
});
