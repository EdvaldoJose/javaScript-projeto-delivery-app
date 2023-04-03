const salesService = require('../services/salesService');

const getAllSalesOrders = async (req, res) => {
  const { id } = req.params;
  const data = await salesService.findAllById(id);
  res.status(200).json(data);
};

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
  getAllSalesOrders,
};