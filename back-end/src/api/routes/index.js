const { Router } = require('express');
const loginRoutes = require('./loginRoutes');

const router = Router();

router.use(loginRoutes);

module.exports = router;
