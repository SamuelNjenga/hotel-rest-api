const db = require('../db/models/index');

exports.createCustomer = async (data) => {
    return db.Customer.create(data);
};

exports.updateCustomer = async (data, root) => {
    return db.Customer.update(data, root);
};

exports.getCustomers = async () => {
    return db.Customer.findAll();
};

exports.deleteCustomer = async (data) => {
    return db.Customer.destroy(data);
};