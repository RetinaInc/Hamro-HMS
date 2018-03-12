'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.DataTypes.INTEGER
          },
          uuid: {
              type: Sequelize.DataTypes.STRING(36),
              allowNull: false,
              unique: true
          },
          personId: {
              type: Sequelize.DataTypes.INTEGER,
              allowNull: false
          },
          userName: {
              type: Sequelize.DataTypes.STRING(10),
              allowNull: false,
              unique: true
          },
          password: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: true
          },
          salt: {
              type: Sequelize.DataTypes.TEXT(),
              allowNull: true
          },
          isActive: {
              type: Sequelize.DataTypes.BOOLEAN,
              allowNull: false,
              defaultValue: false
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
              type: Sequelize.DataTypes.DATE,
              allowNull: false
          },
          updatedAt: {
              type: Sequelize.DataTypes.DATE,
              allowNull: true
          }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  }
};
