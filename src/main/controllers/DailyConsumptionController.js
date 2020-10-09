const dailyConsumptionService = require('../services/DailyConsumptionService');
const ReqValidator = require('../utils/validator')

exports.createDailyConsumption = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            foodStorageId: 'required|integer',
            estimatedAmount: 'required',
            consumedAmount: 'required',
            remainingAmount: 'required'
        })
        if (!valid) return
        const data = {
            foodStorageId: req.body.foodStorageId,
            estimatedAmount: req.body.estimatedAmount,
            consumedAmount: req.body.consumedAmount,
            remainingAmount: req.body.remainingAmount
        };
        await dailyConsumptionService.createDailyConsumption(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateDailyConsumption = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            foodStorageId: 'required|integer',
            estimatedAmount: 'required',
            consumedAmount: 'required',
            remainingAmount: 'required'
        })
        if (!valid) return
        const data = {
            foodStorageId: req.body.foodStorageId,
            estimatedAmout: req.body.estimatedAmount,
            consumedAmount: req.body.consumedAmount,
            remainingAmount: req.body.remainingAmount
        };

        const dailyConsumptionId = req.params.id;
        await dailyConsumptionService.updateDailyConsumption(data, {
            where: {
                id: dailyConsumptionId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteDailyConsumption = async (req, res, next) => {
    try {
        const dailyConsumptionId = req.params.id;
        await dailyConsumptionService.deleteDailyConsumption({
            where: {
                id: dailyConsumptionId
            }
        });
        res.status(200).json({
            data: null,
            message: `DailyConsumption ${dailyConsumptionId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getDailyConsumptions = async (req, res) => {
    try {
        const dailyConsumptions = await dailyConsumptionService.getDailyConsumptions();
        res.status(200).json(dailyConsumptions);
    } catch (err) {
        res.json({
            message: err
        });
    }
};