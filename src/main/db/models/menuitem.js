'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MenuItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MenuItem.init({
    itemName: DataTypes.STRING,
    itemDescription: DataTypes.STRING,
    itemPrice: DataTypes.FLOAT,
    isAvailable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'MenuItem',
  });
  return MenuItem;
};