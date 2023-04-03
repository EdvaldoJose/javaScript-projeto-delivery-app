const { Router } = require('express');
const salesController = require('../controllers/salesController');

const salesRouter = Router();

salesRouter.post('/', (req, res) => salesController.createSales(req, res));
salesRouter.get('/sellers', (req, res) => salesController.getAllSellers(req, res));
router.get('/orders/:id', (req, res) => salesController.getAllSalesOrders(req, res));

module.exports = salesRouter;
