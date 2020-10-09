const customerService = require('../services/CustomerService');
const ReqValidator = require('../utils/validator')

exports.createCustomer = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            userId: 'required|integer'
        })
        if (!valid) return
        const data = {
            userId: req.body.userId
        };
        await customerService.createCustomer(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            userId: 'required|integer'
        })
        if (!valid) return
        const data = {
            userId: req.body.userId
        };

        const customerId = req.params.id;
        await customerService.updateCustomer(data, {
            where: {
                id: customerId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteCustomer = async (req, res, next) => {
    try {
        const customerId = req.params.id;
        await customerService.deleteCustomer({
            where: {
                id: customerId
            }
        });
        res.status(200).json({
            data: null,
            message: `Customer ${userId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getCustomers = async (req, res) => {
    try {
        const customers = await customerService.getCustomers();
        res.status(200).json(customers);
    } catch (err) {
        res.json({
            message: err
        });
    }
};