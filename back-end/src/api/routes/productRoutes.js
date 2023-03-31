const { Router } = require('express');
const productController = require('../controllers/productController');

const router = Router();

router.get('/', (req, res) => productController.getAllProducts(req, res));

module.exports = router;