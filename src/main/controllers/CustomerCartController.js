const customerCartService = require('../services/CustomerCartService');
const ReqValidator = require('../utils/validator')

exports.createCustomerCart = async (req, res) => {
    try {
        await customerCartService.createCustomerCart()
        res.status(201).json('sent');
    } catch (err) {
        console.log(err);
    }
};

exports.updateCustomerCart = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            menuItemId: 'required'
        })
        if (!valid) return
        const data = {
            menuItemId: req.body.menuItemId
        };

        const customerCartId = req.params.id;
        await customerCartService.updateCustomerCart(data, {
            where: {
                id: customerCartId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteCustomerCart = async (req, res, next) => {
    try {
        const customerCartId = req.params.id;
        await customerCartService.deleteCustomerCart({
            where: {
                id: customerCartId
            }
        });
        res.status(200).json({
            data: null,
            message: `CustomerCart ${customerCartId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getCustomerCarts = async (req, res) => {
    try {
        const customerCarts = await customerService.getCustomerCarts();
        res.status(200).json(customerCarts);
    } catch (err) {
        res.json({
            message: err
        });
    }
};