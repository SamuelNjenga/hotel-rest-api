'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
          allowNull: false
        }
      });
      Customer.hasMany(models.Order,{
        onDelete:"cascade",
        foreignKey:{
          name:'customerId',
          allowNull:false
        }
      });
    }
  };
  Customer.init({
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};