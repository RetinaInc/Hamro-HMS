'use strict';
let Sequelize = require('sequelize');
let DataTypes = Sequelize.DataTypes;
let Model = require('baseComponents/model');
let Person = require('models/person');
/**
 * @type {Model}
 */

let User = Model.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        validate: {
            isInt: true
        }
    },
    uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    personId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        set: function (val) {
            this.setDataValue('userName', val.toLowerCase());
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: true
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    deleteReason: {
        type: DataTypes.STRING,
        allowNull: true
    },
    deletedAt: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: true,
    tableName: 'users',
});

User.belongsTo(Person);
module.exports = User;