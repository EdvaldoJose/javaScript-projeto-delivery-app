const { Router } = require('express');
const loginControllers = require('../controllers/loginController');

const router = Router();

router.post('/register/adm', (req, res) => loginControllers.createUserByAdm(req, res));
router.post('/register', (req, res) => loginControllers.createUser(req, res));
router.post('/', (req, res) => loginControllers.login(req, res));
router.get('/users', (req, res) => loginControllers.getAllUsers(req, res));
router.delete('/users/:id', (req, res) => loginControllers.deleteUser(req, res));

module.exports = router;
