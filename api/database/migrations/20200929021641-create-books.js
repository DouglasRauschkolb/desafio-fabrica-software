module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Books', {
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
      volume: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      stock_quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      category: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      delivery_period: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      photo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Books');
  }
};