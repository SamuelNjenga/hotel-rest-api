'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerCartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CustomerCartItem.belongsTo(models.MenuItem, {
        foreignKey: {
          name: 'menuItemId',
          allowNull: false
        }
      });
      CustomerCartItem.belongsTo(models.CustomerCart, {
        foreignKey: {
          name: 'cartId',
          allowNull: false
        }
      });
    }
  };
  CustomerCartItem.init({
    menuItemId: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CustomerCartItem',
  });
  return CustomerCartItem;
};