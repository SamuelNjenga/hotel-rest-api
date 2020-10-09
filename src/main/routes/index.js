const Router = require('express');
const UserRoutes = require('./UserRoutes');
const LoginRoutes = require('./LoginRoutes');
const CustomerRoutes = require('./CustomerRoutes');
const FoodStorageRoutes = require('./FoodStorageRoutes');

const router = Router();

router.use('/users', UserRoutes);
router.use('/login', LoginRoutes);
router.use('/customers',CustomerRoutes);
router.use('/foodStorages',FoodStorageRoutes);

module.exports = router;