'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addConstraint('users', ['personId'], {
            type: 'foreign key',
            name: 'fk_users_persons',
            references: {
                table: 'persons',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeConstraint('users', 'fk_users_persons');
    }
};
