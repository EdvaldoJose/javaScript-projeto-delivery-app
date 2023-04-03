'use strict';

module.exports = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('SaleProduct',
  {
    saleId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    }
  },
  {
    tableName: 'sales_products',
    timestamps: false,
    underscored: true,
  });
  
  saleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: saleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: saleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  }

  return saleProduct;
}
