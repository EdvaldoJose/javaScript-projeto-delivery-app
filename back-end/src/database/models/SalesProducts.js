module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    seller_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    total_price: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    delivery_address:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    delivery_number: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    sale_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    status:{
      allowNull: false,
      type: DataTypes.STRING,
    }
  },
  {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  }
  );

  sale.associate = (models) => {
    sale.belongsTo(models.User, {
      foreignKey: 'user_id', as: 'customer'
    });

    sale.belongsTo(models.User, {
      foreignKey: 'seller_id', as: 'seller'
    });
  }

  return sale;
}
