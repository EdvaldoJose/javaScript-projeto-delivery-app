const salesService = require('../services/salesService');

const getAllSellers = async (_req, res) => {
  const sellers = await salesService.getAllSellers();
  res.status(200).json(sellers);
};

const createSales = async (req, res) => {
  const sales = await salesService.createSale(req.body);

  res.status(201).json(sales);
};

module.exports = {
  getAllSellers,
  createSales,
};