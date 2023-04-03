'use strict';

module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    deliveryAddress:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    saleDate: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
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
