const service = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const data = await service.getAllProducts();
  res.status(200).json(data);
};

module.exports = {
  getAllProducts,
};