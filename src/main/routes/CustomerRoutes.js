const Router = require('express');
const customerController = require("../controllers/CustomerController");

const router = Router();

router.post('/', customerController.createCustomer);
router.get('/', customerController.getCustomers);
router.delete('/:id', customerController.deleteCustomer);
router.put('/:id', customerController.updateCustomer);

module.exports = router;