const Router = require('express');
const customerCartController = require("../controllers/CustomerCartController");

const router = Router();

router.post('/', customerCartController.createCustomerCart);
router.get('/', customerCartController.getCustomerCarts);
router.delete('/:id', customerCartController.deleteCustomerCart);
router.put('/:id', customerCartController.updateCustomerCart);

module.exports = router;