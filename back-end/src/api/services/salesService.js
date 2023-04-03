const { Sale, User } = require('../../database/models');

const getAllSellers = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' } });

  return sellers;
};

const createSale = async (body) => {
  const result = await Sale.create(body);

  return result;
};

module.exports = { createSale, getAllSellers };