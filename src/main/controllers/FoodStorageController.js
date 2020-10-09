const foodStorageService = require('../services/FoodStorageService');
const ReqValidator = require('../utils/validator')

exports.createFoodStorage = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            foodItemName: 'required|string',
            foodItemDescription: 'required|string',
            foodItemAmount: 'required',
            dateOfEntry: 'required',
            expiryDate: 'required'
        })
        if (!valid) return
        const data = {
            foodItemName: req.body.foodItemName,
            foodItemDescription: req.body.foodItemDescription,
            foodItemAmount: req.body.foodItemAmount,
            dateOfEntry: req.body.dateOfEntry,
            expiryDate: req.body.expiryDate
        };
        await foodStorageService.createFoodStorage(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateFoodStorage = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            foodItemName: 'required|string',
            foodItemDescription: 'required|string',
            foodItemAmount: 'required',
            dateOfEntry: 'required',
            expiryDate: 'required'
        })
        if (!valid) return
        const data = {
            foodItemName: req.body.foodItemName,
            foodItemDescription: req.body.foodItemDescription,
            foodItemAmount: req.body.foodItemAmount,
            dateOfEntry: req.body.dateOfEntry,
            expiryDate: req.body.expiryDate
        };

        const foodStorageId = req.params.id;
        await foodStorageService.updateFoodStorage(data, {
            where: {
                id: foodStorageId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteFoodStorage = async (req, res, next) => {
    try {
        const foodStorageId = req.params.id;
        await foodStorageService.deleteFoodStorage({
            where: {
                id: foodStorageId
            }
        });
        res.status(200).json({
            data: null,
            message: `FoodStorage ${foodStorageId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getFoodStorages = async (req, res) => {
    try {
        const foodStorages = await foodStorageService.getFoodStorages();
        res.status(200).json(foodStorages);
    } catch (err) {
        res.json({
            message: err
        });
    }
};