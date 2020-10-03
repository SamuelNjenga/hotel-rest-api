const Router = require('express');
const UserRoutes = require('./UserRoutes');
const LoginRoutes = require('./LoginRoutes');

const router = Router();

router.use('/users', UserRoutes);
router.use('/login', LoginRoutes);

module.exports = router;