(function () {
    let sequelize = require('sequelize');
    let config = require('config/config');
    let dbModel = new sequelize(config.database.name, config.database.user, config.database.password, {
        host: config.database.host,
        dialect: 'postgres',
        pool: {
            max: 10,
            min: 3,
            idle: 10000
        }
    });

    /**
     *
     * @type {model}
     */
    module.exports = dbModel;
})();