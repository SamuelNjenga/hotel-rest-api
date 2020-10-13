'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CustomerCart.hasMany(models.CustomerCartItem,{
        onDelete:"cascade",
        foreignKey:{
          name:'cartId',
          allowNull:false
        }
      });
    }
  };
  CustomerCart.init({
  }, {
    sequelize,
    modelName: 'CustomerCart',
  });
  return CustomerCart;
};