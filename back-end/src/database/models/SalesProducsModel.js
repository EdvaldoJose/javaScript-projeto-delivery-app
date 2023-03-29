module.exports = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('SaleProduct',
  {
    sale_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  },
  {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });
  
  saleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: saleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: saleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  }

  return saleProduct;
}
