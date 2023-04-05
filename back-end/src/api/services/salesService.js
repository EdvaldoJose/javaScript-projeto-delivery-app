const Sequelize = require('sequelize');
const { Sale, User, SaleProduct } = require('../../database/models');
require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';

const config = require('../../database/config/config');

const sequelize = new Sequelize(config[environment]);

const getAllSellers = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' } });

  return sellers;
};

const createSale = async ({ 
  sellerId, userId, totalPrice, deliveryAddress, deliveryNumber, status, productList }) => {
    try {
      const result = await sequelize.transaction(async (t) => {
        const sale = await Sale.create(
    { sellerId, userId, totalPrice, deliveryAddress, deliveryNumber, status, saleDate: new Date() },
    { transaction: t },
        );
        const listProducts = productList.map((item) => 
        ({ productId: item.id, quantity: item.quantity, saleId: sale.id }));
        await SaleProduct.bulkCreate(listProducts, { transaction: t });
        return sale;
      });
    return result;
    } catch (error) {
      console.log(error);
    }
};

const findAllById = async (id) => {
  const orders = await Sale.findAll({ where: { sellerId: id } });
  return orders;
};

const findCustomerOrders = async (id) => {
  const orders = await Sale.findAll({ where: { userId: id } });
  return orders;
};

const getProductsBySaleId = async (id) => {
  const list = await SaleProduct.findAll({ where: { saleId: id } });
  return list;
};

const updateSaleStatus = async (status, id) => {
  const result = await Sale.update({ status }, { where: { id } });
  return result;
};

module.exports = {
  createSale, 
  getAllSellers, 
  findAllById, 
  getProductsBySaleId,
  updateSaleStatus,
  findCustomerOrders,
};
