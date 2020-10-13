'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Customer, {
        foreignKey: {
          name: 'customerId',
          allowNull: false
        }
      });
      Order.belongsTo(models.CustomerCart, {
        foreignKey: {
          name: 'customerCartId',
          allowNull: false
        }
      });
    }
  };
  Order.init({
    customerId: DataTypes.INTEGER,
    customerCartId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};