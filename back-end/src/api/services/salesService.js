const { Sale } = require('../../database/models');

const findAllById = async (id) => {
  const orders = await Sale.findAll({ where: { sellerId: id } });
  console.log(orders);

  return orders;
};

module.exports = { findAllById };