(function () {
    "use strict";
    let sequelize = require('sequelize');
    let dbModel = require('component/dbModel');

    /**
     * @type {dbModel}
     */
    module.exports = dbModel.define('person', {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        first_name: {
            type: sequelize.STRING,
            allowNull: false,
            set: function (val) {
                this.setDataValue('first_name', val.charAt(0).toUpperCase() + val.slice(1).toLowerCase());
            }
        },
        last_name: {
            type: sequelize.STRING,
            allowNull: false,
            set: function (val) {
                this.setDataValue('last_name', val.charAt(0).toUpperCase() + val.slice(1).toLowerCase());
            }
        },
        email: {
            type: sequelize.STRING,
            allowNull: true,
            validate: {
                isEmail: {
                    msg: "Invalid email address"
                }
            }
        },
        created_at: {
            type: sequelize.DATE,
            allowNull: false,
            defaultValue: sequelize.NOW
        },
        updated_at: {
            type: sequelize.DATE,
            allowNull: true
        }
    }, {
        tableName: 'person',
        // Don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        // Define getter methods
        getterMethods: {
            fullName: function () {
                return this.first_name + ' ' + this.last_name
            }
        },
        // Define getter methods
        setterMethods: {
            fullName: function (value) {
                var nameSplit = value.split(' ');
                this.setDataValue('first_name', nameSplit.slice(0, -1).join(' '));
                this.setDataValue('last_name', nameSplit.slice(-1).join(' '));
            }
        }
    });
})();