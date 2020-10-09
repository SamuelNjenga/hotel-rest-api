const Router = require('express');
const menuItemController = require("../controllers/MenuItemController");

const router = Router();

router.post('/', menuItemController.createMenuItem);
router.get('/', menuItemController.getMenuItems);
router.delete('/:id', menuItemController.deleteMenuItem);
router.put('/:id', menuItemController.updateMenuItem);

module.exports = router;