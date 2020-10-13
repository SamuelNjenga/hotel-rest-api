const orderService = require('../services/OrderService');
const ReqValidator = require('../utils/validator')

exports.createOrder = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            customerId: 'required|integer',
            customerCartId: 'required|integer'
        })
        if (!valid) return
        const data = {
            customerId: req.body.customerId,
            customerCartId: req.body.customerCartId
        };
        await orderService.createOrder(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            customerId: 'required|integer',
            customerCartId: 'required|integer'
        })
        if (!valid) return
        const data = {
            customerId: req.body.customerId,
            customerCartId: req.body.customerCartId
        };

        const orderId = req.params.id;
        await orderService.updateOrder(data, {
            where: {
                id: orderId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteOrder = async (req, res, next) => {
    try {
        const orderId = req.params.id;
        await orderService.deleteOrder({
            where: {
                id: orderId
            }
        });
        res.status(200).json({
            data: null,
            message: `Order ${orderId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders();
        res.status(200).json(orders);
    } catch (err) {
        res.json({
            message: err
        });
    }
};