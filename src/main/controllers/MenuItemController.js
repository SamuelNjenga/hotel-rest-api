const menuItemService = require('../services/MenuItemService');
const ReqValidator = require('../utils/validator')

exports.createMenuItem = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            itemName: 'required|string',
            itemDescription: 'required|string',
            itemPrice: 'required',
            isAvailable: 'required'
        })
        if (!valid) return
        const data = {
            itemName: req.body.itemName,
            itemDescription: req.body.itemDescription,
            itemPrice: req.body.itemPrice,
            isAvailable: req.body.isAvailable
        };
        await menuItemService.createMenuItem(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateMenuItem = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            itemName: 'required|string',
            itemDescription: 'required|string',
            itemPrice: 'required',
            isAvailable: 'required'
        })
        if (!valid) return
        const data = {
            itemName: req.body.itemName,
            itemDescription: req.body.itemDescription,
            itemPrice: req.body.itemPrice,
            isAvailable: req.body.isAvailable
        };

        const menuItemId = req.params.id;
        await menuItemService.updateMenuItem(data, {
            where: {
                id: menuItemId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteMenuItem = async (req, res, next) => {
    try {
        const menuItemId = req.params.id;
        await menuItemService.deleteMenuItem({
            where: {
                id: menuItemId
            }
        });
        res.status(200).json({
            data: null,
            message: `MenuItem ${menuItemId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getMenuItems = async (req, res) => {
    try {
        const menuItems = await menuItemService.getMenuItems();
        res.status(200).json(menuItems);
    } catch (err) {
        res.json({
            message: err
        });
    }
};