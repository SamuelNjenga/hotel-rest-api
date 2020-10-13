const db = require('../db/models/index');

exports.createCustomerCart = async (data) => {
    return db.CustomerCart.create(data);
};

exports.updateCustomerCart = async (data, root) => {
    return db.CustomerCart.update(data, root);
};

exports.getCustomerCarts = async () => {
    return db.CustomerCart.findAll();
};

exports.deleteCustomerCart = async (data) => {
    return db.CustomerCart.destroy(data);
};