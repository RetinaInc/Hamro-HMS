(function () {
    "use strict";
    require('dotenv').config();

    module.exports = {
        port: process.env.PORT || 8282,
        logging: {
            level: process.env.LOGGING_LEVEL || 'info'
        }
    };
})();