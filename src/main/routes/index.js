const Router = require('express');
const UserRoutes = require('./UserRoutes');
const LoginRoutes = require('./LoginRoutes');
const CustomerRoutes = require('./CustomerRoutes');
const FoodStorageRoutes = require('./FoodStorageRoutes');
const DailyConsumptionRoutes = require('./DailyConsumptionRoutes');
const MenuItemRoutes = require('./MenuItemRoutes')
const CustomerCartRoutes = require('./CustomerCartRoutes')
const CustomerCartItemRoutes = require('./CustomerCartItemRoutes')

const router = Router();

router.use('/users', UserRoutes);
router.use('/login', LoginRoutes);
router.use('/customers',CustomerRoutes);
router.use('/foodStorages',FoodStorageRoutes);
router.use('/dailyConsumptions',DailyConsumptionRoutes);
router.use('/menuItems',MenuItemRoutes);
router.use('/customerCarts',CustomerCartRoutes);
router.use('/customerCartItems',CustomerCartItemRoutes);

module.exports = router;