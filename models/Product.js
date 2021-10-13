const { Sequelize, DataTypes, Model } = require('sequelize');

const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`);

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error));


// Product nesnemizi olusuturyoruz

class Product extends Model{




}

const properties = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'ID',
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "created"
    },
    productName: {
        type:DataTypes.STRING,
        allowNull: false,
        field: 'ProductName',
    },
    unitPrice: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: 0,
        field: 'UnitPrice'
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        field: 'Stock'
    },
    createdAt: {
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        // defaultValue: Date.now(),
        field: 'CreatedAt'
    },
    updatedAt: {
        type: DataTypes.DATEONLY,
        field: 'UpdatedAt'
    },
    deletedAt: {
        type: DataTypes.DATEONLY,
        field: 'DeletedAt'
    },
}

const options = {
    sequelize,
    modelNAme: 'Product',
    tableName: 'Products',
}

Product.init(properties, options);

module.exports = Product;