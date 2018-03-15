'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('persons', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            uuid: {
                type: Sequelize.STRING(36),
                allowNull: false,
                unique: true
            },
            firstName: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            middleName: {
                type: Sequelize.STRING(50),
                allowNull: true
            },
            lastName: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            gender: {
                type: Sequelize.STRING(6),
                allowNull: false,
                defaultValue: 'Male'
            },
            bod: {
                type: Sequelize.DATEONLY,
                allowNull: true
            },
            isDeleted: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            deleteReason: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: true
            },
            deletedAt: {
                type: Sequelize.DataTypes.DATE,
                allowNull: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('persons');
    }
};
