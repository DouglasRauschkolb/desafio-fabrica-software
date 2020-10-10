module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define('Books', {
        name: DataTypes.STRING,
        volume: DataTypes.INTEGER,
        author: DataTypes.STRING,
        stock_quantity: DataTypes.INTEGER,
        category: DataTypes.STRING, 
        delivery_period: DataTypes.INTEGER, 
        photo: DataTypes.STRING,
    });
    return Books;
}