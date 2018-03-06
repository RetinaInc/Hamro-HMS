'use strict';
let express = require("express");
let path = require('path');
let fs = require("fs-extra");
let session = require('express-session');

let expressHandlebars = require('express-handlebars');
let constants = require("config/constants");
let logger = require('baseComponents/logger');
let Uuid = require('uuid/v1');

/**
 * App configuration module
 *
 * @author Sanish Maharjan <sanishmaharjan@lftechnology.com>
 */
var main = {
    /**
     * Initialize app configurations
     *
     * @author Sanish Maharjan <sanishmaharjan@lftechnology.com>
     */
    init: function () {
        logger.info('Initializing application...');
        var mainApplication = this;
        mainApplication.configureModules();
        mainApplication.loadComponents();
        mainApplication.setDefaultController(constants.DEFAULT_CONTROLLER);
        process.on('uncaughtException', function (err) {
            mainApplication.handleUncaughtExceptions(err);
        });
    },
    /**
     * Set and configure app modules
     *
     * @author Sanish Maharjan <sanishmaharjan@lftechnology.com>
     */
    configureModules: function () {
        /**
         * set static path
         */
        app.use(express.static(path.join(constants.WEB_APP_PATH)));
        app.engine('html', expressHandlebars({
            extname: '.html'
        }));
        app.set('view engine', 'html');
        app.set('views', path.join(constants.WEB_APP_PATH));
        app.enable('view cache');
        app.use(session({
            'secret': 'sessionKey!@#',
            genid: function(req) {
                return  Uuid();
            },
            'cookie' : {
                'path': '/',
                'httpOnly': false,
                'secure': false,
                'maxAge': 24*60*60*1000
            },
            resave: true,
            saveUninitialized: true
        }));
    },
    /**
     * Load components
     *
     * @author Sanish Maharjan <sanishmaharjan@lftechnology.com>
     */
    loadComponents: function () {
        /**
         * load controllers
         */
        var controllerPath = require("path").join(constants.CONTROLLER_PATH);
        main.includeFiles(controllerPath);
    },
    /**
     * Include directory files
     * @param path {string} path of directory
     * @author Sanish Maharjan <sanishmaharjan@lftechnology.com>
     */
    includeFiles: function (path) {
        fs.readdirSync(path).forEach(function (file) {
            if (fs.lstatSync(path + "/" + file).isDirectory()) {
                main.includeFiles(path + "/" + file);
            } else if (fs.lstatSync(path + "/" + file).isFile()) {
                require(path + "/" + file);
            }
        });
    },
    /**
     * Set default controller
     *
     * @param {string} $defaultController default controller
     * @author Sanish Maharjan <sanishmaharjan@lftechnology.com>
     */
    setDefaultController: function ($defaultController) {
        app.all('/',
            function (req, res, next) {
                res.redirect('/' + $defaultController);
                next();
            });
    },
    /**
     * Handle uncaught exception
     *
     * @param {array} err error
     */
    handleUncaughtExceptions: function (err) {
        logger.error('Threw Exception: ', err);
    }
};

module.exports = main;