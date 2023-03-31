const { Product } = require('../../database/models');

// const { NOT_FOUND, HTTP_OK } = require('../utils/http_status');

const getAllProducts = async () => {
  const data = await Product.findAll();
  return data;
};

module.exports = {
  getAllProducts,
};