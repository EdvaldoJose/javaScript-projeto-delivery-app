const { Router } = require('express');
const loginControllers = require('../controllers/loginController');

const router = Router();

router.post('/login', (req, res) => loginControllers.login(req, res));
router.post('/register', (req, res) => loginControllers.createUser(req, res));

module.exports = router;
