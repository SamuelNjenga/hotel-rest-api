const Router = require('express');
const dailyConsumptionController = require("../controllers/DailyConsumptionController");

const router = Router();

router.post('/', dailyConsumptionController.createDailyConsumption);
router.get('/', dailyConsumptionController.getDailyConsumptions);
router.delete('/:id', dailyConsumptionController.deleteDailyConsumption);
router.put('/:id', dailyConsumptionController.updateDailyConsumption);

module.exports = router;