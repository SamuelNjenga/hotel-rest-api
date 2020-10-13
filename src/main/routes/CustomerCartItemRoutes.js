const Router = require('express');
const customerCartItemController = require("../controllers/CustomerCartItemController");

const router = Router();

router.post('/', customerCartItemController.createCustomerCartItem);
router.get('/', customerCartItemController.getCustomerCartItems);
router.delete('/:id', customerCartItemController.deleteCustomerCartItem);
router.put('/:id', customerCartItemController.updateCustomerCartItem);

module.exports = router;