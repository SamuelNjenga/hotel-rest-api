'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CustomerCartItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menuItemId: {
        type: Sequelize.INTEGER,
        references: { model: 'menuItems', key: 'id' },
        onDelete: 'CASCADE',
      },
      cartId: {
        type: Sequelize.INTEGER,
        references: { model: 'customerCarts', key: 'id' },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CustomerCartItems');
  }
};