module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    url_image: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  },
  {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });

  return Product;
}
