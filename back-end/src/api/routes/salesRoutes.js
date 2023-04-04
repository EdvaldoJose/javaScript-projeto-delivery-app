const { Router } = require('express');
const salesController = require('../controllers/salesController');

const salesRouter = Router();

salesRouter.post('/', (req, res) => salesController.createSales(req, res));
salesRouter.put('/:id', (req, res) => salesController.updateSaleStatus(req, res));
salesRouter.get('/sellers', (req, res) => salesController.getAllSellers(req, res));
salesRouter.get('/orders/:id', (req, res) => salesController.getAllSalesOrders(req, res));
salesRouter.get('/:id', (req, res) => salesController.getProductsBySale(req, res));

module.exports = salesRouter;
