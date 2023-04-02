const service = require('../services/salesService');

const getAllSalesOrders = async (req, res) => {
  const { id } = req.params;
  const data = await service.findAllById(id);
  res.status(200).json(data);
};

module.exports = {
  getAllSalesOrders,
};