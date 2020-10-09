'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodStorage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FoodStorage.hasMany(models.DailyConsumption,{
        onDelete:"cascade",
        foreignKey:{
          name:'foodStorageId',
          allowNull:false
        }
      });
    }
  };
  FoodStorage.init({
    foodItemName: DataTypes.STRING,
    foodItemDescription: DataTypes.STRING,
    foodItemAmount: DataTypes.FLOAT,
    dateOfEntry: DataTypes.DATE,
    expiryDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'FoodStorage',
  });
  return FoodStorage;
};