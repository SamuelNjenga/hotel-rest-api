'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DailyConsumptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      foodStorageId: {
        type: Sequelize.INTEGER,
        references: { model: 'foodStorages', key: 'id' },
        onDelete: 'CASCADE',
      },
      estimatedAmount: {
        type: Sequelize.FLOAT
      },
      consumedAmount: {
        type: Sequelize.FLOAT
      },
      remainingAmount: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('DailyConsumptions');
  }
};