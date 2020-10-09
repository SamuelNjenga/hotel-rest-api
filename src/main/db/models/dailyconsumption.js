'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DailyConsumption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DailyConsumption.belongsTo(models.FoodStorage, {
        foreignKey: {
          name: 'foodStorageId',
          allowNull: false
        }
      });
    }
  };
  DailyConsumption.init({
    foodStorageId: DataTypes.INTEGER,
    estimatedAmount: DataTypes.FLOAT,
    consumedAmount: DataTypes.FLOAT,
    remainingAmount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'DailyConsumption',
  });
  return DailyConsumption;
};