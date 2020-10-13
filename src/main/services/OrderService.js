const db = require('../db/models/index');

exports.createOrder = async (data) => {
    return db.Order.create(data);
};

exports.updateOrder = async (data, root) => {
    return db.Order.update(data, root);
};

exports.getOrders = async () => {
    return db.Order.findAll();
};

exports.deleteOrder = async (data) => {
    return db.Order.destroy(data);
};