const db = require('../db/models/index');

exports.createDailyConsumption = async (data) => {
    return db.DailyConsumption.create(data);
};

exports.updateDailyConsumption = async (data, root) => {
    return db.DailyConsumption.update(data, root);
};

exports.getDailyConsumptions = async () => {
    return db.DailyConsumption.findAll();
};

exports.deleteDailyConsumption = async (data) => {
    return db.DailyConsumption.destroy(data);
};