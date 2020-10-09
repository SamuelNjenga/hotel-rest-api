const db = require('../db/models/index');

exports.createFoodStorage = async (data) => {
    return db.FoodStorage.create(data);
};

exports.updateFoodStorage = async (data, root) => {
    return db.FoodStorage.update(data, root);
};

exports.getFoodStorages = async () => {
    return db.FoodStorage.findAll();
};

exports.deleteFoodStorage = async (data) => {
    return db.FoodStorage.destroy(data);
};