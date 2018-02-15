(function () {
    "use strict";
    require('dotenv').config();

    module.exports = {
        port: process.env.PORT || 8282,
        logging: {
            level: process.env.LOGGING_LEVEL || 'info'
        },
        database: {
            host: process.env.DB_HOST || '127.0.0.1',
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            name: process.env.DB_NAME,
            charset: 'utf8'
        }
    };
})();