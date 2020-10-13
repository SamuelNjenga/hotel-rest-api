const db = require('../db/models/index');

exports.createCustomerCartItem = async (data) => {
    return db.CustomerCartItem.create(data);
};

exports.updateCustomerCartItem = async (data, root) => {
    return db.CustomerCartItem.update(data, root);
};

exports.getCustomerCartItems = async () => {
    return db.CustomerCartItem.findAll();
};

exports.deleteCustomerCartItem = async (data) => {
    return db.CustomerCartItem.destroy(data);
};