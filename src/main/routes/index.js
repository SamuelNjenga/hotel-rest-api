const Router = require('express');
const UserRoutes = require('./UserRoutes');
const LoginRoutes = require('./LoginRoutes');
const CustomerRoutes = require('./CustomerRoutes')

const router = Router();

router.use('/users', UserRoutes);
router.use('/login', LoginRoutes);
router.use('/customers',CustomerRoutes);

module.exports = router;