const customerCartItemService = require('../services/CustomerCartItemService');
const ReqValidator = require('../utils/validator')

exports.createCustomerCartItem = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            cartId: 'required|integer',
            menuItemId: 'required|integer'
        })
        if (!valid) return
        const data = {
            cartId: req.body.cartId,
            menuItemId: req.body.menuItemId
        };
        await customerCartItemService.createCustomerCartItem(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateCustomerCartItem = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            cartId: 'required|integer',
            menuItemId: 'required|integer'
        })
        if (!valid) return
        const data = {
            cartId: req.body.cartId,
            menuItemId: req.body.menuItemId
        };

        const customerCartItemId = req.params.id;
        await customerCartItemService.updateCustomerCartItem(data, {
            where: {
                id: customerCartItemId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteCustomerCartItem = async (req, res, next) => {
    try {
        const customerCartItemId = req.params.id;
        await customerCartItemService.deleteCustomerCartItem({
            where: {
                id: customerCartItemId
            }
        });
        res.status(200).json({
            data: null,
            message: `CustomerCartItem ${customerId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getCustomerCartItems = async (req, res) => {
    try {
        const customerCartItems = await customerCartItemService.getCustomerCartItems();
        res.status(200).json(customerCartItems);
    } catch (err) {
        res.json({
            message: err
        });
    }
};