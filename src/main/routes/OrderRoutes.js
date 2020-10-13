const Router = require('express');
const orderController = require("../controllers/orderController");

const router = Router();

router.post('/', orderController.createOrder);
router.get('/', orderController.getOrders);
router.delete('/:id', orderController.deleteOrder);
router.put('/:id', orderController.updateOrder);

module.exports = router;