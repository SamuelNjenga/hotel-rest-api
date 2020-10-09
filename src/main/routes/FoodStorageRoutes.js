const Router = require('express');
const foodStorageController = require("../controllers/FoodStorageController");

const router = Router();

router.post('/', foodStorageController.createFoodStorage);
router.get('/', foodStorageController.getFoodStorages);
router.delete('/:id', foodStorageController.deleteFoodStorage);
router.put('/:id', foodStorageController.updateFoodStorage);

module.exports = router;