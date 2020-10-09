const db = require('../db/models/index');

exports.createMenuItem = async (data) => {
    return db.MenuItem.create(data);
};

exports.updateMenuItem = async (data, root) => {
    return db.MenuItem.update(data, root);
};

exports.getMenuItems = async () => {
    return db.MenuItem.findAll();
};

exports.deleteMenuItem = async (data) => {
    return db.MenuItem.destroy(data);
};