'use strict';
let winston = require('winston');
let config = require('config/config');

const logger = new winston.Logger({
    transports: [new winston.transports.Console({colorize: true})]
});

logger.level = config.logging.level;
module.exports = logger;
