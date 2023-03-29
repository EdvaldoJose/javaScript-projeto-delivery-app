module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define('User', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.STRING,
      },
  }, {
      tableName: 'users',
      timestamps: false,
      underscored: true,
    });

    User.associate = (models) => {
      User.hasMany(models.Sale, { foreignKey: 'user_id', as: 'orders', constraint: true });
  
      User.hasMany(models.Sale, { foreignKey: 'seller_id', as: 'sales', constraint: true });
    }
  return User;
};
