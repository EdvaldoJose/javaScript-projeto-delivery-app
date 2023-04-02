const { Router } = require('express');
const salesController = require('../controllers/salesController');

const router = Router();

router.get('/orders/:id', (req, res) => salesController.getAllSalesOrders(req, res));

module.exports = router;